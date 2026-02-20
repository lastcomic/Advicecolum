# The Second Opinion

A web app that works like a 1960s newspaper advice column. A person types in their name, location, and a question. The app writes a feature article ABOUT them and their situation — third person, like a real journalist covering their story. Then an AI voice reads the article aloud.

## The Experience

1. Person lands on the page. Sees a 1960s newspaper-style interface.
2. They enter their first name, location, and their question.
3. They hit "Send It In."
4. A pause. "Our columnist is investigating..." (3-4 seconds of anticipation).
5. The article appears with a typewriter effect — letter by letter, with subtle clicking sounds.
6. The article is written in THIRD PERSON about the person.
7. After the article finishes typing, a "Read It To Me" button appears.
8. Clicking it plays an AI-generated voice reading the full article aloud.
9. A "Write Another Letter" button lets them start over.

## Setup

1. Install dependencies:

```bash
pip install -r requirements.txt
```

2. Set your API keys in a `.env` file:

```
ANTHROPIC_API_KEY=sk-ant-xxxxx
ELEVENLABS_API_KEY=xxxxx
ELEVENLABS_VOICE_ID=xxxxx
```

3. Run the app:

```bash
python app.py
```

4. Open http://localhost:5000

## Project Structure

```
app.py              # Flask backend with Claude + ElevenLabs API integration
templates/
  index.html        # 1960s newspaper-style page
static/
  style.css         # Full newspaper styling
  app.js            # Typewriter effect, streaming, audio playback
requirements.txt    # Python dependencies
```

## How It Works

- Users submit their name, location, and question through the newspaper-style interface
- The question is sent to Claude (claude-sonnet-4-20250514) with a system prompt that produces third-person feature articles
- The response streams back via Server-Sent Events and is rendered with a typewriter effect (20ms per character, click sounds, punctuation pauses)
- After the article finishes, users can have it read aloud via ElevenLabs text-to-speech

## Disclaimer

This column is powered by AI and intended for entertainment and reflection. It is not a substitute for professional advice from a therapist, doctor, lawyer, or financial advisor.
