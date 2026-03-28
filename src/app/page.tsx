import Link from "next/link";
import OAUSeal from "@/components/OAUSeal";

const SHOPIFY_URL = "https://oldageuniversity.myshopify.com/products/freshman-class-of-old-age-starter-kit-welcome-to-the-second-draft";

const COURSES = [
  { num: "101", title: "Why'd I Walk in the Room" },
  { num: "112", title: "The News Isn't New" },
  { num: "124", title: "Loud Restaurants" },
  { num: "133", title: "Things I Would Have Done Differently" },
  { num: "145", title: "The Second Watch" },
  { num: "156", title: "Everyone Else Seems Fine" },
  { num: "167", title: "Intermediate Silence" },
  { num: "178", title: "The Advice Nobody Asked For" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-cream py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201,168,76,0.1) 35px, rgba(201,168,76,0.1) 36px)"
          }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="flex justify-center mb-8">
            <OAUSeal size={140} />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-4">
            You Didn&rsquo;t Apply.
          </h1>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6 text-gold">
            You Got In Anyway.
          </h1>
          <div className="gold-rule max-w-xs mx-auto mb-6" />
          <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 italic font-heading">
            The official welcome packet for everyone who kept having birthdays.
          </p>
          <a
            href={SHOPIFY_URL}
            className="inline-block bg-gold text-navy font-bold px-10 py-4 text-lg rounded hover:bg-gold-light transition-colors shadow-lg"
          >
            Get Your Packet &mdash; $19
          </a>
        </div>
      </section>

      {/* What's in the Packet */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            The Freshman Class Welcome Packet
          </h2>
          <p className="text-center text-navy/60 mb-12 max-w-2xl mx-auto">
            Personalized to the recipient. Printed on real paper. Mailed in a real envelope.
            Looks like it came from a real university. Because it did.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Acceptance Letter */}
            <div className="bg-white border-2 border-navy/10 rounded-lg p-8 shadow-sm relative">
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-800 shadow-md flex items-center justify-center">
                <span className="text-gold text-[6px] font-heading font-bold">OAU</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-1 text-navy">Acceptance Letter</h3>
              <div className="gold-rule mb-4" />
              <p className="text-navy/70 leading-relaxed italic font-heading text-sm mb-3">
                &ldquo;It is our pleasure to inform you that you have been accepted to the
                Freshman Class of Old Age at Old Age University.&rdquo;
              </p>
              <p className="text-navy/60 text-sm">
                Personalized with the recipient&rsquo;s name. Signed by John Heffron, Dean of Students.
                The kind of letter you frame even though nobody asked you to.
              </p>
            </div>

            {/* Diploma */}
            <div className="bg-navy text-cream rounded-lg p-8 shadow-sm relative">
              <div className="border-2 border-gold/30 rounded p-6">
                <h3 className="font-heading text-xl font-bold mb-1 text-gold">Diploma of Completion</h3>
                <p className="text-cream/50 text-sm italic font-heading mb-3">The First Half of Life</p>
                <div className="gold-rule mb-4" />
                <p className="text-cream/70 text-sm leading-relaxed">
                  Certifies that the recipient has triumphantly completed the First Half of Life
                  with perseverance, resilience, and a growing understanding of what truly matters.
                  They are now welcomed into The Second Draft.
                </p>
              </div>
            </div>

            {/* Course Catalog */}
            <div className="parchment-bg rounded-lg p-8 shadow-sm border border-parchment-dark">
              <h3 className="font-heading text-xl font-bold mb-1 text-navy">Official Course Catalog</h3>
              <p className="text-navy/50 text-xs uppercase tracking-wider mb-3">College of Life Experience | Core Requirements</p>
              <div className="space-y-2">
                {COURSES.slice(0, 4).map((c) => (
                  <p key={c.num} className="text-navy/70 text-sm">
                    <span className="font-bold">OAU {c.num}</span> &mdash; {c.title}
                  </p>
                ))}
                <p className="text-navy/50 text-xs italic mt-2">...and 12 more courses</p>
              </div>
            </div>

            {/* Orientation */}
            <div className="bg-cream-dark rounded-lg p-8 shadow-sm border border-navy/10">
              <h3 className="font-heading text-xl font-bold mb-1 text-navy">Personalized Orientation</h3>
              <p className="text-navy/50 text-xs uppercase tracking-wider mb-3">Freshman Class of Old Age | John Heffron</p>
              <div className="gold-rule mb-4" />
              <p className="text-navy/70 text-sm leading-relaxed">
                A multi-page orientation guide written specifically for the recipient. Covers student life,
                campus dining, a message from the chancellor, featured courses, and everything else
                a new student at OAU needs to know about the second half.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-navy text-cream py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-gold">
            Who It&rsquo;s For
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="border border-gold/20 rounded-lg p-6">
              <p className="text-cream/80 leading-relaxed text-sm">
                Anyone who&rsquo;s started making that noise when they stand up. You know the one.
                It&rsquo;s not voluntary. It just happens now.
              </p>
            </div>
            <div className="border border-gold/20 rounded-lg p-6">
              <p className="text-cream/80 leading-relaxed text-sm">
                Parents whose kids now give <em>them</em> advice. People who remember when
                Saturday felt different. Adults who&rsquo;ve earned every gray hair and most of the opinions.
              </p>
            </div>
            <div className="border border-gold/20 rounded-lg p-6">
              <p className="text-cream/80 leading-relaxed text-sm">
                The perfect gift for a birthday, retirement, or just because someone you know
                has finally crossed that line. They&rsquo;ll know which line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample courses */}
      <section className="py-16 md:py-20 parchment-bg">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-center mb-2 text-navy">
            From the Official Course Catalog
          </h2>
          <p className="text-center text-navy/50 text-sm mb-10">College of Life Experience | Core Requirements</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {COURSES.map((c) => (
              <div key={c.num} className="bg-white/60 border border-navy/10 rounded p-4">
                <p className="text-gold font-bold text-sm">OAU {c.num}</p>
                <p className="font-heading text-sm font-bold text-navy">{c.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Advisor CTA */}
      <section className="py-16 md:py-20">
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

      {/* Final CTA */}
      <section className="bg-navy text-cream py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <OAUSeal size={80} />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-gold">
            $19. Printed. Mailed. Personalized.
          </h2>
          <p className="text-cream/60 mb-8">Orders ship Monday through Wednesday.</p>
          <a
            href={SHOPIFY_URL}
            className="inline-block bg-gold text-navy font-bold px-10 py-4 text-lg rounded hover:bg-gold-light transition-colors shadow-lg"
          >
            Get the Packet
          </a>
        </div>
      </section>
    </>
  );
}
