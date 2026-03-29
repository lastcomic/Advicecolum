"use client";

import { useState } from "react";

const SHOPIFY_URL = "https://oldageuniversity.myshopify.com/products/freshman-class-of-old-age-starter-kit-welcome-to-the-second-draft";

interface Course {
  number: string;
  title: string;
  credits: number;
  description: string;
}

interface OrientationPage {
  num: string;
  title: string;
  body: string;
}

interface AdvisorResult {
  courses: Course[];
  orientation: {
    title: string;
    pages: OrientationPage[];
  };
}

export default function AdvisorPage() {
  const [situation, setSituation] = useState("");
  const [result, setResult] = useState<AdvisorResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!situation.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ situation }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-navy text-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4">Old Age University</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Meet Your Academic Advisor
          </h1>
          <div className="gold-rule max-w-xs mx-auto mb-6" />
          <p className="text-cream/70 text-lg max-w-xl mx-auto leading-relaxed">
            Tell us what you are dealing with.<br />
            We will tell you exactly what you are enrolled in.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          {/* Input */}
          <textarea
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="I'm 50 and can't decide if I should stay in Michigan or move to Colorado so I can ski more..."
            rows={4}
            className="w-full border border-navy/20 rounded-lg p-4 font-heading text-base text-navy leading-relaxed focus:border-gold focus:outline-none resize-y bg-white mb-4"
          />

          <button
            onClick={handleSubmit}
            disabled={loading || !situation.trim()}
            className="bg-navy text-cream font-semibold px-7 py-3 text-base rounded hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed mb-8"
          >
            {loading ? "Reviewing your application..." : "Enroll \u2192"}
          </button>

          {error && (
            <p className="text-red-600 mb-6">{error}</p>
          )}

          {/* Loading */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block w-10 h-10 border-4 border-navy/20 border-t-gold rounded-full animate-spin mb-4" />
              <p className="font-heading text-navy/60">The registrar is reviewing your file...</p>
            </div>
          )}

          {/* Results */}
          {result && (
            <div>
              {/* Courses */}
              <p className="text-xs tracking-widest uppercase text-navy/40 mb-4">Your Courses</p>
              <div className="space-y-3 mb-10">
                {result.courses.map((course, i) => (
                  <div key={i} className="border border-navy/10 rounded-lg p-5">
                    <p className="text-xs text-navy/40 mb-1">{course.number}</p>
                    <p className="font-heading text-lg font-bold text-navy mb-1">{course.title}</p>
                    <p className="text-xs text-gold mb-3">{course.credits} credits</p>
                    <p className="text-sm text-navy/70 leading-relaxed">{course.description}</p>
                  </div>
                ))}
              </div>

              {/* Orientation */}
              <p className="text-xs tracking-widest uppercase text-navy/40 mb-4">Your Orientation</p>
              <div className="bg-cream-dark rounded-lg p-6 md:p-8 mb-10">
                <h2 className="font-heading text-xl font-bold text-navy mb-6">
                  {result.orientation.title}
                </h2>
                {result.orientation.pages.map((page, i) => (
                  <div
                    key={i}
                    className={
                      i < result.orientation.pages.length - 1
                        ? "mb-6 pb-6 border-b border-navy/10"
                        : ""
                    }
                  >
                    <p className="text-xs text-navy/40 mb-1">{page.num}</p>
                    <p className="font-heading text-sm font-bold text-navy mb-3">{page.title}</p>
                    {page.body.split("\n\n").map((para, j) => (
                      <p key={j} className="text-sm text-navy/70 leading-relaxed mb-2">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center border border-gold rounded-lg p-8 mb-8">
                <p className="font-heading text-base text-navy mb-2">
                  This is a preview of what is waiting in your packet.
                </p>
                <p className="text-sm text-navy/50 mb-6">
                  Yours gets printed. Put in an envelope. Mailed to you.
                </p>
                <a
                  href={SHOPIFY_URL}
                  className="inline-block bg-navy text-cream font-semibold px-8 py-3 text-base rounded hover:bg-navy-light transition-colors"
                >
                  Get the Full Packet &mdash; $19
                </a>
              </div>

              {/* Start over */}
              <div className="text-center">
                <button
                  onClick={() => {
                    setSituation("");
                    setResult(null);
                  }}
                  className="text-navy/40 hover:text-navy underline text-sm"
                >
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
