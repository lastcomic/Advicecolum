import Link from "next/link";

const SHOPIFY_URL =
  "https://oldageuniversity.myshopify.com/products/freshman-class-of-old-age-starter-kit-welcome-to-the-second-draft";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="hdr">
        <div className="hdr-logo">
          <div className="hdr-seal">OAU</div>
          <div>
            <span className="hdr-name">Old Age University</span>
            <span className="hdr-tag">Orientation for the Second Half</span>
          </div>
        </div>
        <div className="hdr-right">
          <Link href="/advisor" className="hdr-link">Course Advisor</Link>
          <a href={SHOPIFY_URL} className="hdr-btn">Send the Packet &mdash; $39</a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <p className="hero-kicker">The gift they didn&rsquo;t know they were waiting for. Until it arrived.</p>
        <h1>Finally. A Birthday Gift<br /><em>Worth Giving.</em></h1>
        <p className="hero-sub">Funnier than a card. More honest than a bottle of wine. Something they&rsquo;ll actually keep.</p>
        <div className="hero-rule" />
        <div className="hero-cta">
          <a href={SHOPIFY_URL} className="btn-hero">Send the Welcome Packet &mdash; $39</a>
          <span className="hero-micro">Personalized &middot; Printed on quality stock &middot; Sealed with official wax &middot; Mailed to their door</span>
        </div>
      </section>

      {/* MAILBOX SCENE */}
      <section className="mailbox">
        <h2>They walk to the mailbox.</h2>
        <div className="mailbox-scene">
          <p>Between the electric bill and a credit card offer, there&rsquo;s a large cream envelope.</p>
          <p>Heavy. Official-looking. Return address:</p>
          <p><strong>Office of Admissions &mdash; Old Age University.</strong></p>
          <p>They weren&rsquo;t expecting it. They didn&rsquo;t apply. But their name is on the front.</p>
          <p>They open it standing in the driveway.</p>
          <p>Inside: an acceptance letter. A diploma. A course catalog with classes like <em>OAU 211: The Thermostat Is Not a Democracy</em> and <em>OAU 101: Why&rsquo;d I Walk in the Room.</em></p>
          <p>They laugh. Then they read it again.</p>
          <p>Then they call someone and read it out loud.</p>
          <div className="mailbox-payoff">
            <p>&ldquo;This is the funniest thing anyone has ever given me.&rdquo;</p>
          </div>
        </div>
      </section>

      {/* THE LETTER */}
      <section className="letter-section">
        <div className="letter-inner">
          <span className="letter-kicker">What They&rsquo;ll Actually Open</span>
          <h2 className="letter-headline">The Acceptance Letter</h2>
          <p className="letter-intro">Personalized with their name. Printed on quality stock. Sealed in an oversized admissions envelope with a wax stamp.</p>

          <div className="letter-doc">
            <span className="letter-oau">Old Age University</span>
            <span className="letter-dept">Office of Admissions &middot; Department of What Now</span>

            <div className="letter-seal-row">
              <div className="letter-seal-circle">OAU</div>
              <span className="letter-seal-text">
                Old Age University &middot; Chartered for those who survived the first half and are cautiously optimistic about the second
              </span>
            </div>

            <div className="letter-body">
              <p className="dear">Dear [Recipient&rsquo;s Name],</p>
              <p>After a thorough review of your life experience, accumulated opinions, and the number of times you&rsquo;ve said <span className="highlight">&ldquo;I&rsquo;m not mad, I&rsquo;m just disappointed,&rdquo;</span> we are pleased to inform you that you have been officially accepted to <strong>Old Age University</strong>.</p>
              <p>Your qualifications were impressive:</p>
              <ul className="qual-list">
                <li>You make a noise when you stand up</li>
                <li>You look at a menu like it&rsquo;s a legal document</li>
                <li>You&rsquo;ve started saying &ldquo;they don&rsquo;t make it like they used to&rdquo; and meaning it</li>
                <li>You know things you wish you didn&rsquo;t</li>
                <li>You&rsquo;ve survived everything that was supposed to break you</li>
              </ul>

              <div className="letter-major">
                <p><strong>Declared Major:</strong> Holding It Together With Grace and Mild Profanity</p>
                <p><strong>Minor:</strong> Strategic Napping &amp; Selective Hearing</p>
              </div>

              <p>Orientation begins immediately. There is no syllabus. The curriculum is your life, and the final exam is open-book &mdash; because at this point, you <em>are</em> the book.</p>
              <p>Welcome to the second draft. It&rsquo;s unedited, unpredictable, and entirely yours.</p>

              <div className="letter-sig">
                <span className="letter-sig-name">John Heffron</span>
                <span className="letter-sig-title">Chancellor, Old Age University<br />Founder, Second Draft Society</span>
              </div>
            </div>
          </div>

          <div className="letter-payoff">
            <p>&ldquo;This is the part where they stop laughing and go quiet for a second. That&rsquo;s how you know it landed.&rdquo;</p>
          </div>
        </div>
      </section>

      {/* REEL TEST DRIVE */}
      <section className="pq" style={{ background: "var(--dark-cream)", borderTop: "1px solid rgba(201,168,76,.3)", borderBottom: "1px solid rgba(201,168,76,.3)" }}>
        <span className="kicker">Not sure if they&rsquo;ll get it? Send them this first.</span>
        <blockquote style={{ fontSize: "clamp(18px, 2.5vw, 26px)", maxWidth: 640 }}>
          &ldquo;The bit that started it all. 20&nbsp;million views. One minute. If they laugh, they&rsquo;re enrolled.&rdquo;
        </blockquote>
        <a
          href="https://www.tiktok.com/@johnheffron/video/7306227937690498347"
          target="_blank"
          rel="noopener noreferrer"
          className="hdr-btn"
          style={{ display: "inline-block", marginTop: 24, fontSize: 14, padding: "14px 32px" }}
        >
          Watch the Reel &rarr;
        </a>
      </section>

      {/* WHO */}
      <section className="who">
        <span className="kicker">Who You&rsquo;re Sending It To</span>
        <h2>You already know<br /><em>exactly who needs this.</em></h2>
        <div className="who-list">
          <div className="who-item">The friend turning 50, 55, or 60 who is handling it well and would appreciate someone finally naming it</div>
          <div className="who-item">The person who just retired and is quietly wondering what they&rsquo;re actually for now</div>
          <div className="who-item">The sibling who kept everything together for thirty years and never once got credit for it</div>
          <div className="who-item">The coworker, the parent &mdash; the one you want to make laugh while saying something true</div>
          <div className="who-item">The person you&rsquo;ve been meaning to acknowledge for a while and didn&rsquo;t know how</div>
          <div className="who-item">Yourself. For the Tuesday you realized the song wasn&rsquo;t about a girl. It was about your whole life.</div>
        </div>
        <div className="who-closer">
          <p>You&rsquo;re not buying a gift. You&rsquo;re buying the look on their face when they realize <em>someone finally named it.</em></p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "var(--dark-cream)", padding: "96px 40px", borderTop: "1px solid rgba(201,168,76,.2)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          <div className="testimonial-card">
            <p className="quote">&ldquo;I gave this to my husband for his 60th. He read the acceptance letter out loud at the dinner table. Then he read the course catalog. Then he got quiet and said, &lsquo;This is the best gift you&rsquo;ve ever given me.&rsquo; We&rsquo;ve been married 34 years.&rdquo;</p>
            <p className="attr">&mdash; Karen M., Scottsdale, AZ</p>
          </div>
          <div className="testimonial-card">
            <p className="quote">&ldquo;Bought this for my dad who retired last year. He&rsquo;s not the sentimental type. He called me the next morning and just said, &lsquo;How did you find this?&rsquo; That&rsquo;s the most I&rsquo;ve gotten out of him in years.&rdquo;</p>
            <p className="attr">&mdash; David T., Chicago, IL</p>
          </div>
          <div className="testimonial-card">
            <p className="quote">&ldquo;I sent it to myself. I&rsquo;m 53 and going through a divorce and I didn&rsquo;t know I needed this until I opened it. The acceptance letter made me laugh. The course catalog made me laugh harder. And then I cried. In a good way.&rdquo;</p>
            <p className="attr">&mdash; Lisa R., Austin, TX</p>
          </div>
        </div>
      </section>

      {/* INSIDE THE PACKET */}
      <section className="inside">
        <div className="inside-inner">
          <h2>What&rsquo;s inside<br /><em>the envelope.</em></h2>
          <p className="inside-sub">Four things. All of them real. None of them forgettable.</p>
          <div className="items">
            <div className="item">
              <div className="item-num-col"><span className="item-num">01</span></div>
              <div className="item-body">
                <h3>The Personalized Acceptance Letter</h3>
                <p>Official admission to Old Age University. Their name on the acceptance line. Selected based on qualifications including making a noise when standing up and knowing things they wish they didn&rsquo;t.</p>
                <span className="hl">&rarr; The kind of thing people frame.</span>
              </div>
            </div>
            <div className="item">
              <div className="item-num-col"><span className="item-num">02</span></div>
              <div className="item-body">
                <h3>Diploma of Completion &mdash; The First Half of Life</h3>
                <p>Because they finished something. Thirty, forty, fifty years of building and handling and showing up. That deserves a diploma. Signed by John Heffron, Chancellor.</p>
                <span className="hl">&rarr; Because nobody gave them one.</span>
              </div>
            </div>
            <div className="item">
              <div className="item-num-col"><span className="item-num">03</span></div>
              <div className="item-body">
                <h3>Official OAU Course Catalog</h3>
                <p>15 courses. They will read this out loud to whoever is nearby.</p>
                <ul className="course-list">
                  <li><span className="cn">OAU 101</span> Why&rsquo;d I Walk in the Room</li>
                  <li><span className="cn">OAU 211</span> The Thermostat Is Not a Democracy</li>
                  <li><span className="cn">OAU 223</span> Your Doctor Is Younger Than Your Car</li>
                </ul>
                <span className="hl">&rarr; They will read this out loud.</span>
              </div>
            </div>
            <div className="item">
              <div className="item-num-col"><span className="item-num">04</span></div>
              <div className="item-body">
                <h3>The Official OAU Admissions Envelope</h3>
                <p>Large cream envelope. Return address: Office of Admissions, Old Age University. Sealed with an official red wax stamp. This is how it arrives at their door.</p>
                <span className="hl">&rarr; The envelope alone gets a reaction.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE LODGE */}
      <section className="lodge">
        <div className="lodge-inner">
          <h2>The Lodge.<br /><em>A free digital sanctuary for the enrolled.</em></h2>
          <div className="lodge-body">
            <div className="lodge-left">
              <p>Every enrolled student gets free access to <strong>The Lodge</strong> &mdash; a private digital space built for the kind of conversations that don&rsquo;t happen at dinner parties.</p>
              <p>It&rsquo;s not social media. There&rsquo;s no feed. No likes. No algorithm deciding what you see.</p>
              <p>It&rsquo;s a place to sit with questions you didn&rsquo;t know you had &mdash; and an <strong>AI Board of Directors</strong> that actually listens.</p>
              <div className="lodge-mystery">
                <p>&ldquo;Think of it as the faculty lounge you were never invited to &mdash; until now.&rdquo;</p>
                <span className="mystery-note">Access included with every enrollment</span>
              </div>
            </div>
            <div className="lodge-right">
              <span className="badge">Inside The Lodge</span>
              <h3>Your AI Board of Directors</h3>
              <ul>
                <li>A personal advisory board that knows your context</li>
                <li>Career, relationships, health, purpose &mdash; all of it</li>
                <li>No judgment. No small talk. Just honest counsel.</li>
                <li>Available 24/7 because existential questions don&rsquo;t keep business hours</li>
                <li>Built on the same philosophy as OAU: funny first, then true</li>
              </ul>
              <div className="lodge-free">
                <span className="free">FREE</span>
                <span className="free-label">Included with every Welcome Packet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE BOOK */}
      <section className="book">
        <div className="book-inner">
          <div className="book-left">
            <h2>The Book.<br /><em>229 pages of what nobody told you.</em></h2>
            <p><strong>Freshman Class of Old Age</strong> is the full orientation. 66 chapters. Written by John Heffron. Built from the bit that got 20&nbsp;million views &mdash; and the decade of material behind it.</p>
            <p>This isn&rsquo;t a self-help book. It&rsquo;s a mirror with a sense of humor.</p>
            <ul className="book-chapters">
              <li>Chapter 4: The Noise You Make When You Stand Up Is Now a Word</li>
              <li>Chapter 11: You Don&rsquo;t Have a Bucket List. You Have a Grocery List.</li>
              <li>Chapter 29: The Doctor Is Younger Than Your Car</li>
              <li>Chapter 44: Looking Fine While Feeling Lost</li>
              <li>Chapter 58: The Second Draft Starts Here</li>
            </ul>
            <p>The book ships separately in approximately two weeks.</p>
          </div>
          <div className="book-right">
            <div className="book-mock">
              <div className="book-mock-seal">OAU</div>
              <div className="book-mock-title">Freshman Class<br />of Old Age</div>
              <p className="book-mock-sub">The Orientation You Never Got</p>
              <span className="book-mock-by">John Heffron</span>
            </div>
            <div className="book-stats">
              <div>
                <span className="book-stat-n">229</span>
                <span className="book-stat-l">Pages</span>
              </div>
              <div>
                <span className="book-stat-n">66</span>
                <span className="book-stat-l">Chapters</span>
              </div>
              <div>
                <span className="book-stat-n">20M+</span>
                <span className="book-stat-l">Views</span>
              </div>
            </div>
            <a href={SHOPIFY_URL} className="book-waitlist">Join the Waitlist &rarr;</a>
            <p className="book-ship">Ships in approximately 2 weeks</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#fff", padding: "96px 40px", borderTop: "1px solid var(--dark-cream)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 42px)", color: "var(--navy)", fontWeight: 700, lineHeight: 1.2, marginBottom: 48 }}>
            Frequently Asked<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Questions.</em>
          </h2>
          <div className="faq-item">
            <h3>Is this a real university?</h3>
            <p>No. Old Age University is a humor and wisdom project created by comedian John Heffron. There are no exams, no tuition, and no parking pass. Enrollment, however, is automatic and opting out is not currently available.</p>
          </div>
          <div className="faq-item">
            <h3>What exactly do they receive?</h3>
            <p>A personalized acceptance letter with their name, a diploma certifying completion of the First Half of Life, an official OAU Course Catalog with 15 courses, and all of it sealed in an oversized admissions envelope with a wax stamp. Mailed directly to their door.</p>
          </div>
          <div className="faq-item">
            <h3>Can I send it directly to someone as a gift?</h3>
            <p>Yes. At checkout, enter their shipping address and add their name in the order notes. We personalize the acceptance letter with their name, print everything on quality stock, seal it with wax, and mail it to their door. They&rsquo;ll have no idea it&rsquo;s coming.</p>
          </div>
          <div className="faq-item">
            <h3>How long does shipping take?</h3>
            <p>Orders ship Monday through Wednesday. Most packets arrive within 5&ndash;7 business days. The book (if included) ships separately in approximately two weeks.</p>
          </div>
          <div className="faq-item">
            <h3>What if they don&rsquo;t think it&rsquo;s funny?</h3>
            <p>Then they haven&rsquo;t hit that part of life yet. Give it time. The packet will be waiting.</p>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="price-section">
        <h2>One price. One packet.<br />One moment they won&rsquo;t forget.</h2>
        <p className="price-comparison">Less than a mediocre dinner out. More memorable than anything else you were going to get them.</p>
        <div className="price-box">
          <span className="price-name">Standard Enrollment</span>
          <span className="price-title">The Welcome Packet</span>
          <span className="price-number">$39</span>
          <ul className="price-includes">
            <li>Personalized Acceptance Letter with their name</li>
            <li>Diploma of Completion &mdash; The First Half of Life</li>
            <li>Official OAU Course Catalog (15 courses)</li>
            <li>Oversized admissions envelope with wax seal</li>
            <li className="bold">Free access to The Lodge &amp; AI Board of Directors</li>
          </ul>
          <a href={SHOPIFY_URL} className="btn-enroll">Send the Welcome Packet &rarr;</a>
          <span className="price-note">Add recipient name at checkout &middot; Ships Monday&ndash;Wednesday</span>
        </div>
        <div className="coming-soon">
          <h4>Coming Soon: Chancellor&rsquo;s Packet ($59) &amp; Full Enrollment ($99)</h4>
          <p>Including the personalized Guidance Counselor letter, the signed book, and the complete orientation experience.</p>
          <a href={SHOPIFY_URL}>Join the Waitlist &rarr;</a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="how-inner">
          <h2>Three steps.<br /><em>Then it handles itself.</em></h2>
          <div className="steps">
            <div className="step">
              <div className="step-n">01</div>
              <div>
                <h3>Order and tell us their name</h3>
                <p>Pick the packet. Check out. <strong>Add recipient name in the order notes.</strong> That&rsquo;s how we personalize everything. Takes two minutes.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-n">02</div>
              <div>
                <h3>We print, personalize, and seal everything</h3>
                <p>Their name goes on the acceptance letter. Everything is printed on quality stock. Sealed in the official OAU admissions envelope with a wax stamp.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-n">03</div>
              <div>
                <h3>It arrives at their door</h3>
                <p>Between the electric bill and a credit card offer, there&rsquo;s a large cream envelope from Old Age University. <strong>Orders ship Monday&ndash;Wednesday.</strong></p>
                <span className="step-payoff">&ldquo;They open it in the driveway. They always open it in the driveway.&rdquo;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOLD OUTCOME BAR */}
      <div className="final-cta" style={{ padding: "48px 40px" }}>
        <p style={{ marginBottom: 0, fontSize: "clamp(16px, 2.5vw, 24px)" }}>
          They built the life. They raised the kids. They handled everything.<br />
          Nobody ever gave them an orientation for what comes next. <strong>Until now.</strong>
        </p>
      </div>

      {/* PULL QUOTE FROM JOHN */}
      <div className="pq">
        <blockquote>&ldquo;Looking fine while feeling lost is one of the loneliest places a person can be.&rdquo;</blockquote>
        <cite>&mdash; John Heffron</cite>
      </div>

      {/* JOHN HEFFRON SECTION */}
      <section className="john">
        <span className="kicker" style={{ color: "var(--gold)" }}>A Note From the Chancellor</span>
        <h2>John Heffron</h2>
        <p>37 years doing standup. Last Comic Standing winner. <strong>The Freshman Class of Old Age bit has 20&nbsp;million views</strong> &mdash; because it named something people had been feeling for years without a word for it.</p>
        <p>Nobody gave them an orientation for this part. The roadmap expired. The GPS is buffering. And for the first time in their adult life nobody is telling them where to go next.</p>
        <p>This packet is the orientation they should have received. Funny because it has to be. Honest because that&rsquo;s the only way it works.</p>
        <div className="john-truth">
          &ldquo;I built this because I needed it. And when I put the bit online, 20&nbsp;million people told me they needed it too. So I stopped doing sets about it and started building the thing itself.&rdquo;
        </div>
        <span className="john-sig">John Heffron</span>
        <span className="john-title">Chancellor, Old Age University &middot; Founder, Second Draft Society</span>
      </section>

      {/* FINAL GOLD CTA */}
      <div className="final-cta">
        <p>The gift they didn&rsquo;t know they needed.<br />Until it arrived.</p>
        <a href={SHOPIFY_URL} className="btn-final">Send the Welcome Packet &mdash; $39</a>
      </div>

      {/* FOOTER */}
      <footer>
        <p>
          <a href="https://oldageuniversity.com">oldageuniversity.com</a> &nbsp;&middot;&nbsp;
          @oldageuniversity &nbsp;&middot;&nbsp;
          <a href="https://seconddraftsociety.app">seconddraftsociety.app</a>
        </p>
        <p style={{ marginTop: 8 }}>Buying for a group? Reunions, retirement parties, corporate events. <a href="mailto:john@oldageuniversity.com">Email for bulk pricing on 10 or more.</a></p>
        <p style={{ marginTop: 8 }}>OAU is an equal-opportunity aging institution. Enrollment is automatic. Opting out is not currently available.</p>
      </footer>
    </>
  );
}
