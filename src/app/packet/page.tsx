import OAUSeal from "@/components/OAUSeal";

const SHOPIFY_URL = "https://oldageuniversity.myshopify.com/products/freshman-class-of-old-age-starter-kit-welcome-to-the-second-draft";

const ALL_COURSES = [
  { num: "101", title: "Why'd I Walk in the Room" },
  { num: "112", title: "The News Isn't New" },
  { num: "124", title: "Loud Restaurants" },
  { num: "133", title: "Things I Would Have Done Differently" },
  { num: "145", title: "The Second Watch" },
  { num: "156", title: "Everyone Else Seems Fine" },
  { num: "167", title: "Intermediate Silence" },
  { num: "178", title: "The Advice Nobody Asked For" },
  { num: "189", title: "Saturday Has a Different Weight" },
  { num: "201", title: "The Long Game" },
  { num: "211", title: "The Thermostat Is Not a Democracy" },
  { num: "223", title: "Your Doctor Is Younger Than Your Car" },
  { num: "234", title: "I Already Told You That" },
  { num: "245", title: "The Buffet Requires a Strategy" },
  { num: "256", title: "That Was a Different Time and I Stand By It" },
];

export default function PacketPage() {
  return (
    <>
      <section className="bg-navy text-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <OAUSeal size={100} />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">The Packet</h1>
          <p className="text-gold italic font-heading">Freshman Class of Old Age &mdash; Welcome to the Second Draft</p>
          <div className="gold-rule max-w-xs mx-auto mt-6" />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-navy/70 text-lg mb-12 max-w-2xl mx-auto">
            Everything below is personalized to the recipient, printed on real paper,
            and mailed to their door. It looks like it came from a real university.
            That&rsquo;s the whole point.
          </p>

          <div className="space-y-8">
            {/* Acceptance Letter */}
            <div className="bg-white rounded-lg shadow-sm border border-navy/10 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3 p-8">
                  <h3 className="font-heading text-2xl font-bold mb-1">Personalized Acceptance Letter</h3>
                  <div className="gold-rule max-w-[200px] mb-4" />
                  <p className="text-navy/70 leading-relaxed mb-4">
                    Addressed to the recipient by name. Welcomes them to the Freshman Class of Old Age
                    at Old Age University. Mentions courses like Forgetting Why You Walked into a Room,
                    Advanced Aches &amp; Pains, and Early Bedtime.
                  </p>
                  <p className="text-navy/50 text-sm italic">
                    Signed by John Heffron, Dean of Students. Sealed with a wax seal. The kind of
                    letter you hang on the fridge until someone asks about it.
                  </p>
                </div>
                <div className="md:w-1/3 bg-cream-dark flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-red-800 mx-auto mb-3 shadow-md flex items-center justify-center">
                      <span className="text-gold font-heading text-xs font-bold">OAU</span>
                    </div>
                    <p className="text-navy/40 text-xs uppercase tracking-wider">Wax sealed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Diploma */}
            <div className="bg-navy rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 flex items-center justify-center p-8">
                  <OAUSeal size={100} />
                </div>
                <div className="md:w-2/3 p-8 text-cream">
                  <h3 className="font-heading text-2xl font-bold mb-1 text-gold">Diploma of Completion</h3>
                  <p className="text-cream/50 italic font-heading mb-4">The First Half of Life</p>
                  <p className="text-cream/70 leading-relaxed mb-4">
                    Certifies that the recipient has triumphantly completed the First Half of Life
                    with perseverance, resilience, and a growing understanding of what truly matters.
                    Lists what they navigated &mdash; uncertainty, change, lessons learned the hard way.
                  </p>
                  <p className="text-cream/50 text-sm italic">
                    Presented in a navy folio. Suitable for framing. Impressive to visitors who
                    don&rsquo;t read the fine print.
                  </p>
                </div>
              </div>
            </div>

            {/* Course Catalog */}
            <div className="parchment-bg rounded-lg shadow-sm border border-parchment-dark overflow-hidden">
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-1 text-navy">Official Course Catalog</h3>
                <p className="text-navy/50 text-xs uppercase tracking-wider mb-4">
                  College of Life Experience | Core Requirements
                </p>
                <div className="gold-rule max-w-[200px] mb-6" />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {ALL_COURSES.map((c) => (
                    <div key={c.num} className="text-sm">
                      <span className="font-bold text-navy">OAU {c.num}</span>
                      <span className="text-navy/60"> &mdash; {c.title}</span>
                    </div>
                  ))}
                </div>
                <p className="text-navy/40 text-xs italic mt-4">
                  Printed on yellow cardstock. Both sides. Feels like a real course catalog
                  because it is one.
                </p>
              </div>
            </div>

            {/* Orientation */}
            <div className="bg-cream-dark rounded-lg shadow-sm border border-navy/10 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3 p-8">
                  <h3 className="font-heading text-2xl font-bold mb-1">Personalized Orientation</h3>
                  <p className="text-navy/50 text-sm italic mb-4">
                    Orientation Guide for Your Second Draft (You Didn&rsquo;t Know You Needed It)
                  </p>
                  <div className="gold-rule max-w-[200px] mb-4" />
                  <p className="text-navy/70 leading-relaxed mb-4">
                    A multi-page orientation written specifically for the recipient. Covers student life,
                    campus dining, a message from the chancellor, featured courses, and everything else
                    a new student at OAU needs to know about the second half.
                  </p>
                  <p className="text-navy/50 text-sm italic">
                    This is the part people read out loud. The part they text photos of to friends.
                    The part that makes them say &ldquo;how did they know that.&rdquo;
                  </p>
                </div>
                <div className="md:w-1/3 bg-navy flex items-center justify-center p-8">
                  <div className="text-center text-cream">
                    <p className="font-heading text-lg font-bold text-gold">FRESHMAN CLASS</p>
                    <p className="font-heading text-sm text-cream/60">OF OLD AGE</p>
                    <div className="gold-rule max-w-[100px] mx-auto my-3" />
                    <p className="text-xs text-cream/40 uppercase tracking-wider">John Heffron</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buy CTA */}
          <div className="mt-16 text-center">
            <div className="bg-navy rounded-lg p-10 text-cream">
              <div className="flex justify-center mb-4">
                <OAUSeal size={60} />
              </div>
              <p className="text-4xl font-heading font-bold text-gold mb-2">$19</p>
              <p className="text-cream/60 mb-2">Personalized. Printed. Mailed.</p>
              <p className="text-cream/40 text-sm mb-8">Orders ship Monday through Wednesday.</p>
              <a
                href={SHOPIFY_URL}
                className="inline-block bg-gold text-navy font-bold px-10 py-4 text-lg rounded hover:bg-gold-light transition-colors shadow-lg"
              >
                Get the Packet
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
