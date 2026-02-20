import os

import anthropic
import requests
from flask import Flask, render_template, request, jsonify, Response

from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

SYSTEM_PROMPT = """You are The Second Opinion, a feature writer who covers the human condition. You write reported articles about the questions real people send in.

CRITICAL RULE: You write in THIRD PERSON. You write ABOUT the person, never TO them. Never use "you." Always use their name or "he/she/they."

Example: "Ralph from Ohio has spent 22 years in the same cubicle..." NOT "You've spent 22 years..."

YOUR VOICE:
- Third person always. Write ABOUT them, not TO them.
- Authoritative but warm. A seasoned journalist covering the human condition.
- Humor lives in observations — absurdity, irony, the detail everyone missed. You don't tell jokes.
- Specific. Treat every question like an assignment. Investigate it. Find the angle.
- Anti-toxic positivity. Report the truth. No "everything happens for a reason."
- Grounded in reality. Reference what real people experience, what patterns look like, what the data of lived experience shows.

FORMAT — feature article style:
1. THE LEDE: Scene-setting opening that introduces the person by name and location. Sharp, specific. 1-2 sentences. Example: "Marcus from Detroit has a problem most people would kill for..."
2. THE REPORTING: 2-3 paragraphs investigating the situation in third person. What's happening, why, the real dynamics. Use their name throughout. Bring broader context, patterns, insight. Humor lives here naturally.
3. THE KICKER: One short paragraph that reframes their situation. A final finding that sticks. Still third person.

RULES:
- Under 400 words. Tight, not long.
- ALWAYS third person. NEVER "you." Write about them.
- Use their first name naturally throughout.
- Flowing prose paragraphs. No bullets. No lists. No headers.
- No clichés. No "at the end of the day." No "it is what it is."
- If lighthearted, match that energy.
- If crisis (abuse, self-harm, danger), recommend professional help directly within the article.
- Write ONLY the article. No preamble. No sign-off. Just the piece."""

client = anthropic.Anthropic()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/article", methods=["POST"])
def generate_article():
    data = request.get_json()
    name = data.get("name", "").strip()
    location = data.get("location", "").strip()
    question = data.get("question", "").strip()

    if not name or not location or not question:
        return jsonify({"error": "Please fill in all fields."}), 400

    user_message = f"Name: {name}\nFrom: {location}\n\nTheir question:\n{question}"

    def generate():
        try:
            with client.messages.stream(
                model="claude-sonnet-4-20250514",
                max_tokens=1024,
                system=SYSTEM_PROMPT,
                messages=[{"role": "user", "content": user_message}],
            ) as stream:
                for text in stream.text_stream:
                    yield f"data: {text}\n\n"
            yield "data: [DONE]\n\n"
        except anthropic.AuthenticationError:
            yield "data: [ERROR] API key is missing or invalid.\n\n"
        except anthropic.RateLimitError:
            yield "data: [ERROR] Rate limited. Please try again shortly.\n\n"
        except anthropic.APIStatusError as e:
            yield f"data: [ERROR] API error: {e.message}\n\n"
        except anthropic.APIConnectionError:
            yield "data: [ERROR] Could not connect to the API.\n\n"

    return Response(generate(), mimetype="text/event-stream")


@app.route("/api/voice", methods=["POST"])
def generate_voice():
    data = request.get_json()
    text = data.get("text", "").strip()

    if not text:
        return jsonify({"error": "No text provided."}), 400

    api_key = os.getenv("ELEVENLABS_API_KEY")
    voice_id = os.getenv("ELEVENLABS_VOICE_ID", "pNInz6obpgDQGcFmaJgB")

    if not api_key:
        return jsonify({"error": "ElevenLabs API key not configured."}), 500

    try:
        response = requests.post(
            f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}",
            headers={
                "xi-api-key": api_key,
                "Content-Type": "application/json",
                "Accept": "audio/mpeg",
            },
            json={
                "text": text,
                "model_id": "eleven_monolingual_v1",
                "voice_settings": {
                    "stability": 0.5,
                    "similarity_boost": 0.75,
                    "speed": 0.9,
                },
            },
            timeout=30,
        )

        if response.status_code != 200:
            return jsonify({"error": "Voice generation failed."}), 502

        return Response(
            response.content,
            mimetype="audio/mpeg",
            headers={"Content-Disposition": "inline"},
        )

    except requests.exceptions.Timeout:
        return jsonify({"error": "Voice generation timed out."}), 504
    except requests.exceptions.RequestException:
        return jsonify({"error": "Could not connect to voice service."}), 502


if __name__ == "__main__":
    app.run(debug=True, port=5000)
