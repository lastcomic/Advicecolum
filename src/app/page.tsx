import Link from "next/link";

const SHOPIFY_URL = "https://oldageuniversity.myshopify.com/products/freshman-class-of-old-age-starter-kit-welcome-to-the-second-draft";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header style={{background:"var(--navy)",padding:"16px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 20px rgba(0,0,0,.3)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
          <div style={{width:42,height:42,border:"2px solid var(--gold)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--gold)",fontFamily:"'Playfair Display',serif",fontSize:13,fontWeight:700,letterSpacing:1}}>OAU</div>
          <div>
            <span style={{color:"#fff",fontFamily:"'Playfair Display',serif",fontSize:14,fontWeight:700,letterSpacing:2,textTransform:"uppercase",display:"block"}}>Old Age University</span>
            <span style={{color:"var(--gold)",fontSize:11,letterSpacing:1,fontStyle:"italic",display:"block"}}>Orientation for the Second Half</span>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <Link href="/advisor" style={{color:"rgba(255,255,255,.6)",fontSize:13,letterSpacing:1,textTransform:"uppercase",textDecoration:"none",fontFamily:"'Playfair Display',serif",fontWeight:700}}>Course Advisor</Link>
          <a href={SHOPIFY_URL} style={{background:"var(--gold)",color:"var(--navy)",fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:13,padding:"10px 22px",letterSpacing:1,textTransform:"uppercase",textDecoration:"none"}}>Send the Packet — $35</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{background:"var(--navy)",padding:"72px 40px 64px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(201,168,76,.03) 40px,rgba(201,168,76,.03) 41px)"}} />
        <p style={{fontSize:13,letterSpacing:4,textTransform:"uppercase",color:"var(--gold)",marginBottom:20,position:"relative",fontFamily:"'Crimson Text',serif"}}>The Gift For the Person Who Has Everything Except an Answer</p>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(34px,6vw,68px)",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:20,position:"relative",animation:"fadeUp .5s ease both"}}>
          Finally. A Birthday Gift<br /><em style={{fontStyle:"italic",color:"var(--gold)"}}>Worth Giving.</em>
        </h1>
        <p style={{fontFamily:"'IM Fell English',serif",fontSize:"clamp(17px,2.5vw,22px)",color:"rgba(255,255,255,.8)",maxWidth:560,margin:"0 auto 12px",fontStyle:"italic",position:"relative",animation:"fadeUp .5s .1s ease both"}}>Funnier than a card. More honest than a bottle of wine. Something they&rsquo;ll actually keep.</p>
        <p style={{fontSize:14,color:"rgba(255,255,255,.45)",maxWidth:440,margin:"0 auto 36px",letterSpacing:1.5,textTransform:"uppercase",position:"relative",animation:"fadeUp .5s .15s ease both"}}>Personalized &middot; Printed &middot; Mailed directly to them</p>
        <div style={{width:60,height:2,background:"var(--gold)",margin:"0 auto 36px",animation:"fadeUp .5s .2s ease both"}} />
        <div style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",gap:12,animation:"fadeUp .5s .25s ease both"}}>
          <a href={SHOPIFY_URL} style={{display:"inline-block",background:"var(--gold)",color:"var(--navy)",fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:17,padding:"18px 48px",letterSpacing:1,textTransform:"uppercase",textDecoration:"none"}}>Send the Welcome Packet — $35</a>
          <span style={{fontSize:13,color:"rgba(255,255,255,.4)",letterSpacing:1,fontStyle:"italic"}}>Add their name at checkout. We print it, seal it, and mail it.</span>
        </div>
      </section>

      {/* Occasions bar */}
      <div style={{background:"var(--dark-cream)",borderTop:"1px solid rgba(201,168,76,.3)",borderBottom:"1px solid rgba(201,168,76,.3)",padding:"18px 40px",textAlign:"center"}}>
        <p style={{fontSize:15,letterSpacing:2,textTransform:"uppercase",color:"var(--muted)"}}>
          The $35 gift that feels like $200. Perfect for <strong style={{color:"var(--navy)"}}>50th</strong> &middot; <strong style={{color:"var(--navy)"}}>55th</strong> &middot; <strong style={{color:"var(--navy)"}}>60th</strong> birthdays &middot; <strong style={{color:"var(--navy)"}}>Retirement</strong> &middot; &ldquo;I have no idea what to get them&rdquo;
        </p>
      </div>

      {/* Pitch */}
      <section style={{maxWidth:860,margin:"0 auto",padding:"72px 40px"}}>
        <span style={{fontSize:12,letterSpacing:4,textTransform:"uppercase",color:"var(--gold)",display:"block",marginBottom:14}}>The Gift</span>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,4vw,42px)",color:"var(--navy)",lineHeight:1.2,marginBottom:28,fontWeight:700}}>You know someone who kept<br />having birthdays. <em style={{fontStyle:"italic",color:"var(--gold)"}}>This is for them.</em></h2>
        <p style={{fontSize:19,lineHeight:1.85,color:"#4A3F2F",marginBottom:20,maxWidth:720}}>They built everything they were supposed to build. They handled everything. They kept it all together.</p>
        <p style={{fontSize:19,lineHeight:1.85,color:"#4A3F2F",marginBottom:20,maxWidth:720}}>And somewhere along the way the roadmap expired and nobody said anything about it.</p>
        <p style={{fontSize:19,lineHeight:1.85,color:"#4A3F2F",marginBottom:20,maxWidth:720}}><strong style={{color:"var(--navy)"}}>The Old Age University Welcome Packet is the official orientation for the second half of life.</strong> Funny. Specific. Honest in a way that makes people laugh and then go quiet for a second.</p>
        <p style={{fontSize:19,lineHeight:1.85,color:"#4A3F2F",marginBottom:20,maxWidth:720}}>You tell us their name. We personalize it, print it on heavyweight cream stock, seal it in an official OAU envelope, and mail it directly to them. They open a piece of mail from Old Age University and feel completely seen.</p>
      </section>

      {/* Pull quote */}
      <div style={{background:"var(--navy)",padding:"56px 40px",textAlign:"center"}}>
        <blockquote style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,3vw,30px)",fontStyle:"italic",color:"#fff",maxWidth:700,margin:"0 auto 16px",lineHeight:1.5}}>&ldquo;Looking fine while feeling lost is one of the loneliest places a person can be.&rdquo;</blockquote>
        <cite style={{color:"var(--gold)",fontSize:13,letterSpacing:2,textTransform:"uppercase",fontStyle:"normal",fontFamily:"'Crimson Text',serif"}}>— This is the gift that says: I see it. And I&rsquo;m not going to pretend I don&rsquo;t.</cite>
      </div>

      {/* What's inside */}
      <section style={{background:"#fff",padding:"72px 40px",borderTop:"1px solid var(--dark-cream)"}}>
        <div style={{maxWidth:920,margin:"0 auto"}}>
          <span style={{fontSize:12,letterSpacing:4,textTransform:"uppercase",color:"var(--gold)",display:"block",marginBottom:14}}>What&rsquo;s Inside the Envelope</span>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,4vw,40px)",color:"var(--navy)",marginBottom:8,fontWeight:700}}>Four things.<br /><em style={{fontStyle:"italic",color:"var(--gold)"}}>All of them real.</em></h2>
          <p style={{fontSize:17,color:"var(--muted)",marginBottom:48,fontStyle:"italic"}}>Everything printed on quality stock. Everything personalized. Everything mailed in an official OAU envelope.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:32}}>
            {[
              {num:"01",title:"Personalized Acceptance Letter",desc:"Official admission to Old Age University. Their name on the acceptance line. Selected based on qualifications including \"making a noise when standing up\" and \"looking at a menu like it's a legal document.\" The kind of thing people frame."},
              {num:"02",title:"Diploma of Completion",desc:"For the First Half of Life. Signed by John Heffron, Chancellor. Because they finished something and that actually deserves acknowledgment."},
              {num:"03",title:"Official Course Catalog",desc:"15 OAU courses including OAU 211 The Thermostat Is Not a Democracy, OAU 223 Your Doctor Is Younger Than Your Car, and OAU 101 Why'd I Walk in the Room."},
              {num:"04",title:"Chancellor's Correspondence",desc:"A 1-2 page personalized letter — the official State of Your Union — addressing exactly where they are and what the second half actually looks like from here. Written for them specifically. Not a form letter."},
            ].map((item) => (
              <div key={item.num} style={{padding:"28px 22px",border:"1px solid var(--dark-cream)",position:"relative",background:"var(--cream)"}}>
                <div style={{position:"absolute",top:-1,left:24,right:24,height:3,background:"var(--gold)"}} />
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:40,fontWeight:900,color:"var(--dark-cream)",lineHeight:1,marginBottom:10}}>{item.num}</div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:17,color:"var(--navy)",marginBottom:10,fontWeight:700}}>{item.title}</h3>
                <p style={{fontSize:14,color:"var(--muted)",lineHeight:1.6}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{maxWidth:920,margin:"0 auto",padding:"72px 40px"}}>
        <span style={{fontSize:12,letterSpacing:4,textTransform:"uppercase",color:"var(--gold)",display:"block",marginBottom:14}}>Who You&rsquo;re Sending It To</span>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,4vw,40px)",color:"var(--navy)",marginBottom:36,fontWeight:700}}>You already know exactly<br />who needs <em style={{fontStyle:"italic",color:"var(--gold)"}}>this.</em></h2>
        <ul style={{listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20}}>
          {[
            "The friend turning 50, 55, or 60 who is handling it well and would appreciate someone finally naming it",
            "The person who just retired and is quietly wondering what they're for now",
            "The sibling who kept everything together for thirty years and never got credit for it",
            "The coworker, the parent — the one you want to make laugh while saying something true",
            "The person you've been meaning to acknowledge for a while and didn't know how",
          ].map((text, i) => (
            <li key={i} style={{background:"#fff",border:"1px solid var(--dark-cream)",padding:"24px 24px 24px 42px",fontSize:17,lineHeight:1.6,color:"#4A3F2F",position:"relative"}}>
              <span style={{position:"absolute",left:18,top:24,color:"var(--gold)",fontWeight:700,fontFamily:"'Playfair Display',serif"}}>—</span>
              {text}
            </li>
          ))}
        </ul>
      </section>

      {/* Card vs Packet */}
      <div style={{background:"var(--navy)",padding:"56px 40px"}}>
        <div style={{maxWidth:760,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 60px 1fr",gap:24,alignItems:"center",textAlign:"center"}}>
          <div>
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:700,color:"#fff",marginBottom:10,display:"block"}}>Birthday Card</span>
            <p style={{fontSize:15,lineHeight:1.6,color:"rgba(255,255,255,.55)"}}>They open it. They smile. It goes in the recycling by Tuesday.</p>
          </div>
          <div style={{color:"rgba(255,255,255,.2)",fontSize:24,fontFamily:"'Playfair Display',serif",textAlign:"center"}}>vs</div>
          <div>
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:700,color:"var(--gold)",marginBottom:10,display:"block"}}>The OAU Packet</span>
            <p style={{fontSize:15,lineHeight:1.6,color:"rgba(255,255,255,.55)"}}>They open it. They laugh. They read it again. They put it somewhere they can see it.</p>
          </div>
        </div>
      </div>

      {/* Quotes */}
      <section style={{background:"var(--dark-cream)",padding:"56px 40px",borderTop:"1px solid rgba(201,168,76,.2)"}}>
        <div style={{maxWidth:920,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:24}}>
          {[
            "\"The body isn't breaking down. It's just started talking.\"",
            "\"You didn't run out of time. You ran out of tolerance.\"",
            "\"You're not starting over. You're starting from the most informed position of your entire life.\"",
          ].map((q, i) => (
            <div key={i} style={{background:"#fff",padding:24,borderBottom:"3px solid var(--gold)"}}>
              <p style={{fontFamily:"'IM Fell English',serif",fontStyle:"italic",fontSize:16,lineHeight:1.65,color:"var(--navy)"}}>{q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{maxWidth:740,margin:"0 auto",padding:"72px 40px"}}>
        <span style={{fontSize:12,letterSpacing:4,textTransform:"uppercase",color:"var(--gold)",display:"block",marginBottom:14}}>How It Works</span>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,3.5vw,36px)",color:"var(--navy)",marginBottom:48,fontWeight:700}}>Three steps.<br /><em style={{fontStyle:"italic",color:"var(--gold)"}}>Then it&rsquo;s done.</em></h2>
        <div style={{display:"flex",flexDirection:"column"}}>
          {[
            {num:"01",title:"Order the Packet",desc:<>$35. Takes two minutes. <strong style={{color:"var(--navy)"}}>Important: Add their name in the order notes at checkout</strong> — that&rsquo;s how we personalize it.</>},
            {num:"02",title:"We Print and Mail It",desc:"We personalize everything with their name, print it on quality stock, seal it in an OAU envelope, and mail it directly to their door. Orders ship Monday\u2013Wednesday."},
            {num:"03",title:"They Open It. They Feel Seen.",desc:"They get a piece of mail from Old Age University. They laugh. Then they go quiet for a second. That\u2019s the gift."},
          ].map((step, i) => (
            <div key={i} style={{display:"grid",gridTemplateColumns:"56px 1fr",gap:20,textAlign:"left",padding:"28px 0",borderBottom:i < 2 ? "1px solid var(--dark-cream)" : "none"}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:36,fontWeight:900,color:"var(--gold)",lineHeight:1.1}}>{step.num}</div>
              <div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:"var(--navy)",marginBottom:6,fontWeight:700}}>{step.title}</h3>
                <p style={{fontSize:16,color:"var(--muted)",lineHeight:1.6}}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chancellor's Correspondence */}
      <section style={{background:"var(--cream)",padding:"72px 40px",borderTop:"1px solid var(--dark-cream)"}}>
        <div style={{maxWidth:760,margin:"0 auto",textAlign:"center"}}>
          <span style={{fontSize:12,letterSpacing:4,textTransform:"uppercase",color:"var(--gold)",display:"block",marginBottom:14}}>The Personalized Letter</span>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,4vw,42px)",color:"var(--navy)",marginBottom:16,fontWeight:700,lineHeight:1.2}}>The Chancellor&rsquo;s Correspondence.<br /><em style={{color:"var(--gold)"}}>Written for exactly where they are.</em></h2>
          <p style={{fontSize:19,lineHeight:1.8,color:"#4A3F2F",marginBottom:12,maxWidth:640,marginLeft:"auto",marginRight:"auto"}}>Every packet includes a 1-2 page personalized letter — the official State of Your Union — addressing exactly where they are right now and what the second half actually looks like from here.</p>
          <p style={{fontSize:17,color:"var(--muted)",fontStyle:"italic",marginBottom:36,maxWidth:560,marginLeft:"auto",marginRight:"auto"}}>This isn&rsquo;t a form letter. It&rsquo;s written for them specifically. Printed on OAU stationery. Sealed inside the admissions envelope with the official wax seal.</p>
          <div style={{background:"var(--navy)",padding:"36px 40px",maxWidth:600,margin:"0 auto",textAlign:"left"}}>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:13,letterSpacing:3,textTransform:"uppercase",color:"var(--gold)",marginBottom:16}}>Sample — Chancellor&rsquo;s Correspondence</p>
            <p style={{fontFamily:"'IM Fell English',serif",fontStyle:"italic",fontSize:17,color:"rgba(255,255,255,.85)",lineHeight:1.8,marginBottom:16}}>&ldquo;Dear Freshman — We&rsquo;ve reviewed your record. You built everything you were supposed to build. You handled everything. You kept it all together. And somewhere along the way the roadmap expired and nobody said anything about it...&rdquo;</p>
            <p style={{fontSize:13,color:"rgba(255,255,255,.35)",letterSpacing:1}}>— The full letter is included in every packet. Personalized to them.</p>
          </div>
        </div>
      </section>

      {/* Buy section */}
      <section id="buy" style={{background:"var(--navy)",padding:"80px 40px",textAlign:"center"}}>
        <div style={{maxWidth:580,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,4vw,44px)",color:"#fff",marginBottom:12,fontWeight:700}}>The Welcome Packet.<br /><em style={{fontStyle:"italic",color:"var(--gold)"}}>$35. Mailed to their door.</em></h2>
          <p style={{fontFamily:"'IM Fell English',serif",fontStyle:"italic",fontSize:19,color:"rgba(255,255,255,.65)",marginBottom:32}}>The gift for the person who kept having birthdays. Includes a personalized 1-2 page Chancellor&rsquo;s Correspondence written specifically for where they are right now.</p>
          <span style={{fontFamily:"'Playfair Display',serif",fontSize:60,fontWeight:900,color:"var(--gold)",display:"block",lineHeight:1,marginBottom:6}}>$35</span>
          <span style={{fontSize:13,letterSpacing:2,textTransform:"uppercase",color:"rgba(255,255,255,.4)",marginBottom:36,display:"block"}}>Free personalization &middot; Ships in 3–5 business days</span>
          <ul style={{listStyle:"none",textAlign:"left",maxWidth:420,margin:"0 auto 40px",display:"flex",flexDirection:"column",gap:10}}>
            {[
              "Personalized Acceptance Letter on heavyweight cream stock",
              "Diploma of Completion — The First Half of Life",
              "Official OAU Course Catalog (15 courses)",
              "Freshman Class Orientation Guide",
              "Sealed in an oversized OAU admissions envelope with official wax seal",
              "Chancellor's Correspondence — 1-2 page personalized letter written for exactly where they are right now",
            ].map((item, i) => (
              <li key={i} style={{color:"rgba(255,255,255,.8)",fontSize:16,display:"flex",alignItems:"flex-start",gap:10}}>
                <span style={{color:"var(--gold)",fontWeight:"bold",flexShrink:0}}>&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a href={SHOPIFY_URL} style={{display:"block",background:"var(--gold)",color:"var(--navy)",fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:20,padding:"22px 64px",letterSpacing:1,textTransform:"uppercase",textDecoration:"none",marginBottom:16}}>Send the Packet &rarr;</a>
          <p style={{fontSize:13,color:"rgba(255,255,255,.35)",fontStyle:"italic"}}><strong>Add recipient name in order notes at checkout</strong> — we use this to personalize everything. Orders ship Monday–Wednesday.</p>
        </div>
      </section>

      {/* John Heffron */}
      <section style={{maxWidth:680,margin:"0 auto",padding:"72px 40px",textAlign:"center"}}>
        <span style={{fontSize:12,letterSpacing:4,textTransform:"uppercase",color:"var(--gold)",display:"block",marginBottom:14}}>A Note From the Chancellor</span>
        <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:26,color:"var(--navy)",marginBottom:20,fontWeight:700}}>John Heffron</h3>
        <p style={{fontSize:18,lineHeight:1.8,color:"#4A3F2F",marginBottom:16}}>37 years doing standup. Last Comic Standing winner. The Freshman Class of Old Age bit has 20 million views — because it named something people had been feeling for years without a word for it.</p>
        <p style={{fontSize:18,lineHeight:1.8,color:"#4A3F2F",marginBottom:16}}>This packet is that bit. Personalized, printed, and mailed to someone you love.</p>
        <p style={{fontSize:18,lineHeight:1.8,color:"#4A3F2F",marginBottom:16}}>Nobody gave them an orientation for this part. This is it.</p>
        <div style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",fontSize:28,color:"var(--navy)",marginTop:28}}>John Heffron</div>
        <div style={{fontSize:13,letterSpacing:1.5,textTransform:"uppercase",color:"var(--muted)",marginTop:4}}>Chancellor, Old Age University &middot; Founder, Second Draft Society</div>
      </section>

      {/* Footer */}
      <footer style={{background:"var(--navy)",padding:"28px 40px",textAlign:"center",borderTop:"3px solid var(--gold)"}}>
        <p style={{color:"rgba(255,255,255,.4)",fontSize:13}}>
          <a href="https://oldageuniversity.com" style={{color:"var(--gold)",textDecoration:"none"}}>oldageuniversity.com</a>
          {" "}&middot;{" "}@oldageuniversity{" "}&middot;{" "}
          <a href="https://seconddraftsociety.app" style={{color:"var(--gold)",textDecoration:"none"}}>seconddraftsociety.app</a>
        </p>
        <p style={{marginTop:8,color:"rgba(255,255,255,.4)",fontSize:13}}>OAU is an equal-opportunity aging institution. Enrollment is automatic. Opting out is not currently available.</p>
      </footer>
    </>
  );
}
