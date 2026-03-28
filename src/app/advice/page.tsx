"use client";

import { useState } from "react";

export default function AdvicePage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("/api/advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      setResponse(data.response);
    } catch {
      setError("Could not connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-navy text-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Second Opinion</h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            An advice column for people navigating the second half of life.
            Sharp, warm, and honest. Like a friend who&rsquo;s been through it.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="question" className="block font-heading text-xl font-bold mb-3">
                What&rsquo;s on your mind?
              </label>
              <p className="text-navy/60 mb-4">
                Career pivot at 52. Kids who don&rsquo;t call back. The slow realization that
                your body has started issuing memos you didn&rsquo;t authorize. Whatever it is.
              </p>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={5}
                className="w-full border-2 border-navy/20 rounded-lg p-4 text-lg focus:border-gold focus:outline-none resize-none bg-white"
                placeholder="e.g., My adult daughter gives me unsolicited advice about my diet every time she visits..."
              />
            </div>
            <button
              type="submit"
              disabled={!question.trim() || loading}
              className="bg-navy text-cream font-bold px-8 py-4 text-lg rounded hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Writing the column..." : "Get The Second Opinion"}
            </button>
          </form>

          {loading && (
            <div className="mt-12 text-center">
              <div className="inline-block w-12 h-12 border-4 border-navy/20 border-t-gold rounded-full animate-spin mb-6" />
              <p className="font-heading text-xl text-navy/70">
                The columnist is investigating your situation...
              </p>
            </div>
          )}

          {error && (
            <div className="mt-8 bg-red-50 text-red-700 border border-red-200 rounded-lg p-6">
              {error}
            </div>
          )}

          {response && (
            <div className="mt-12">
              <div className="border-t-4 border-gold pt-8">
                <h2 className="font-heading text-sm uppercase tracking-widest text-gold mb-6">
                  The Second Opinion
                </h2>
                <div className="bg-white border border-navy/10 rounded-lg p-8 shadow-sm">
                  <div className="text-navy/80 leading-relaxed whitespace-pre-line text-lg">
                    {response}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setQuestion("");
                    setResponse("");
                  }}
                  className="text-navy/50 hover:text-navy underline text-sm"
                >
                  Ask another question
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
