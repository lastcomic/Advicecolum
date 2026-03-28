import Link from "next/link";

const SHOPIFY_URL = "https://oldageuniversity.myshopify.com/products/freshman-class-of-old-age-starter-kit-welcome-to-the-second-draft";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-cream py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
            You Didn&rsquo;t Apply.<br />You Got In Anyway.
          </h1>
          <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10">
            The official welcome packet for everyone who kept having birthdays.
          </p>
          <a
            href={SHOPIFY_URL}
            className="inline-block bg-gold text-navy font-bold px-8 py-4 text-lg rounded hover:bg-gold-light transition-colors"
          >
            Get Your Packet &mdash; $19
          </a>
        </div>
      </section>

      {/* Three columns */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">What&rsquo;s in the Packet</h3>
            <p className="text-navy/70 leading-relaxed">
              A personalized acceptance letter, diploma of completion, the official course catalog,
              and a personalized orientation written just for you. Printed. Mailed. Real paper.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">Who It&rsquo;s For</h3>
            <p className="text-navy/70 leading-relaxed">
              Anyone who&rsquo;s started making that noise when they stand up. Parents whose kids
              now give <em>them</em> advice. People who&rsquo;ve earned the right to say &ldquo;I told you so&rdquo; but mostly don&rsquo;t.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">Why People Love It</h3>
            <p className="text-navy/70 leading-relaxed">
              Because it&rsquo;s funny and it&rsquo;s true and it looks like it came from a real university.
              People frame the diploma. They read the orientation out loud. They feel seen.
            </p>
          </div>
        </div>
      </section>

      {/* Course Advisor CTA */}
      <section className="bg-cream-dark py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Not Sure What You&rsquo;re Majoring In?
          </h2>
          <p className="text-navy/70 text-lg mb-8">
            The OAU Course Advisor will assess your situation and recommend courses from the catalog.
            It&rsquo;s like academic advising, except the problems are real.
          </p>
          <Link
            href="/advisor"
            className="inline-block bg-navy text-cream font-bold px-8 py-4 text-lg rounded hover:bg-navy-light transition-colors"
          >
            Talk to the Advisor
          </Link>
        </div>
      </section>
    </>
  );
}
