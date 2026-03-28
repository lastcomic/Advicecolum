export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About</h1>
          <p className="text-cream/70 text-lg">The story behind the university nobody applied to.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-3xl font-bold mb-6">John Heffron</h2>

            <p className="text-navy/80 leading-relaxed mb-6">
              John Heffron is a comedian. He won Last Comic Standing. He&rsquo;s been performing
              for 37 years. He&rsquo;s done the clubs, the theaters, the corporate events where
              someone always asks if he can &ldquo;keep it clean.&rdquo; He has kept it clean. He
              has also kept it honest.
            </p>

            <p className="text-navy/80 leading-relaxed mb-6">
              A few years ago he started doing a bit called &ldquo;The Freshman Class of Old Age.&rdquo;
              It was about all the things that start happening when you cross a certain line &mdash;
              the noises, the routines, the slow realization that you&rsquo;ve become the person you
              used to make fun of. The bit hit. It hit big. Twenty million views and counting.
            </p>

            <p className="text-navy/80 leading-relaxed mb-6">
              People didn&rsquo;t just laugh at it. They recognized themselves in it. They sent it
              to their friends with messages like &ldquo;this is literally us.&rdquo; They quoted
              the course titles back to him at shows. They asked where they could actually enroll.
            </p>

            <p className="text-navy/80 leading-relaxed mb-6">
              So he built the university.
            </p>

            <p className="text-navy/80 leading-relaxed mb-6">
              Old Age University is the bit made real. A personalized welcome packet &mdash;
              acceptance letter, diploma, course catalog, orientation &mdash; all written in the same
              voice that made the bit work. Deadpan. Specific. The kind of funny that only lands
              because it&rsquo;s true.
            </p>

            <p className="text-navy/80 leading-relaxed mb-8">
              That bit became this. Welcome to{" "}
              <a href="https://oldageuniversity.com" className="text-gold hover:text-gold-dark font-semibold">
                oldageuniversity.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
