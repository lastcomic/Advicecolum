import OAUSeal from "@/components/OAUSeal";

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <OAUSeal size={100} />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About</h1>
          <p className="text-cream/70 text-lg italic font-heading">
            The story behind the university nobody applied to.
          </p>
          <div className="gold-rule max-w-xs mx-auto mt-6" />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold mb-8">John Heffron</h2>

          <div className="space-y-6 text-navy/80 leading-relaxed text-lg">
            <p>
              John Heffron is a comedian. He won Last Comic Standing. He&rsquo;s been performing
              for 37 years. He&rsquo;s done the clubs, the theaters, the corporate events where
              someone always asks if he can &ldquo;keep it clean.&rdquo; He has kept it clean. He
              has also kept it honest.
            </p>

            <p>
              A few years ago he started doing a bit called &ldquo;The Freshman Class of Old Age.&rdquo;
              It was about all the things that start happening when you cross a certain line &mdash;
              the noises, the routines, the slow realization that you&rsquo;ve become the person you
              used to make fun of. The bit hit. It hit big.
            </p>

            <div className="bg-navy text-cream rounded-lg p-8 my-8">
              <p className="text-5xl font-heading font-bold text-gold mb-2">20 million</p>
              <p className="text-cream/60">views and counting.</p>
            </div>

            <p>
              People didn&rsquo;t just laugh at it. They recognized themselves in it. They sent it
              to their friends with messages like &ldquo;this is literally us.&rdquo; They quoted
              the course titles back to him at shows. They asked where they could actually enroll.
            </p>

            <p className="font-heading text-xl font-bold text-navy">
              So he built the university.
            </p>

            <p>
              Old Age University is the bit made real. A personalized welcome packet &mdash;
              acceptance letter, diploma, course catalog, orientation &mdash; all written in the same
              voice that made the bit work. Deadpan. Specific. The kind of funny that only lands
              because it&rsquo;s true.
            </p>

            <div className="gold-rule my-8" />

            <p className="italic text-navy/60">
              That bit became this. Welcome to{" "}
              <a href="https://oldageuniversity.com" className="text-gold hover:text-gold-dark font-semibold not-italic">
                oldageuniversity.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
