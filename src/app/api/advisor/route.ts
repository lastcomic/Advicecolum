import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured." }, { status: 500 });
  }

  const body = await request.json();
  const { situation } = body;

  if (!situation || !situation.trim()) {
    return NextResponse.json({ error: "Please describe your situation." }, { status: 400 });
  }

  const existing = `OAU 101 Why'd I Walk in the Room 3cr, OAU 112 The News Isn't New 2cr, OAU 124 Loud Restaurants A Field Study 2cr, OAU 133 Things I Would Have Done Differently 4cr, OAU 145 The Second Watch 2cr, OAU 156 Everyone Else Seems Fine 3cr, OAU 167 Intermediate Silence 1cr, OAU 178 The Advice Nobody Asked For 3cr, OAU 189 Saturday Has a Different Weight 2cr, OAU 201 The Long Game 4cr, OAU 211 The Thermostat Is Not a Democracy 2cr, OAU 223 Your Doctor Is Younger Than Your Car 3cr, OAU 234 I Already Told You That 2cr, OAU 245 The Buffet Requires a Strategy 1cr, OAU 256 That Was a Different Time and I Stand By It 3cr`;

  const prompt = `You are the course advisor for Old Age University. Deadpan university for people entering the second half of life. Voice: wry, observational, short sentences. Never self-help. Feels like a friend who has been through this part already.

Existing courses: ${existing}

Student situation: "${situation}"

Return ONLY a raw JSON object. No markdown. No backticks. No explanation. Just JSON.

Format:
{
  "courses": [
    {"number": "OAU 267", "title": "Course Title", "credits": 3, "description": "2-3 sentences. Deadpan. Specific. Student feels seen."},
    {"number": "OAU 278", "title": "Course Title", "credits": 2, "description": "2-3 sentences."},
    {"number": "OAU 289", "title": "Course Title", "credits": 3, "description": "2-3 sentences."}
  ],
  "orientation": {
    "title": "Short wry title specific to their situation",
    "pages": [
      {
        "num": "Page 1",
        "title": "What You Are Actually In",
        "body": "2-3 short paragraphs. Name what they are experiencing honestly. Wry. Specific. Short sentences."
      },
      {
        "num": "Page 2",
        "title": "One Thing To Carry",
        "body": "2 paragraphs. One honest thing to hold onto. End with a single quiet line that lands."
      }
    ]
  }
}

Rules: Course numbers 267+. Reuse existing courses when they fit. Always exactly 3 courses. Always exactly 2 orientation pages.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic API error:", err);
      return NextResponse.json({ error: "Failed to generate recommendations." }, { status: 500 });
    }

    const data = await response.json();
    const raw = data.content
      .filter((b: { type: string }) => b.type === "text")
      .map((b: { text: string }) => b.text)
      .join("")
      .replace(/```json|```/g, "")
      .trim();
    const parsed = JSON.parse(raw);
    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Advisor error:", error);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
