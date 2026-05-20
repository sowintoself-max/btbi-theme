/**
 * Snapshot Sales Page — /snapshot/
 * Travel Business Snapshot™ — The Best Travel Biz Institute™
 *
 * Refinement pass: shorter, focused, deliverable-first.
 * Visual emphasis is the clipboard dossier — not the founder portrait.
 *
 * Calibrated for ecosystem alignment with About, Founder Story,
 * and VIP CEO Vault™ pages.
 */

const SP_CTA = ({children = "Begin My Snapshot", variant = "gold", className = ""}) => (
  <a
    href={URLS.snapshotCheckout}
    className={`btn btn-${variant} ${className}`}
    data-cta="snapshot-purchase"
  >
    {children} <Arr />
  </a>
);

const SP_Hero = () => (
  <section className="sp-hero" data-screen-label="01 Snapshot Hero">
    <div className="wrap sp-hero-grid">
      <div>
        <span className="eyebrow">The Institute · Executive Diagnostic</span>
        <h1>Find the profit leak <em>before</em> you scale the business.</h1>
        <p className="lead">A personalized, executive-level diagnostic of your travel business — delivered privately within seven business days as a written analysis and a 20–30 minute Loom video review.</p>
        <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
          <SP_CTA>Begin My Snapshot</SP_CTA>
          <a href="#what" className="btn btn-ghost-light">See What's Reviewed</a>
        </div>
        <div className="sp-hero-meta">
          <div className="m"><div className="l">Format</div><div className="v">Asynchronous · No live call</div></div>
          <div className="m"><div className="l">Delivery</div><div className="v">Within 7 business days</div></div>
          <div className="m"><div className="l">Investment</div><div className="v">$97 founding · $197 public</div></div>
        </div>
      </div>
      <div className="sp-hero-art" aria-label="Travel Business Snapshot dossier — clipboard with diagnostic checklist">
        <div className="sp-hero-art-stamp">Private Dossier · 001</div>
        <img src="assets/snapshot-clipboard.png" alt="Travel Business Snapshot diagnostic clipboard" />
      </div>
    </div>
  </section>
);

const SP_What = () => (
  <section className="sp-what" id="what" data-screen-label="02 What It Is">
    <div className="wrap sp-what-grid">
      <div>
        <span className="eyebrow">What the Snapshot Is</span>
        <h2>An asynchronous diagnostic — not a sales call.</h2>
        <p className="lead">You complete a private executive intake. Bobbie reviews. You receive a written diagnosis and a Loom walkthrough you keep — delivered to your inbox on your time.</p>
      </div>
      <div className="sp-what-aside">
        <div className="sp-what-not">
          <strong>It is not</strong>
          A discovery call. A coaching session. A live audit. A pitch for upsells. The Snapshot is delivered privately — no calendar coordination required.
        </div>
      </div>
    </div>
  </section>
);

const AREAS = [
  ["01","Business Structure","Entity, contracts, foundational legal posture."],
  ["02","Ownership Position","Database, IP, client list, equity surfaces."],
  ["03","Operational Gaps","Workflow, capacity, single-point risks."],
  ["04","Profit Leaks","Margin, pricing, host splits, cost map."],
  ["05","Supplier Positioning","Tier, terms, accreditation, leverage."],
  ["06","Systems & Scalability","Stack, SOPs, automation, AI assist."],
  ["07","Growth Readiness","Asset value, succession, exit posture."]
];

const SP_Areas = () => (
  <section className="sp-areas" data-screen-label="03 Areas Reviewed">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">What We Review</span>
        <h2>Seven executive dimensions <em>+ a roadmap.</em></h2>
        <p>Each Snapshot is read against the same seven-pillar framework used inside the Institute's Premium Membership.</p>
      </div>
      <div className="sp-areas-grid sp-areas-grid--tight">
        {AREAS.map(([n,t,d]) => (
          <div key={t} className="sp-area">
            <span className="n">{n}</span>
            <h5>{t}</h5>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SP_Deliverables = () => (
  <section className="sp-deliv sp-deliv--solo" data-screen-label="04 Deliverables">
    <div className="wrap sp-deliv-solo">
      <div className="section-head">
        <span className="eyebrow center">The Deliverable</span>
        <h2>A dossier you keep.</h2>
        <p>Each Snapshot ships as a private four-part executive package — written analysis, walkthrough, roadmap, and profit-leak observations.</p>
      </div>
      <ul className="sp-deliv-list sp-deliv-list--solo">
        <li>
          <span className="num">I.</span>
          <div><h5>Private Executive Analysis</h5><p>A written, line-by-line review of where the business is leaking margin, leverage, or ownership.</p></div>
        </li>
        <li>
          <span className="num">II.</span>
          <div><h5>Personalized Loom Walkthrough</h5><p>20–30 minutes of executive review, in Bobbie's voice — yours to revisit at will.</p></div>
        </li>
        <li>
          <span className="num">III.</span>
          <div><h5>Strategic Roadmap</h5><p>Prioritized next moves across structure, systems, suppliers, profit, and ownership.</p></div>
        </li>
        <li>
          <span className="num">IV.</span>
          <div><h5>Profit-Leak Observations</h5><p>The exact places revenue is being absorbed by your host, your stack, or your structure.</p></div>
        </li>
      </ul>
      <div className="sp-deliv-stamp sp-deliv-stamp--solo"><span className="dot"></span>Delivered privately within 7 business days</div>
    </div>
  </section>
);

const SP_Pricing = () => (
  <section className="sp-price" data-screen-label="05 Pricing">
    <div className="wrap sp-price-wrap sp-price-wrap--single">
      <div className="section-head">
        <span className="eyebrow center">Investment</span>
        <h2>One reserved cohort. One executive review.</h2>
      </div>
      <div className="sp-price-single">
        <div className="sp-price-card featured">
          <span className="ribbon">Founding Cohort Launch Rate</span>
          <span className="pill">Reserved Pricing</span>
          <h3>Founding Snapshot</h3>
          <div className="price">$97<span className="strike">$197</span></div>
          <p className="desc">$97 during the VIP CEO Vault™ Founding Cohort window · $197 after the Founding Cohort closes.</p>
          <ul>
            <li>Full private executive analysis</li>
            <li>20–30 minute Loom walkthrough</li>
            <li>Strategic roadmap deliverable</li>
            <li>Delivered within 7 business days</li>
            <li>Complimentary Travel CEO Community access <em style={{fontStyle:"italic",opacity:.78}}>(on Skool)</em></li>
          </ul>
          <SP_CTA variant="gold">Begin My Snapshot</SP_CTA>
          <p className="sp-vip-line">Completion of the Travel Business Snapshot™ is required before VIP CEO Vault™ consideration.</p>
        </div>
      </div>
    </div>
  </section>
);

const SP_Founder = () => (
  <section className="sp-founder sp-founder--tight" data-screen-label="06 Founder">
    <div className="sp-founder-inner">
      <div className="sp-founder-img" role="img" aria-label="Bobbie A. Self"></div>
      <div>
        <span className="eyebrow">Reviewed Personally By</span>
        <h3>Bobbie A. Self</h3>
        <p>Twenty years in corporate luxury travel. MBA. Former Centurion Membership Executive with American Express Travel and Fortune 100 luxury travel executive. Founder of The Best Travel Biz Institute™ and active travel CEO operating Sow Into Self Wellness &amp; Luxury Travel Group.</p>
        <p>Every Snapshot is read and delivered personally — not by an associate, not by AI.</p>
        <div className="creds-row">
          <div className="c"><div className="l">Experience</div><div className="v">Centurion · Fortune 100</div></div>
          <div className="c"><div className="l">Education</div><div className="v">MBA · 20+ yrs consulting</div></div>
          <div className="c"><div className="l">Accreditation</div><div className="v">CLIA · IATAN (personal)</div></div>
        </div>
      </div>
    </div>
  </section>
);

const SP_FAQS = [
  { q: "Is the Snapshot a live call?", a: ["No. It's delivered asynchronously — a written analysis paired with a 20–30 minute Loom you keep."] },
  { q: "Who personally reviews the Snapshot?", a: ["Bobbie A. Self personally reviews every Snapshot — not an associate, not an AI. The written analysis and Loom walkthrough are her direct work."] },
  { q: "How quickly will I receive it?", a: ["Within 7 business days of submitting your intake form in full. Incomplete intakes may delay delivery."] },
  { q: "What's the difference between $97 and $197?", a: ["$97 is the Founding Cohort Launch Rate, available during the VIP CEO Vault™ Founding Cohort window. After that window closes, the Snapshot returns to $197. Deliverables and turnaround are identical."] },
  { q: "Is the Snapshot refundable?", a: ["No. Because it includes personalized strategic analysis and custom deliverables, Snapshot purchases are non-refundable once preparation has begun."] },
  { q: "Is this required for VIP CEO Vault™?", a: ["Yes. The Snapshot is the executive diagnostic reviewed prior to any VIP CEO Vault™ invitation."] }
];

const SP_FAQ = () => (
  <section className="sp-faq" data-screen-label="07 FAQ">
    <div className="wrap sp-faq-wrap">
      <div className="section-head">
        <span className="eyebrow center">Frequently Asked</span>
        <h2>Direct answers, before you reserve.</h2>
      </div>
      <div className="faq-list sp-faq-list">
        {SP_FAQS.map((f,i)=>(
          <details key={i} className="faq-item" open={i===0}>
            <summary>{f.q}<span className="ico">+</span></summary>
            <div className="ans">{f.a.map((p,j)=><p key={j}>{p}</p>)}</div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const SP_Disclaimer = () => (
  <section className="sp-disclaimer" data-screen-label="08 Disclaimer">
    <div className="wrap sp-disclaimer-wrap">
      <h6 className="sp-disclaimer-label">Important</h6>
      <p className="sp-disclaimer-text">The Travel Business Snapshot™ provides executive diagnostic review, strategic recommendations, and structured guidance. Outcomes from implementing these recommendations depend on each business's structure, qualifications, market, effort, and third-party requirements.</p>
      <p className="sp-disclaimer-text">The Snapshot does not guarantee accreditation approval, supplier acceptance, income outcomes, or admission to VIP CEO Vault™. Snapshot results are personally reviewed and provided for strategic consideration; implementation and outcomes remain the responsibility of the business owner.</p>
      <p className="sp-disclaimer-text sp-disclaimer-italic">Snapshot delivery: privately within 7 business days. Individual experiences vary.</p>
    </div>
  </section>
);

const SP_Final = () => (
  <section className="sp-final" data-screen-label="09 Final CTA">
    <div className="wrap">
      <h2>Stop guessing where the business <em>actually</em> stands.</h2>
      <p className="lead">A private executive review of your travel business — delivered within seven business days.</p>
      <div className="cta-row">
        <SP_CTA>Begin My Snapshot</SP_CTA>
      </div>
      <div className="signoff">Bobbie A. Self<small>Founder · The Best Travel Biz Institute™</small></div>
    </div>
  </section>
);

const SnapshotPage = () => (
  <main id="top">
    <Nav home={URLS.home} />
    <SP_Hero />
    <SP_What />
    <SP_Areas />
    <SP_Deliverables />
    <SP_Pricing />
    <SP_Founder />
    <SP_FAQ />
    <SP_Disclaimer />
    <SP_Final />
    <Footer home={URLS.home} />
  </main>
);
window.SnapshotPage = SnapshotPage;
