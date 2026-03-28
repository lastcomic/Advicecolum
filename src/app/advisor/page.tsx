"use client";

import { useState } from "react";

const SHOPIFY_URL = "https://oldageuniversity.myshopify.com/products/freshman-class-of-old-age-starter-kit-welcome-to-the-second-draft";

interface Course {
  number: number;
  title: string;
  credits: number;
  description: string;
}

interface OrientationPage {
  num: number;
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"input" | "gate" | "loading" | "results">("input");
  const [result, setResult] = useState<AdvisorResult | null>(null);
  const [error, setError] = useState("");
  const [activePage, setActivePage] = useState(0);

  const handleSituationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!situation.trim()) return;
    setStep("gate");
  };

  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setStep("loading");
    setError("");

    try {
      const res = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ situation, name, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setStep("gate");
        return;
      }

      setResult(data);
      setStep("results");
    } catch {
      setError("Could not connect. Please try again.");
      setStep("gate");
    }
  };

  return (
    <>
      <section className="bg-navy text-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Course Advisor</h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Tell us what you&rsquo;re dealing with. We&rsquo;ll recommend the courses.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Step 1: Situation input */}
          {step === "input" && (
            <form onSubmit={handleSituationSubmit} className="space-y-6">
              <div>
                <label htmlFor="situation" className="block font-heading text-xl font-bold mb-3">
                  What are you dealing with?
                </label>
                <p className="text-navy/60 mb-4">
                  Bad knees, adult children with opinions, the realization that your prime was
                  actually pretty average &mdash; whatever it is, type it here.
                </p>
                <textarea
                  id="situation"
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                  rows={5}
                  className="w-full border-2 border-navy/20 rounded-lg p-4 text-lg focus:border-gold focus:outline-none resize-none bg-white"
                  placeholder="e.g., I just turned 50 and my kid asked me what music I listened to 'back in the day'..."
                />
              </div>
              <button
                type="submit"
                disabled={!situation.trim()}
                className="bg-navy text-cream font-bold px-8 py-4 text-lg rounded hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Get My Recommendations
              </button>
            </form>
          )}

          {/* Step 2: Email gate */}
          {step === "gate" && (
            <form onSubmit={handleGateSubmit} className="space-y-6">
              <div className="bg-cream-dark rounded-lg p-8">
                <h2 className="font-heading text-2xl font-bold mb-2">Almost there.</h2>
                <p className="text-navy/60 mb-6">
                  Your course recommendations are being prepared. We just need a name and email
                  to personalize your results.
                </p>

                {error && (
                  <div className="bg-red-50 text-red-700 border border-red-200 rounded p-4 mb-4">
                    {error}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-2 border-navy/20 rounded-lg p-3 focus:border-gold focus:outline-none bg-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-2 border-navy/20 rounded-lg p-3 focus:border-gold focus:outline-none bg-white"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={!name.trim() || !email.trim()}
                className="bg-gold text-navy font-bold px-8 py-4 text-lg rounded hover:bg-gold-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Show My Results
              </button>
            </form>
          )}

          {/* Loading */}
          {step === "loading" && (
            <div className="text-center py-16">
              <div className="inline-block w-12 h-12 border-4 border-navy/20 border-t-gold rounded-full animate-spin mb-6" />
              <p className="font-heading text-xl text-navy/70">
                The registrar is reviewing your file...
              </p>
              <p className="text-navy/50 mt-2">This takes about 15 seconds.</p>
            </div>
          )}

          {/* Results */}
          {step === "results" && result && (
            <div className="space-y-12">
              {/* Courses */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Your Recommended Courses</h2>
                <div className="space-y-4">
                  {result.courses.map((course) => (
                    <div key={course.number} className="bg-white border-2 border-navy/10 rounded-lg p-6 shadow-sm">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-heading text-lg font-bold">
                          <span className="text-gold">OAU {course.number}</span>{" "}
                          {course.title}
                        </h3>
                        <span className="text-sm text-navy/50 whitespace-nowrap">
                          {course.credits} credits
                        </span>
                      </div>
                      <p className="text-navy/70 leading-relaxed">{course.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orientation */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-2">
                  {result.orientation.title}
                </h2>
                <p className="text-navy/50 mb-6">Your personalized 5-page orientation</p>

                {/* Page tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto">
                  {result.orientation.pages.map((page, i) => (
                    <button
                      key={page.num}
                      onClick={() => setActivePage(i)}
                      className={`px-4 py-2 rounded text-sm font-semibold whitespace-nowrap transition-colors ${
                        activePage === i
                          ? "bg-navy text-cream"
                          : "bg-navy/10 text-navy/60 hover:bg-navy/20"
                      }`}
                    >
                      Page {page.num}
                    </button>
                  ))}
                </div>

                {/* Active page */}
                <div className="bg-white border-2 border-navy/10 rounded-lg p-8 shadow-sm">
                  <h3 className="font-heading text-xl font-bold mb-4">
                    {result.orientation.pages[activePage].title}
                  </h3>
                  <div className="text-navy/80 leading-relaxed whitespace-pre-line">
                    {result.orientation.pages[activePage].body}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-cream-dark rounded-lg p-8 text-center">
                <h3 className="font-heading text-2xl font-bold mb-3">
                  Want this printed and in your hands?
                </h3>
                <p className="text-navy/60 mb-6">
                  Get the full packet &mdash; acceptance letter, diploma, course catalog, and your
                  personalized orientation. Printed and mailed.
                </p>
                <a
                  href={SHOPIFY_URL}
                  className="inline-block bg-gold text-navy font-bold px-8 py-4 text-lg rounded hover:bg-gold-light transition-colors"
                >
                  Get the Full Packet &mdash; $19
                </a>
              </div>

              {/* Start over */}
              <div className="text-center">
                <button
                  onClick={() => {
                    setStep("input");
                    setSituation("");
                    setName("");
                    setEmail("");
                    setResult(null);
                    setActivePage(0);
                  }}
                  className="text-navy/50 hover:text-navy underline text-sm"
                >
                  Start over with a different situation
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
