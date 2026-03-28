const SHOPIFY_URL = "https://oldageuniversity.myshopify.com/products/freshman-class-of-old-age-starter-kit-welcome-to-the-second-draft";

const items = [
  {
    title: "Personalized Acceptance Letter",
    description: "Addressed to the recipient by name. Welcomes them to the university they never applied to. Looks disturbingly official.",
  },
  {
    title: "Diploma of Completion",
    description: "Suitable for framing. Lists their area of study based on what life has put them through. Embossed-looking. Impressive to visitors.",
  },
  {
    title: "Official Course Catalog",
    description: "The full OAU course listing. From \"Why'd I Walk in the Room\" to \"The Buffet Requires a Strategy.\" Every course feels personally assigned.",
  },
  {
    title: "Personalized Orientation",
    description: "A multi-page orientation written specifically for the recipient. Covers their particular situation with the deadpan sincerity of a university that takes aging very seriously.",
  },
];

export default function PacketPage() {
  return (
    <>
      <section className="bg-navy text-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Packet</h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Personalized to the person. Printed and mailed. Everything you need to officially enroll
            in the rest of your life.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid gap-8">
            {items.map((item) => (
              <div key={item.title} className="bg-white border border-navy/10 rounded-lg p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-navy/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-cream-dark rounded-lg p-8 text-center">
            <p className="text-3xl font-heading font-bold text-navy mb-2">$19</p>
            <p className="text-navy/60 mb-6">Orders ship Monday through Wednesday.</p>
            <a
              href={SHOPIFY_URL}
              className="inline-block bg-gold text-navy font-bold px-8 py-4 text-lg rounded hover:bg-gold-light transition-colors"
            >
              Get Your Packet
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
