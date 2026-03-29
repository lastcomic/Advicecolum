import Link from "next/link";

const SHOPIFY_URL = "https://oldageuniversity.myshopify.com/products/freshman-class-of-old-age-starter-kit-welcome-to-the-second-draft";

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
          <a href={SHOPIFY_URL} className="hdr-btn">Send the Packet &rarr;</a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <p className="hero-kicker">The Gift For the Person Who Has Everything Except an Answer</p>
        <h1>Finally. A Birthday Gift<br /><em>Worth Giving.</em></h1>
        <p className="hero-sub">Funnier than a card. More honest than a bottle of wine. Something they&rsquo;ll actually keep.</p>
        <div className="hero-rule" />
        <div className="hero-cta">
          <a href={SHOPIFY_URL} className="btn-hero">Send the Welcome Packet &mdash; $39</a>
          <span className="hero-micro">Personalized &middot; Printed on quality stock &middot; Sealed with official wax &middot; Mailed to their door</span>
        </div>
      </section>

      {/* STRIP */}
      <div className="strip">
        <p>Perfect for <strong>50th</strong> &middot; <strong>55th</strong> &middot; <strong>60th</strong> &middot; <strong>Retirement</strong> &middot; &ldquo;I have no idea what to get them&rdquo;</p>
      </div>

      {/* NOT PAPER */}
      <section className="notpaper">
        <span className="label">Before You Read Another Word</span>
        <h2>You are not buying<br /><em>paper and ink.</em></h2>
        <div className="notpaper-body">
          <div>
            <p>You are buying the moment someone opens an envelope from <strong>Old Age University</strong> and feels — for the first time in a long time — completely seen.</p>
            <p style={{marginTop:20}}>They built everything. They handled everything. They kept it all together. And nobody ever gave them an orientation for what comes next.</p>
            <p style={{marginTop:20}}><strong>This is that orientation.</strong> Wrapped in an official admissions envelope. Sealed with a wax stamp. Mailed directly to their door.</p>
          </div>
          <div className="notpaper-pull">
            <p>&ldquo;Funny in a way that makes them laugh. Honest in a way that makes them go quiet for a second. That&rsquo;s the gift nobody else thought to give them.&rdquo;</p>
          </div>
        </div>
      </section>

      {/* WHAT YOU'RE ACTUALLY BUYING */}
      <section className="buying">
        <div className="buying-inner">
          <h2>What&rsquo;s actually<br /><em>inside the envelope.</em></h2>
          <p className="buying-sub">Four things. All of them real. None of them forgettable.</p>
          <div className="buying-grid">
            <div className="buying-card">
              <span className="buying-num">Item 01</span>
              <h3>The Personalized Acceptance Letter</h3>
              <p>Official admission to Old Age University. Their name on the acceptance line. Selected based on qualifications including making a noise when standing up, looking at a menu like it&rsquo;s a legal document, and knowing things they wish they didn&rsquo;t.</p>
              <span className="highlight">&rarr; The kind of thing people frame.</span>
            </div>
            <div className="buying-card">
              <span className="buying-num">Item 02</span>
              <h3>Diploma of Completion &mdash; The First Half of Life</h3>
              <p>Signed by John Heffron, Chancellor. Because they finished something. Thirty, forty, fifty years of building and handling and showing up. That deserves a diploma.</p>
              <span className="highlight">&rarr; Because nobody gave them one.</span>
            </div>
            <div className="buying-card">
              <span className="buying-num">Item 03</span>
              <h3>Official OAU Course Catalog</h3>
              <p>15 courses including OAU 211 The Thermostat Is Not a Democracy, OAU 223 Your Doctor Is Younger Than Your Car, and OAU 101 Why&rsquo;d I Walk in the Room.</p>
              <span className="highlight">&rarr; They will read this out loud.</span>
            </div>
            <div className="buying-card">
              <span className="buying-num">Item 04</span>
              <h3>The Guidance Counselor Letter</h3>
              <p>A 1–2 page personalized orientation — the official State of Your Union — written specifically for where they are right now. You tell us what&rsquo;s going on in their life. We write the letter. <em>Chancellor&rsquo;s Packet only.</em></p>
              <span className="highlight">&rarr; This is where it stops being funny and starts being true.</span>
            </div>
          </div>
        </div>
      </section>

      {/* TWO ENVELOPES */}
      <section className="envelopes">
        <span className="label">How It Arrives</span>
        <h2>Two envelopes.<br /><em>Two completely different moments.</em></h2>
        <div className="env-row">
          <div className="env-card">
            <div className="env-badge" />
            <span className="env-tag">Envelope One</span>
            <h3>The Admissions Package</h3>
            <p>Large cream envelope. Official OAU seal on the back. Sealed with a red wax stamp.</p>
            <p>Inside: the acceptance letter with their name, the diploma, and the course catalog.</p>
            <p><em>They open this and laugh. They read the course catalog out loud to whoever is nearby.</em></p>
          </div>
          <div className="env-card personal">
            <div className="env-badge" />
            <span className="env-tag">Envelope Two &mdash; Chancellor&rsquo;s Packet Only</span>
            <h3>From the Office of the Guidance Counselor</h3>
            <p>Smaller. More personal. Their name on the front. Return address: <strong>Office of the Guidance Counselor, Old Age University.</strong></p>
            <p>Inside: a 1–2 page letter written specifically for what&rsquo;s happening in their life right now. The job that changed. The kids who left. The thing nobody is saying out loud.</p>
            <p><em>They open this one alone. This is the one they keep.</em></p>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <div className="pq">
        <blockquote>&ldquo;Looking fine while feeling lost is one of the loneliest places a person can be.&rdquo;</blockquote>
        <cite>&mdash; This is the gift that says: I see it. And I&rsquo;m not going to pretend I don&rsquo;t.</cite>
      </div>

      {/* WHO */}
      <section className="who">
        <span className="label">Who You&rsquo;re Sending It To</span>
        <h2>You already know<br /><em>exactly who needs this.</em></h2>
        <div className="who-grid">
          <div className="who-card">The friend turning 50, 55, or 60 who is handling it well and would appreciate someone finally naming it</div>
          <div className="who-card">The person who just retired and is quietly wondering what they&rsquo;re actually for now</div>
          <div className="who-card">The sibling who kept everything together for thirty years and never once got credit for it</div>
          <div className="who-card">The coworker, the parent — the one you want to make laugh while saying something true</div>
          <div className="who-card">The person you&rsquo;ve been meaning to acknowledge for a while and didn&rsquo;t know how</div>
          <div className="who-card">Yourself. For the Tuesday you realized the song wasn&rsquo;t about a girl. It was about your whole life.</div>
        </div>
      </section>

      {/* VS */}
      <section className="vs">
        <div className="vs-inner">
          <h2>What you usually give them.<br /><em>What this actually is.</em></h2>
          <div className="vs-row">
            <div className="vs-col them">
              <h3>The Birthday Card</h3>
              <ul>
                <li>They open it and smile politely</li>
                <li>It sits on the counter for two days</li>
                <li>It goes in the recycling by Tuesday</li>
                <li>Nobody mentions it again</li>
              </ul>
            </div>
            <div className="vs-divider">vs</div>
            <div className="vs-col us">
              <h3>The OAU Packet</h3>
              <ul>
                <li>They open it and laugh out loud</li>
                <li>They read the course catalog to someone else</li>
                <li>They put the letter somewhere they can see it</li>
                <li>They talk about it for weeks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="quotes">
        <div className="quotes-inner">
          <div className="q"><p>&ldquo;The body isn&rsquo;t breaking down. It&rsquo;s just started talking.&rdquo;</p></div>
          <div className="q"><p>&ldquo;You didn&rsquo;t run out of time. You ran out of tolerance.&rdquo;</p></div>
          <div className="q"><p>&ldquo;You&rsquo;re not starting over. You&rsquo;re starting from the most informed position of your entire life.&rdquo;</p></div>
        </div>
      </section>

      {/* TIERS */}
      <section className="tiers">
        <div className="tiers-inner">
          <h2>Choose your<br /><em>enrollment level.</em></h2>
          <p className="tiers-sub">One price for the laugh. One price for the moment they actually feel seen.</p>
          <div className="tiers-grid">
            <div className="tier">
              <span className="tier-name">Standard Enrollment</span>
              <h3>The Welcome Packet</h3>
              <span className="tier-price">$39</span>
              <span className="tier-for">For the person who needs to laugh about this part.</span>
              <ul>
                <li>Personalized Acceptance Letter with their name</li>
                <li>Diploma of Completion — The First Half of Life</li>
                <li>Official OAU Course Catalog (15 courses)</li>
                <li>Oversized OAU admissions envelope with wax seal</li>
              </ul>
              <a href={SHOPIFY_URL} className="tier-cta">Send This Packet &rarr;</a>
              <p className="tier-note">Add recipient name at checkout</p>
            </div>

            <div className="tier featured">
              <span className="tier-badge">Most Meaningful</span>
              <span className="tier-name">Chancellor&rsquo;s Enrollment</span>
              <h3>The Chancellor&rsquo;s Packet</h3>
              <span className="tier-price">$59</span>
              <span className="tier-for">For the person who needs someone to finally name it.</span>
              <ul>
                <li>Everything in the Welcome Packet</li>
                <li>Second envelope from the Office of the Guidance Counselor</li>
                <li>1–2 page personalized letter — the State of Your Union</li>
                <li>Written for exactly where they are right now</li>
                <li>You tell us what&rsquo;s going on. We write the letter.</li>
              </ul>
              <a href={SHOPIFY_URL} className="tier-cta">Send This Packet &rarr;</a>
              <p className="tier-note">You&rsquo;ll fill out a short form after checkout</p>
            </div>

            <div className="tier">
              <span className="tier-name">Full Enrollment</span>
              <h3>The Complete Orientation</h3>
              <span className="tier-price">$99</span>
              <span className="tier-for">For the person you want to give the whole thing.</span>
              <ul>
                <li>Everything in the Chancellor&rsquo;s Packet</li>
                <li>Signed copy of Freshman Class of Old Age — the book</li>
                <li>The complete orientation. The envelopes. The book. All of it.</li>
                <li>Ships when the book is ready — two weeks</li>
              </ul>
              <a href={SHOPIFY_URL} className="tier-cta">Send This Packet &rarr;</a>
              <p className="tier-note">Book ships separately in approx. 2 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <span className="label">How It Works</span>
        <h2>Three steps.<br /><em>Then it handles itself.</em></h2>
        <div className="steps">
          <div className="step">
            <div className="step-n">01</div>
            <div>
              <h3>Order and tell us their name</h3>
              <p>Pick the tier. Check out. <strong>Add recipient name in the order notes.</strong> That&rsquo;s how we personalize everything. Takes two minutes.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-n">02</div>
            <div>
              <h3>If you ordered the Chancellor&rsquo;s Packet — fill out the short form</h3>
              <p>Three questions about what&rsquo;s going on in their life right now. Two minutes. We use your answers to write their personalized Guidance Counselor letter.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-n">03</div>
            <div>
              <h3>We print, seal, and mail everything</h3>
              <p>Personalized on quality stock. Sealed in the official OAU envelope with wax stamp. Mailed directly to their door. <strong>Orders ship Monday–Wednesday.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* JOHN */}
      <section className="john">
        <div className="john-inner">
          <span className="label" style={{color:"var(--gold)"}}>A Note From the Chancellor</span>
          <h3>John Heffron</h3>
          <p>37 years doing standup. Last Comic Standing winner. <strong>The Freshman Class of Old Age bit has 20 million views</strong> — because it named something people had been feeling for years without a word for it.</p>
          <p>Nobody gave them an orientation for this part. The roadmap expired. The GPS is buffering. And for the first time in their adult life nobody is telling them where to go next.</p>
          <p>This packet is the orientation they should have received. Funny because it has to be. Honest because that&rsquo;s the only way it works.</p>
          <span className="john-sig">John Heffron</span>
          <span className="john-title">Chancellor, Old Age University &middot; Founder, Second Draft Society</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          <a href="https://oldageuniversity.com">oldageuniversity.com</a> &nbsp;&middot;&nbsp;
          @oldageuniversity &nbsp;&middot;&nbsp;
          <a href="https://seconddraftsociety.app">seconddraftsociety.app</a>
        </p>
        <p style={{marginTop:8}}>Buying for a group? Reunions, retirement parties, corporate events. <a href="mailto:john@oldageuniversity.com">Email for bulk pricing on 10 or more.</a></p>
        <p style={{marginTop:8}}>OAU is an equal-opportunity aging institution. Enrollment is automatic. Opting out is not currently available.</p>
      </footer>
    </>
  );
}
