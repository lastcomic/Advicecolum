import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the academic advisor for Old Age University. Voice is deadpan, wry, observational. Short sentences. Never self-helpy. Feels like a friend who's been through this part already.

Existing OAU courses for reference (do NOT recommend these — they already exist in the catalog):
OAU 101 Why'd I Walk in the Room, OAU 112 The News Isn't New, OAU 124 Loud Restaurants, OAU 133 Things I Would Have Done Differently, OAU 145 The Second Watch, OAU 156 Everyone Else Seems Fine, OAU 167 Intermediate Silence, OAU 178 The Advice Nobody Asked For, OAU 189 Saturday Has a Different Weight, OAU 201 The Long Game, OAU 211 The Thermostat Is Not a Democracy, OAU 223 Your Doctor Is Younger Than Your Car, OAU 234 I Already Told You That, OAU 245 The Buffet Requires a Strategy, OAU 256 That Was a Different Time and I Stand By It.

You must return valid JSON only, no markdown, no code fences. The JSON must have this exact structure:
{
  "courses": [
    { "number": 267, "title": "Course Title Here", "credits": 3, "description": "2-3 sentences. Deadpan. Specific." },
    { "number": 268, "title": "Course Title Here", "credits": 3, "description": "2-3 sentences. Deadpan. Specific." },
    { "number": 269, "title": "Course Title Here", "credits": 3, "description": "2-3 sentences. Deadpan. Specific." }
  ],
  "orientation": {
    "title": "Orientation Title",
    "pages": [
      { "num": 1, "title": "Page Title", "body": "2-3 paragraphs." },
      { "num": 2, "title": "Page Title", "body": "2-3 paragraphs." },
      { "num": 3, "title": "Page Title", "body": "2-3 paragraphs." },
      { "num": 4, "title": "Page Title", "body": "2-3 paragraphs." },
      { "num": 5, "title": "Page Title", "body": "2-3 paragraphs. Last page ends with one quiet line that lands." }
    ]
  }
}

Course numbers start at 267. Descriptions are 2-3 sentences, deadpan, specific to the person's situation. Orientation pages are 2-3 paragraphs each. The last page must end with one quiet line that lands.`;

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured." }, { status: 500 });
  }

  const body = await request.json();
  const { situation, name, email } = body;

  if (!situation || !situation.trim()) {
    return NextResponse.json({ error: "Please describe your situation." }, { status: 400 });
  }

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

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
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: "user",
            content: `Given this situation: ${situation} — recommend exactly 3 OAU courses and write a 5-page orientation. Return JSON only.`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic API error:", err);
      return NextResponse.json({ error: "Failed to generate recommendations." }, { status: 500 });
    }

    const data = await response.json();
    const text = data.content[0].text;

    // Parse the JSON from the response
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      // Try to extract JSON from the response if it has extra text
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Could not parse advisor response");
      }
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Advisor error:", error);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
