"use client";

import { useState } from "react";
import Link from "next/link";

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
      <header className="hdr">
        <Link href="/" className="hdr-logo">
          <div className="hdr-seal">OAU</div>
          <div>
            <span className="hdr-name">Old Age University</span>
            <span className="hdr-tag">Orientation for the Second Half</span>
          </div>
        </Link>
        <a href={SHOPIFY_URL} className="hdr-btn">Send the Packet &rarr;</a>
      </header>

      {/* Hero */}
      <section className="hero">
        <p className="hero-kicker">Old Age University</p>
        <h1>Meet Your<br /><em>Academic Advisor</em></h1>
        <div className="hero-rule" />
        <p className="hero-sub">Tell us what you are dealing with.<br />We will tell you exactly what you are enrolled in.</p>
      </section>

      {/* Advisor form + results */}
      <section style={{maxWidth:680,margin:"0 auto",padding:"48px 24px 72px"}}>
        <textarea
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
          placeholder="I'm 50 and can't decide if I should stay in Michigan or move to Colorado so I can ski more..."
          style={{
            width:"100%",minHeight:100,padding:"12px 14px",
            fontSize:15,fontFamily:"'Crimson Text',Georgia,serif",
            border:"1px solid #ccc",borderRadius:6,
            color:"var(--navy)",lineHeight:1.6,resize:"vertical",
            marginBottom:12,display:"block",background:"#fff"
          }}
        />

        <button
          onClick={handleSubmit}
          disabled={loading || !situation.trim()}
          style={{
            padding:"12px 28px",fontSize:15,fontWeight:600,
            background:loading ? "#ccc" : "var(--navy)",color:"#fff",
            border:"none",borderRadius:6,cursor:loading ? "default" : "pointer",
            marginBottom:"2rem",fontFamily:"'Playfair Display',serif"
          }}
        >
          {loading ? "Reviewing your application..." : "Enroll \u2192"}
        </button>

        {error && <p style={{color:"red",marginBottom:"1rem"}}>{error}</p>}

        {loading && (
          <div style={{textAlign:"center",padding:"48px 0"}}>
            <p style={{fontFamily:"'IM Fell English',serif",fontStyle:"italic",fontSize:18,color:"var(--muted)"}}>The registrar is reviewing your file...</p>
          </div>
        )}

        {result && (
          <div>
            {/* Courses */}
            <p style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--muted)",marginBottom:12}}>Your Courses</p>
            {result.courses.map((c, i) => (
              <div key={i} style={{border:"1px solid var(--dark-cream)",borderRadius:8,padding:"1rem 1.25rem",marginBottom:12,background:"#fff"}}>
                <p style={{fontSize:12,color:"var(--muted)",marginBottom:2}}>{c.number}</p>
                <p style={{fontSize:16,fontWeight:700,color:"var(--navy)",marginBottom:2,fontFamily:"'Playfair Display',serif"}}>{c.title}</p>
                <p style={{fontSize:12,color:"var(--gold)",marginBottom:8}}>{c.credits} credits</p>
                <p style={{fontSize:14,color:"#444",lineHeight:1.65}}>{c.description}</p>
              </div>
            ))}

            {/* Orientation */}
            <p style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--muted)",margin:"1.5rem 0 12px"}}>Your Orientation</p>
            <div style={{background:"var(--dark-cream)",borderRadius:8,padding:"1.5rem"}}>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:700,color:"var(--navy)",marginBottom:"1.25rem"}}>{result.orientation.title}</h2>
              {result.orientation.pages.map((p, i) => (
                <div key={i} style={{
                  marginBottom: i < result.orientation.pages.length - 1 ? "1.25rem" : 0,
                  paddingBottom: i < result.orientation.pages.length - 1 ? "1.25rem" : 0,
                  borderBottom: i < result.orientation.pages.length - 1 ? "1px solid rgba(0,0,0,.1)" : "none"
                }}>
                  <p style={{fontSize:11,color:"var(--muted)",marginBottom:3}}>{p.num}</p>
                  <p style={{fontSize:14,fontWeight:700,color:"var(--navy)",marginBottom:8,fontFamily:"'Playfair Display',serif"}}>{p.title}</p>
                  {p.body.split("\n\n").map((para, j) => (
                    <p key={j} style={{fontSize:14,color:"#444",lineHeight:1.7,marginBottom:8}}>{para}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{textAlign:"center",marginTop:"2.5rem",padding:"2rem",border:"1px solid var(--gold)",borderRadius:8}}>
              <p style={{fontSize:15,color:"var(--navy)",marginBottom:6,fontFamily:"'Playfair Display',serif"}}>This is a preview of what is waiting in your packet.</p>
              <p style={{fontSize:14,color:"var(--muted)",marginBottom:"1.25rem",fontStyle:"italic"}}>Yours gets printed. Put in an envelope. Mailed to you.</p>
              <a
                href={SHOPIFY_URL}
                style={{
                  display:"inline-block",padding:"12px 32px",
                  background:"var(--navy)",color:"#fff",
                  fontSize:15,fontWeight:600,borderRadius:6,
                  textDecoration:"none",fontFamily:"'Playfair Display',serif"
                }}
              >
                Get the Full Packet — $39
              </a>
            </div>

            {/* Start over */}
            <div style={{textAlign:"center",marginTop:24}}>
              <button
                onClick={() => { setSituation(""); setResult(null); }}
                style={{background:"none",border:"none",color:"var(--muted)",fontSize:14,cursor:"pointer",textDecoration:"underline"}}
              >
                Start over
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer>
        <p>
          <a href="https://oldageuniversity.com">oldageuniversity.com</a> &nbsp;&middot;&nbsp;
          @oldageuniversity &nbsp;&middot;&nbsp;
          <a href="https://seconddraftsociety.app">seconddraftsociety.app</a>
        </p>
      </footer>
    </>
  );
}
