# The Second Opinion

An AI-powered advice column for people navigating the second half of life. Built with Flask and the Anthropic Claude API.

## About

The Second Opinion is an advice columnist that writes like a sharp, warm journalist — someone who investigates your question, finds the angle, and delivers the truth with enough humor to make it stick. Powered by Claude, it responds to midlife questions about career pivots, relationships, aging parents, grown kids, and everything in between.

## Setup

1. Install dependencies:

```bash
pip install -r requirements.txt
```

2. Set your Anthropic API key:

```bash
export ANTHROPIC_API_KEY="your-api-key"
```

Or create a `.env` file:

```
ANTHROPIC_API_KEY=your-api-key
```

3. Run the app:

```bash
python app.py
```

4. Open http://localhost:5000 in your browser.

## Project Structure

```
app.py              # Flask backend with Claude API integration
templates/
  index.html        # Frontend page
static/
  style.css         # Newspaper-inspired styling
requirements.txt    # Python dependencies
```

## How It Works

- Users submit their questions through the web interface
- The question is sent to Claude with a detailed system prompt that defines the columnist's voice, format, and rules
- Responses stream back in real-time via Server-Sent Events
- The columnist writes in a news article style: a sharp lede, investigative reporting paragraphs, and a closing kicker

## Disclaimer

This column is powered by AI and intended for entertainment and reflection. It is not a substitute for professional advice from a therapist, doctor, lawyer, or financial advisor.
