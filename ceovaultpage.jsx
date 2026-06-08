/**
 * VIP CEO Vault™ Sales Page — /ceo-vault/
 * The Best Travel Biz Institute™
 *
 * Architecture: Mirrors snapshot-page.jsx — modular CV_* components,
 * in-browser Babel compilation, React 18.
 * Styles: app.css + snapshot.css + ceo-vault.css
 */

/* ─── Shared CTA (always routes to Snapshot) ─────────────────── */
const CV_CTA = ({ children = "Begin with the Travel Business Snapshot™", className = "" }) => (
  <a
    href="/snapshot"
    className={`btn btn-gold ${className}`}
    data-cta="snapshot-purchase"
  >
    {children} <Arr />
  </a>
);

/* ─── Section 1 — Hero ────────────────────────────────────────── */
const CV_Hero = () => (
  <section className="cv-hero" data-screen-label="01 Hero">
    <div className="cv-hero-top"></div>
    <div className="cv-hero-inner">
      <div className="cv-crest">
        <span className="mono">B</span>
        <span className="crest-tier">Tier 03 · The Apex</span>
      </div>
      <span className="eyebrow">Tier 03 · By Application Only · 24 Seats</span>
      <h1>Stop Renting<br />Your <em>Business.</em></h1>
      <p className="cv-hero-sub">The 12-month executive cohort for established travel professionals walking the structural ownership transition.</p>
      <div className="cv-hero-body">
        <p>VIP CEO Vault™ is the private 12-month advisory cohort for established travel professionals ready to complete the structural transition from host-dependent agent to fully accredited, independently operating travel business CEO.</p>
        <p>Founder-led methodology. Phased executive implementation. Guided accreditation. Real-world group trip launch. AI-powered executive infrastructure deployment. All inside a private community of 24 travel CEOs at every stage of the same transition.</p>
      </div>

      <div className="cv-gate">
        <h4>This is not for new agents.</h4>
        <p>VIP CEO Vault™ is designed for established travel professionals who already have traction, clients, bookings, or consistent revenue — and are ready to build the structure required for independent ownership and scale.</p>
        <p>If you're still building your first book of business, Premium Membership is your starting point. If you want self-paced pathway education, 100% Commission Fast Track™ is built for you. <em>VIP CEO Vault™ is the apex tier — for operators ready to walk the transition with founder-led advisory.</em></p>
      </div>

      <div className="cv-status">
        <span>Founding Cohort opens July 1, 2026</span>
        <span>Founding rate $997/mo</span>
        <span>24 members</span>
        <span>By application only</span>
      </div>

      <div className="cv-hero-cta">
        <CV_CTA>Begin with the Travel Business Snapshot™</CV_CTA>
        <p className="cv-cta-sub">Application gateway. Personally reviewed by Bobbie within 7 business days.</p>
      </div>
    </div>
  </section>
);

/* ─── Section 2 — The Math ────────────────────────────────────── */
const CV_Math = () => (
  <section className="cv-math cv-cream" data-screen-label="02 The Math">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">The Executive Math</span>
        <h2>The Math No One in the<br />Industry Talks About</h2>
      </div>
      <div className="cv-math-body">
        <p>Most independent travel professionals don't sell $500,000 in travel annually. Their host agency does — across the entire book of agents underneath them. The individual agent's reality is different.</p>
        <p>Consider an established hosted travel agent earning $80,000 in annual take-home income. That number is real. It reflects what a good hosted agent — one with traction, clients, and consistent booking volume — actually nets after the host's commission split.</p>
        <p className="cv-emph-line">But $80,000 is only what the agent received.</p>
        <div className="cv-sub-h">The Host Split Math</div>
        <p>At a typical 70/30 host split, an agent's $80,000 take-home represents only 70% of what they actually earned in commissions.</p>
      </div>

      <div className="cv-stat-band">
        <div className="cv-stat-cell">
          <div className="lab">Gross commissions earned by the agent</div>
          <div className="fig">$114,286</div>
        </div>
        <div className="cv-stat-cell">
          <div className="lab">Take-home retained by the agent</div>
          <div className="fig">$80,000</div>
        </div>
        <div className="cv-stat-cell is-host">
          <div className="lab">Retained by the host, annually</div>
          <div className="fig">$34,286</div>
        </div>
      </div>
      <p className="cv-math-note">That $34,286 happens every year, indefinitely, for as long as the agent remains hosted. Over ten years: <b>$342,860</b> in retained commissions to the host agency.</p>

      <div className="cv-math-body">
        <div className="cv-sub-h">The Operating Cost Reality</div>
        <p>But the host split is only half of the math. To operate a serious independent travel business at scale — without modern infrastructure — typically requires significant labor:</p>
      </div>

      <table className="cv-table">
        <caption>Traditional Labor Capacity</caption>
        <thead><tr><th>Role</th><th>Typical Annual Salary</th></tr></thead>
        <tbody>
          <tr><td>Office Manager / Administrative Lead</td><td>~$50,000</td></tr>
          <tr><td>Sales Coordinator</td><td>~$45,000</td></tr>
          <tr><td>Marketing Coordinator</td><td>~$50,000</td></tr>
          <tr><td>Content &amp; Communications Manager</td><td>~$45,000</td></tr>
          <tr><td>Customer Service Specialist</td><td>~$40,000</td></tr>
          <tr className="is-total"><td>Total annual labor capacity needed</td><td>~$230,000</td></tr>
        </tbody>
      </table>

      <div className="cv-math-body">
        <p>For decades, this is why most travel professionals stayed hosted. The host agency provided the operational infrastructure that an independent agent couldn't afford to build alone.</p>
        <p className="cv-emph-line">That equation has fundamentally changed.</p>
        <div className="cv-sub-h">The Modern Infrastructure Math</div>
        <p>A modern independent travel business operating with AI-powered executive infrastructure and current automation tools can replicate the operational capacity of that $230,000 staff for approximately:</p>
      </div>

      <table className="cv-table">
        <caption>Modern Operational Infrastructure</caption>
        <thead><tr><th>Infrastructure Component</th><th>Typical Annual Cost</th></tr></thead>
        <tbody>
          <tr><td>CRM platform + email infrastructure</td><td>$600 – $2,400</td></tr>
          <tr><td>AI-powered executive assistant systems</td><td>$240 – $600</td></tr>
          <tr><td>Automation infrastructure &amp; workflows</td><td>$300 – $1,200</td></tr>
          <tr className="is-total"><td>Total annual operational infrastructure</td><td>~$2,000 – $2,400</td></tr>
        </tbody>
      </table>

      <div className="cv-contrast">
        <div className="side old">
          <div className="lab">Traditional Labor</div>
          <div className="fig">$230,000+</div>
          <div className="cap">in traditional annual staffing</div>
        </div>
        <div className="vs">replaced by</div>
        <div className="side new">
          <div className="lab">Modern Infrastructure</div>
          <div className="fig">~$2,400</div>
          <div className="cap">in modern annual infrastructure</div>
        </div>
      </div>
      <p className="cv-math-note">That is not a typo. Approximately <b>$2,400</b> in modern infrastructure now replaces the operational capacity that would otherwise require <b>$230,000+</b> in traditional labor. This is the structural shift that has finally made full independent ownership accessible to serious travel professionals — not as theory, but as operating reality.</p>

      <div className="cv-math-body">
        <div className="cv-sub-h">The Group Trip Math</div>
        <p>A single well-run independent group travel offer at 100% commission can return <strong>$12,000 to $25,000</strong> to a fully accredited travel CEO.</p>
        <p>One successful group launch — supported as part of this program — has the potential to recover the full annual VIP CEO Vault™ investment. Every transition after that compounds independent income year over year.</p>
      </div>

      <div className="cv-math-close">
        <p className="big">The math isn't the problem. <em>The path is.</em></p>
        <p>Most travel professionals stay tethered to their host not because they want to — but because the route to independent accreditation, infrastructure, AI deployment, and operational scale is rarely mapped clearly.</p>
        <p>Inside VIP CEO Vault™, it is — with structured methodology, supporting infrastructure, and direct guidance from someone who has walked this path personally and led others through it successfully.</p>
      </div>
    </div>
  </section>
);

/* ─── Section 3 — What VIP CEO Vault™ Is ─────────────────────── */
const CV_WhatItIs = () => (
  <section className="cv-green" style={{padding:"120px 0"}} data-screen-label="03 What It Is">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">What VIP CEO Vault™ Is</span>
        <h2>A Private Advisory Cohort —<br /><em>Not Coaching, Not a Course</em></h2>
      </div>
      <div className="cv-what-intro">
        <p>VIP CEO Vault™ is a private, founder-led advisory cohort built around a single outcome: complete your structural transition from host-dependent travel agent to operating travel business CEO within 12 months — with a real, launched group travel offer as proof.</p>
        <p>Over those 12 months, you'll move through four phases of guided implementation — supported by Bobbie's direct advisory, the Institute's operational infrastructure, monthly cohort sessions, and 23 other travel professionals at every stage of the same journey.</p>
      </div>
      <div className="cv-triad">
        <div className="ln">
          <span className="no">01</span>
          <p>You won't be learning <em>about</em> accreditation. <strong>You'll be completing your first guided application</strong> alongside structured guidance.</p>
        </div>
        <div className="ln">
          <span className="no">02</span>
          <p>You won't be reading <em>about</em> CRM strategy. <strong>You'll be building yours</strong> — with client payment plan infrastructure for your group trip.</p>
        </div>
        <div className="ln">
          <span className="no">03</span>
          <p>You won't be watching webinars <em>about</em> AI implementation. <strong>You'll be deploying AI-powered executive infrastructure</strong> to support a real group trip launch already in motion.</p>
        </div>
      </div>
      <p className="cv-close-italic">This is the work the travel industry has rarely made available at this depth to independent professionals making the ownership transition.</p>
    </div>
  </section>
);

/* ─── Section 4 — Founder Authority ──────────────────────────── */
const CV_Founder = () => (
  <section className="cv-founder" data-screen-label="04 Founder Authority">
    <div className="cv-founder-inner">
      <span className="eyebrow center">Why VIP CEO Vault™ Exists</span>
      <h2>Designed by Bobbie A. Self, MBA<br /><em>The Travel CEO Architect</em></h2>
      <div className="cv-founder-body">
        <p>Built on more than 25 years of experience designing purpose-driven institutions that develop people through intentional structure.</p>
        <p>Bobbie's professional history includes service as a Centurion Membership Executive with American Express Travel — the invitation-only tier serving Amex's most exclusive cardholders — and executive leadership inside a Fortune 100 luxury travel and lifestyle department. She spent nearly a decade operating within the host-agency model before stepping away and taking a full year to design The Best Travel Biz Institute™ as the formal educational arm for travel professionals seeking the same transition.</p>
        <p>She also operates Sow Into Self Wellness &amp; Luxury Travel Group — actively hosting curated group experiences as a fully independent travel CEO, supported by the same AI-powered infrastructure model The Institute teaches.</p>
      </div>
      <div className="cv-pullquote">
        <p>She's not a coach teaching from memory. She's an active travel CEO teaching what she currently operates.</p>
      </div>
      <div className="cv-founder-body">
        <p>VIP CEO Vault™ is where she leads professionals through the same transition she completed herself — supported by an institutional infrastructure designed to deliver at premium depth.</p>
      </div>
      <a href="/founder-story" className="cv-founder-link">
        Read Bobbie's Founder Story <Arr />
      </a>
    </div>
  </section>
);

/* ─── Section 5 — The Four Pathways ──────────────────────────── */
const CV_PATHWAYS = [
  { abbr: "CLIA", full: "Cruise Lines International Association", body: "Membership and certification — the pathway for cruise-focused travel businesses seeking independent operating authority within the cruise industry." },
  { abbr: "IATA / IATAN", full: "International Air Transport Association", body: "The global standard for travel professionals seeking airline ticketing authority and broader international operating recognition." },
  { abbr: "ARC", full: "Airlines Reporting Corporation", body: "The most rigorous U.S. ticketing pathway — required for issuing airline tickets directly." },
  { abbr: "ARC VTC", full: "ARC Verified Travel Consultant", body: "A non-ticketing pathway designed for travel professionals seeking accredited recognition without full ticketing authority." },
];

const CV_Pathways = () => (
  <section className="cv-green" style={{padding:"120px 0"}} data-screen-label="05 Four Pathways">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">Pathway Architecture</span>
        <h2>The Four Pathways to<br /><em>100% Commission Ownership</em></h2>
      </div>
      <div className="cv-paths-intro">
        <p>There is no single way to become an independent travel business CEO. There are four — and which one fits depends on your business stage, your goals, and the structure that best serves your specific operation.</p>
        <p>Inside VIP CEO Vault™, your Travel Business Snapshot™ determines which pathway fits your situation. Then you walk it with structured guidance.</p>
      </div>
      <div className="cv-paths-grid">
        {CV_PATHWAYS.map(({ abbr, full, body }) => (
          <div key={abbr} className="cv-path">
            <div className="abbr">{abbr}</div>
            <div className="full">{full}</div>
            <p>{body}</p>
          </div>
        ))}
      </div>
      <p className="cv-paths-close">Each pathway has different costs, different timelines, different strategic implications, and different operational outcomes. The Snapshot tells us which one is right for your business. The cohort walks you through it.</p>
    </div>
  </section>
);

/* ─── Section 6 — The Proof ───────────────────────────────────── */
const CV_TESTIMONIALS = [
  {
    quote: "I left my host agency less than 30 days after joining, because my Snapshot and consultation with Bobbie showed the profit leak. Within two weeks of full accreditation, I set up my first hosted cruise. We sail October 2026.",
    name: "Titinius W.",
    title: "Travel CEO · Cruise",
    initial: "T",
  },
  {
    quote: "Bobbie doesn't teach travel. She teaches ownership. The CEO Vault paid for itself in one contract renegotiation.",
    name: "Allene L.",
    title: "Travel CEO · Independent",
    initial: "A",
  },
  {
    quote: "The systems alone are worth the membership. I went from using my gmail and home address, to a full business setup, AI agents to assist with managing my business, and beautiful templates for client retention — and I sleep again.",
    name: "Dr. Latosha H.",
    title: "Travel CEO · Group Travel",
    initial: "L",
  },
];

const CV_Proof = () => (
  <section className="cv-proof testi" data-screen-label="06 The Proof">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">Voices From the Institute</span>
        <h2>Travel Professionals<br />Who Stopped Renting</h2>
      </div>
      <div className="testi-grid">
        {CV_TESTIMONIALS.map(({ quote, name, title, initial }) => (
          <div key={name} className="testi-card">
            <div className="stars">★★★★★</div>
            <blockquote>"{quote}"</blockquote>
            <cite>
              <span className="av">{initial}</span>
              <div className="who">
                <span className="nm">{name}</span>
                <span className="tt">{title}</span>
              </div>
            </cite>
          </div>
        ))}
      </div>
      <div className="cv-proof-close">
        <p>These three travel professionals — along with three additional travel professionals who have completed similar transitions through 1:1 work with Bobbie — represent the documented track record VIP CEO Vault™ is built on.</p>
        <p>VIP CEO Vault™ exists to do this work again, intentionally, with 24 more travel professionals — through a structured cohort designed to deliver the same outcome with greater consistency, depth, and peer reinforcement.</p>
      </div>
    </div>
  </section>
);

/* ─── Section 7 — The 12-Month Journey ───────────────────────── */
const CV_PHASES = [
  {
    phase: "Phase 1",
    months: "Months 1–3",
    title: "Foundation, Readiness & Pathway Selection",
    lead: "Members establish the foundational structure of an independent travel business and complete their first major ownership milestone — a guided starter application.",
    items: [
      "Travel Business Snapshot™ review with Bobbie",
      "Business structure audit",
      "Pathway selection",
      "One guided starter application pathway — typically CLIA or IATA/IATAN, selected based on the member's Snapshot, niche, readiness, and business structure",
      "First Quarterly CEO Strategy Session with Bobbie (60 min, recorded)",
    ],
    outcome: "A clear structural foundation and one ownership milestone in motion within the first 90 days.",
  },
  {
    phase: "Phase 2",
    months: "Months 4–6",
    title: "Infrastructure & Group Trip Implementation",
    lead: "Members build the operational foundation required to sell and manage a structured group travel experience — then begin planning their first independent group trip.",
    items: [
      "Travel business website strategy & build guidance (Institute templates and standards)",
      "CRM selection & setup methodology with implementation walkthrough",
      "Client intake forms and proposal/payment workflow",
      "Client Payment Plan Infrastructure — group trip payment systems, installment tracking, payment communication workflows",
      "Beginning of first structured group travel offer (cruise, retreat, conference, destination experience, or curated group trip)",
      "Group offer planning, launch timeline mapping, supplier/vendor identification, booking/sales flow build",
      "Second Quarterly CEO Strategy Session with Bobbie (60 min, recorded)",
    ],
    outcome: "A real operating business with a real group trip in motion — not theoretical preparation.",
  },
  {
    phase: "Phase 3",
    months: "Months 7–9",
    title: "AI Executive Assistant & Supplier Strategy",
    lead: "Members deploy AI-powered executive infrastructure to support the active group trip launch — building executive operational capacity into a business that is already selling.",
    items: [
      "AI Executive Assistant Implementation™ — proprietary methodology for deploying AI-powered virtual executive assistant capacity inside an independent travel business",
      "AI applied to live group trip operations: payment plan reminders, client follow-up automation, content batching, group communication systems, FAQ and pre-trip education automation, missed payment communication, task tracking",
      "Supplier education and partner conversations — introduced as relationships are confirmed and aligned with cohort needs",
      "Third Quarterly CEO Strategy Session with Bobbie (60 min, recorded)",
    ],
    outcome: "AI-powered executive capacity layered onto a business actively operating in market.",
  },
  {
    phase: "Phase 4",
    months: "Months 10–12",
    title: "Launch, Scale & Transition Completion",
    lead: "Members complete their group trip launch, optimize operations based on real data, build retention and referral systems, and prepare for the alumni transition.",
    items: [
      "Group trip optimization and launch review",
      "Client retention systems",
      "Referral strategy",
      "Revenue review",
      "Systems refinement based on live operations",
      "Transition completion review",
      "Fourth Quarterly CEO Strategy Session with Bobbie (60 min, recorded)",
      "Alumni Circle invitation",
    ],
    outcome: "A fully operational independent travel business with a launched group offer, retention systems, and a path forward.",
  },
];

const CV_Journey = () => (
  <section className="cv-journey" data-screen-label="07 The 12-Month Journey">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">The Cohort Journey</span>
        <h2>The 12-Month Executive<br />Implementation Journey</h2>
        <p>Each phase delivers the right work in the right order — guided by Bobbie, supported by the Institute's infrastructure, and reinforced by your 23 cohort peers.</p>
      </div>
      <div className="cv-phases">
        {CV_PHASES.map(({ phase, months, title, lead, items, outcome }) => (
          <div key={phase} className="cv-phase">
            <div className="cv-phase-head">
              <div className="cv-phase-no">
                <span className="ph">{phase}</span>
                <span className="mo">{months}</span>
              </div>
              <h3>{title}</h3>
              <p className="lead">{lead}</p>
            </div>
            <div className="cv-phase-body">
              <div className="incl">Includes</div>
              <ul>
                {items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className="cv-phase-out"><b>{phase} Outcome</b>{outcome}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="cv-journey-close">
        <p>The Founding Cohort timeline is intentionally designed to support 2027 group travel planning. Beginning group trip implementation in Phase 2 (fall 2026) gives members more runway to structure client payment plans, promote the trip with intention, and build toward stronger participation before final payment deadlines arrive.</p>
        <p>Most established group travel — cruises, retreats, conferences, curated experiences — requires 6 to 12 months of payment plan runway for client installments. The Founding Cohort's phased timing is built for this reality.</p>
      </div>
    </div>
  </section>
);

/* ─── Section 8 — Why Access Unlocks by Phase ────────────────── */
const CV_WhyAccess = () => (
  <section className="cv-reflect" data-screen-label="08 Why Access Unlocks">
    <div className="cv-reflect-inner">
      <span className="eyebrow center">Cohort Design Principle</span>
      <h2>Why Access Unlocks by Phase</h2>
      <p>VIP CEO Vault™ is intentionally sequenced. Members do not receive the full program on day one — because this is not a content library. It is a 12-month executive implementation journey.</p>
      <p>Each phase unlocks the curriculum, templates, application support, AI implementation, and done-with-you resources needed for that stage of the transition.</p>
      <p className="accent">The goal is not to overwhelm members with information. The goal is to walk them through the right work in the right order.</p>
      <p className="accent" style={{marginTop:"30px"}}>Progressive access protects member focus, preserves transformation depth, and ensures every resource arrives at the moment it becomes useful — not before.</p>
    </div>
  </section>
);

/* ─── Section 9 — Direct Advisory Anchors ────────────────────── */
const CV_ANCHORS = [
  {
    roman: "I",
    title: "Quarterly 1:1 CEO Strategy Sessions",
    body: "Four private 60-minute strategy sessions with Bobbie across the 12-month cohort. Each session is recorded for member reference and supported by a pre-session strategy form to ensure focused, implementation-driven conversation.",
  },
  {
    roman: "II",
    title: "Monthly VIP CEO Strategy Hour",
    body: "A 60-minute Bobbie-led monthly cohort call combining structured teaching with member Q&A. Members submit questions one week prior to ensure each session is responsive to active implementation. Recorded for active members who cannot attend live.",
  },
  {
    roman: "III",
    title: "Priority Executive Access",
    body: "A private support channel inside the cohort Skool community for time-sensitive strategic questions between scheduled sessions. Bobbie responds within 48 business hours. Members may also post in the broader VIP cohort community for peer and team response. This is structured executive access — not unlimited coaching, instant messaging, emergency support, or an open-ended help desk. It is designed to help members avoid stalled decisions during active implementation.",
  },
  {
    roman: "IV",
    title: "Annual CEO Retreat",
    body: "A one-day, Atlanta-based in-person CEO Retreat. Retreat programming, content, and materials are included for active VIP CEO Vault™ members. Members are responsible for their own travel, lodging, and personal expenses.",
  },
];

const CV_Advisory = () => (
  <section className="cv-green" style={{padding:"120px 0"}} data-screen-label="09 Direct Advisory Anchors">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">The Advisory Structure</span>
        <h2>Direct Advisory Anchors</h2>
      </div>
      <div className="cv-anchors-intro">
        <p>Across the 12-month journey, members receive consistent direct access to Bobbie and the Institute's executive infrastructure.</p>
      </div>
      <div className="cv-anchors">
        {CV_ANCHORS.map(({ roman, title, body }) => (
          <div key={roman} className="cv-anchor">
            <span className="no">{roman}</span>
            <div>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="cv-anchors-note">Partner and supplier education may be introduced throughout the cohort year as relationships are confirmed and aligned with the cohort's implementation phase.</p>
    </div>
  </section>
);

/* ─── Section 10 — Done-With-You ─────────────────────────────── */
const CV_DoneWithYou = () => (
  <section className="cv-dwy" data-screen-label="10 Done-With-You">
    <div className="cv-dwy-inner">
      <span className="eyebrow center">The Institute Philosophy</span>
      <h2>Done-With-You.<br />Not Done-For-You.</h2>
      <p>VIP CEO Vault™ is a done-with-you advisory environment. We walk beside you through strategic decisions, infrastructure development, accreditation preparation, supplier positioning, group trip launch, and growth execution.</p>
      <p>But you remain the CEO of the business you are building.</p>
      <p>The Institute provides methodology, templates, frameworks, guided walkthroughs, and direct advisory at the highest-impact decision points. Members execute the work — supported, guided, and reviewed — but not outsourced.</p>
      <p className="accent">This is what creates real ownership. Anything less creates dependence.</p>
    </div>
  </section>
);

/* ─── Section 11 — Investment ────────────────────────────────── */
const CV_Investment = () => (
  <section className="cv-green" style={{padding:"120px 0"}} data-screen-label="11 Investment">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">Investment</span>
        <h2>Founding Cohort Pricing</h2>
      </div>
      <div className="cv-invest-card">
        <div className="cv-invest-top">
          <span className="cv-invest-ribbon">Founding Cohort Rate</span>
          <div className="cv-invest-price">$997<span className="per"> / month</span></div>
          <div className="cv-invest-total">12-month cohort commitment · $11,964 total</div>
          <p className="cv-invest-desc">This is the Founding Cohort rate, available only while the first full cohort of 24 members is being seated. After the Founding Cohort fills, standard pricing of <b>$1,497/month</b> begins for all subsequent cohorts — a difference of $6,000 per year.</p>
        </div>
        <div className="cv-pay">
          <div className="cv-pay-row">
            <span className="opt">Monthly</span>
            <span className="save">$997/mo for 12 months</span>
            <span className="amt">$11,964 total</span>
          </div>
          <div className="cv-pay-row">
            <span className="opt">Quarterly</span>
            <span className="save">Saves $1,000 across the year</span>
            <span className="amt">$2,891/quarter</span>
          </div>
          <div className="cv-pay-row">
            <span className="opt">Pay-in-Full</span>
            <span className="save">Saves $1,967</span>
            <span className="amt">$9,997</span>
          </div>
        </div>
      </div>
      <div className="cv-invest-math">
        <div className="lab">The Math</div>
        <p>A single independent group travel offer at 100% commission can return <span className="hl">$12,000–$25,000</span> to a fully accredited travel CEO.</p>
        <p>One successful group launch — supported as part of this program — has the potential to recover your full annual investment. Every transition after that compounds your independent income.</p>
      </div>
    </div>
  </section>
);

/* ─── Section 12 — Standalone Comparison ────────────────────── */
const CV_COMPARE_ROWS = [
  { svc: "Independent accreditation consulting", market: "$6,500 – $16,000", included: "Guided preparation" },
  { svc: "Travel business website + CRM build guidance", market: "$5,000 – $14,000", included: "Templates & methodology" },
  { svc: "AI Executive Assistant Implementation™", market: "$2,000 – $5,000", included: "Phase 3 deployment" },
  { svc: "Direct advisory equivalent", market: "$4,000 – $12,000", included: "4 Quarterly 1:1 sessions" },
  { svc: "12 months executive cohort access", market: "$4,800 – $10,000", included: "Monthly CEO Strategy Hour" },
  { svc: "Annual in-person retreat", market: "$1,500 – $4,000", included: "Included" },
  { svc: "Group trip launch strategy support", market: "$2,000 – $5,000", included: "Phase 2–4 implementation" },
];

const CV_Comparison = () => (
  <section className="cv-cream" style={{padding:"120px 0"}} data-screen-label="12 Standalone Comparison">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">The Value Comparison</span>
        <h2>What This Would Cost Standalone</h2>
      </div>
      <table className="cv-compare">
        <thead>
          <tr>
            <th>Service Component</th>
            <th className="mid">Typical Market Value</th>
            <th className="last">Included in CEO Vault™</th>
          </tr>
        </thead>
        <tbody>
          {CV_COMPARE_ROWS.map(({ svc, market, included }) => (
            <tr key={svc}>
              <td className="svc">{svc}</td>
              <td className="mid">{market}</td>
              <td className="last"><span className="ck">✓</span>{included}</td>
            </tr>
          ))}
          <tr className="tot">
            <td>Standalone Equivalent Value</td>
            <td className="mid"><span className="big">$25,800 – $66,000</span></td>
            <td className="last"></td>
          </tr>
          <tr className="final">
            <td>VIP CEO Vault™ Founding Cohort</td>
            <td className="mid"><span className="big">$11,964</span></td>
            <td className="last"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

/* ─── Section 13 — Application Process ──────────────────────── */
const CV_Application = () => (
  <section className="cv-green" style={{padding:"120px 0"}} data-screen-label="13 Application Process">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">Application</span>
        <h2>How to Apply</h2>
      </div>
      <div className="cv-apply-body">
        <p>Admission to VIP CEO Vault™ is by application only.</p>
        <p>The application begins with the Travel Business Snapshot™ — an executive diagnostic of your current travel business, personally reviewed by Bobbie. This is not a marketing form. It is the same diagnostic our successful transitions completed, and it serves three real purposes:</p>
      </div>
      <ul className="cv-apply-list">
        <li><p>Determine which of the four pathways fits your business situation.</p></li>
        <li><p>Confirm your business is at the stage where VIP CEO Vault™ is the right fit — not every applicant is accepted; some are better served by Premium Membership or 100% Commission Fast Track™ first.</p></li>
        <li><p>Build the foundation for your first quarterly CEO Strategy Session, if accepted.</p></li>
      </ul>
      <div className="cv-apply-next">
        <div className="lab">What Happens Next</div>
        <ul className="cv-apply-list" style={{marginTop:0}}>
          <li><p>You complete the Travel Business Snapshot™ — Founding Cohort Launch Rate: $97.</p></li>
          <li><p>Bobbie personally reviews your Snapshot within 7 business days.</p></li>
          <li><p>If you're a fit, we schedule an Acceptance Conversation.</p></li>
          <li><p>If accepted, you begin in the next available admission window — Founding Cohort opens July 1, 2026.</p></li>
        </ul>
      </div>
      <p className="cv-apply-note">Founding Cohort pricing of $997/month is available only while the inaugural 24 seats remain. Acceptance secures your rate for the full 12-month commitment.</p>
      <div className="cv-apply-cta">
        <CV_CTA>Begin with the Travel Business Snapshot™</CV_CTA>
      </div>
    </div>
  </section>
);

/* ─── Section 14 — Four Tracks, One Ecosystem ───────────────── */
const CV_FourTracks = () => (
  <section className="cv-cream" style={{padding:"120px 0"}} data-screen-label="14 Four Tracks">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">Where This Fits in the Institute</span>
        <h2>Four Tracks. <em>One Ecosystem.</em></h2>
      </div>
      <div className="cv-tracks-intro">
        <p>The Best Travel Biz Institute™ serves travel professionals at every stage of the ownership journey. VIP CEO Vault™ is the most advanced tier — for established operators ready to walk the full transition with founder-led advisory.</p>
      </div>
      <div className="cv-tracks">
        <a className="cv-track" href="/challenge">
          <div className="tname">14-Day Travel Agent to CEO Challenge™</div>
          <div className="tprice">Free</div>
          <ul>
            <li>Mindset shift</li>
            <li>Ownership language</li>
            <li>Entry-level frameworks</li>
            <li>Virtual graduation ceremony</li>
            <li>Digital certificate</li>
          </ul>
          <div className="tfor"><b>For</b>Anyone entering the journey</div>
        </a>
        <a className="cv-track" href="/premium">
          <div className="tname">Premium Membership</div>
          <div className="tprice">$97 / month</div>
          <ul>
            <li>Business education</li>
            <li>Foundational systems training</li>
            <li>Community access</li>
            <li>AI fundamentals for Travel CEOs</li>
            <li>100% Commission Pathway education</li>
          </ul>
          <div className="tfor"><b>For</b>New and growing agents</div>
        </a>
        <a className="cv-track" href="/fast-track">
          <div className="tname">100% Commission Fast Track™</div>
          <div className="tprice">$1,997 one-time · Lifetime</div>
          <ul>
            <li>Self-paced pathway course</li>
            <li>Application implementation methodology</li>
            <li>Templates and frameworks</li>
            <li>AI marketing course</li>
            <li>Premium Membership included</li>
          </ul>
          <div className="tfor"><b>For</b>Independent operators implementing on their own timeline</div>
        </a>
        <div className="cv-track apex">
          <span className="apex-badge">Apex Tier</span>
          <div className="tname">VIP CEO Vault™</div>
          <div className="tprice">$997 / month · 12-month commitment</div>
          <ul>
            <li>Founder-led advisory cohort</li>
            <li>Phased executive implementation</li>
            <li>Quarterly 1:1 with Bobbie</li>
            <li>Monthly CEO Strategy Hour</li>
            <li>Guided starter application</li>
            <li>Done-with-you infrastructure</li>
            <li>AI Executive Assistant Implementation™</li>
            <li>Group trip launch support</li>
            <li>Annual CEO Retreat</li>
            <li>Alumni Circle access</li>
          </ul>
          <div className="tfor"><b>For</b>Established operators walking the transition</div>
        </div>
      </div>
      <div className="cv-tracks-close">
        <p className="em">Fast Track teaches the pathway. VIP CEO Vault™ walks with the operator.</p>
        <p>Premium members may eventually advance to Fast Track or VIP. Fast Track buyers may apply for VIP when they're ready for advisory depth. There is no single "right" tier — only the right tier for your current stage.</p>
      </div>
    </div>
  </section>
);

/* ─── Section 15 — Alumni Circle ─────────────────────────────── */
const CV_Alumni = () => (
  <section className="cv-green cv-alumni" data-screen-label="15 Alumni Circle">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow center">What Comes After</span>
        <h2>VIP CEO Vault™ Alumni Circle</h2>
      </div>
      <div className="cv-alumni-body">
        <p>Graduates of VIP CEO Vault™ may continue inside the Alumni Circle at a discounted alumni rate for up to two years after graduation.</p>
        <p>This alumni layer exists because the wisdom of those who have walked the path becomes priceless to those entering it. Alumni receive continued community access, selected continuing education, CEO Roundtables, and confirmed partner/supplier session replays as available — while also contributing lived insight to incoming cohorts.</p>
      </div>
      <div className="cv-alumni-cols">
        <div className="cv-alum-card incl">
          <h5>Alumni Access Includes</h5>
          <ul>
            <li>Ongoing peer connection</li>
            <li>Selected continuing education</li>
            <li>CEO Roundtables</li>
            <li>Confirmed partner/supplier session replays as available</li>
            <li>Alumni-level community access</li>
            <li>Contribution opportunities to incoming cohorts</li>
          </ul>
        </div>
        <div className="cv-alum-card excl">
          <h5>Alumni Access Does Not Include</h5>
          <ul>
            <li>Quarterly private 1:1 CEO Strategy Sessions</li>
            <li>Active phase-based implementation support</li>
            <li>Priority Executive Access</li>
          </ul>
          <p className="fine">Unless separately purchased or invited.</p>
        </div>
      </div>
      <p className="cv-alumni-close">The Alumni Circle is for graduates. Active VIP enrollment is for those still walking the transition.</p>
    </div>
  </section>
);

/* ─── Section 16 — Why This Structure Works ──────────────────── */
const CV_WhyStructure = () => (
  <section className="cv-struct" data-screen-label="16 Why This Structure Works">
    <div className="cv-struct-inner">
      <span className="eyebrow center">The Institutional Approach</span>
      <h2>Why This Structure Works</h2>
      <p className="opener">In a trust-driven market, travel professionals do not simply choose programs and services. They choose the person behind them, the structure supporting them, and the institution built to deliver them.</p>
      <div className="cv-struct-body">
        <p>VIP CEO Vault™ was built on that principle.</p>
        <p><strong>Founder-led methodology.</strong> Bobbie personally designs the work, reviews every Snapshot, and conducts every strategy session.</p>
        <p><strong>Phased implementation.</strong> Members walk through the right work in the right order — supported by templates, methodology, and direct advisory at every phase.</p>
        <p><strong>Real institutional infrastructure.</strong> The Institute Marketing Engine, the consulting team, and the cohort community all exist to support delivery at depth without compromising the quality of Bobbie's direct involvement.</p>
        <p><strong>Documented track record.</strong> Six successful transitions completed. Three publicly featured. Three additional transitions delivered through 1:1 advisory.</p>
      </div>
      <p className="cv-struct-close">This is independent ownership in its most structural form.</p>
    </div>
  </section>
);

/* ─── Section 17 — FAQ ────────────────────────────────────────── */
const CV_FAQS = [
  {
    q: "Why does access unlock by phase instead of all at once?",
    a: ["VIP CEO Vault™ is not a content library — it is a 12-month executive implementation journey. Each phase delivers the right curriculum, templates, application support, AI implementation, and done-with-you resources for that stage of the transition. Progressive access protects member focus, preserves transformation depth, and ensures every resource arrives at the moment it becomes useful — not before."],
  },
  {
    q: "Why only one guided application during the cohort year?",
    a: ["VIP CEO Vault™ includes one guided starter application pathway during Phase 1 — typically CLIA or IATA/IATAN, selected based on your Snapshot. Additional pathways may be addressed later in the cohort based on readiness, business need, and strategic fit. We do not rush applications simply to check boxes; each pathway is selected according to your business model and long-term ownership strategy."],
  },
  {
    q: "Does Bobbie personally deliver everything, or does the Institute use a team?",
    a: [
      "VIP CEO Vault™ is founder-led with operational infrastructure. Bobbie personally reviews every Travel Business Snapshot™, leads acceptance conversations, conducts the four quarterly 1:1 strategy sessions, leads the monthly VIP CEO Strategy Hour, designs and teaches core methodology, leads the annual retreat, and provides Priority Executive Access via the cohort Skool channel within 48 business hours.",
      "Implementation work — application reviews, methodology development, system templates, AI workflows, and the Institute Marketing Engine — is supported by the Institute's consulting team and infrastructure operating against Bobbie's standards.",
    ],
    extra: (
      <p>This structure is intentional. Premium-tier transformation work cannot be delivered at depth by any single operator. <strong>The Institute is founder-led but not founder-dependent</strong> — and that is what allows premium members to receive premium work.</p>
    ),
  },
  {
    q: "What does accreditation actually cost?",
    a: ["Accreditation fees are paid directly to the credentialing bodies — separate from your VIP CEO Vault™ investment."],
    table: (
      <table className="cv-faq-table">
        <thead><tr><th>Program</th><th>Cost Range</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>CLIA</td><td>$139–$848+ /yr</td><td>Cruise-focused; individual &amp; agency options</td></tr>
          <tr><td>IATA / IATAN</td><td>$600–$2,000+</td><td>Plus guarantees; required for airline ticketing authority</td></tr>
          <tr><td>ARC</td><td>$2,300 + $20,000</td><td>Guarantee; most rigorous; required for issuing airline tickets</td></tr>
          <tr><td>ARC VTC</td><td>$195</td><td>Low-cost alternative for recognition</td></tr>
        </tbody>
      </table>
    ),
    afterTable: "Most members will land in the $3,000–$10,000 range depending on their chosen pathway. We discuss these costs transparently during your Acceptance Conversation, and your Snapshot helps determine which pathway makes the most sense for your business and budget.",
  },
  {
    q: "What if my host agency won't release me cleanly?",
    a: ["Inside VIP CEO Vault™, we address host transitions strategically — including contract review considerations, notice periods, and client/booking transitions. Many of our members navigate this without burning bridges. The cohort community is a private space where these conversations happen openly."],
  },
  {
    q: "What if my accreditation application is not approved?",
    a: ["Strong outcomes are most likely when applications are completed thoroughly and accurately — which is exactly what the structured walkthrough and Institute consulting team review process are designed to support. If a credentialing body requests additional information or returns an application for revision, Bobbie works with you directly on the response strategy."],
  },
  {
    q: "Can I afford this if my income is inconsistent?",
    a: ["VIP CEO Vault™ requires real financial commitment. If your current income makes $997/mo a hardship, Premium Membership ($97/mo) or 100% Commission Fast Track™ ($1,997 one-time) may be better starting points. We'd rather you build your foundation first than overcommit before you're ready."],
  },
  {
    q: "What if I'm not ready to leave my host yet?",
    a: ["That's exactly what the Travel Business Snapshot™ is designed to assess. Not every applicant is accepted. Some receive guidance to spend 6–12 months in Premium or Fast Track first, then reapply. Better to start at the right tier than rush into the wrong one."],
  },
  {
    q: "What happens after 12 months?",
    a: ["You complete your 12-month cohort journey having worked through accreditation preparation, infrastructure build, AI deployment, and your first independent group launch. Graduates may continue in the VIP CEO Vault™ Alumni Circle at a discounted rate for up to two years — for continued community access, selected continuing education, CEO Roundtables, and confirmed partner/supplier session replays as available."],
  },
  {
    q: "How is this different from 100% Commission Fast Track™?",
    a: [
      "Fast Track is the self-paced course covering pathway content. It's $1,997, lifetime access, and you implement on your own timeline without 1:1 advisory or cohort engagement.",
      "VIP CEO Vault™ includes founder-led advisory with Bobbie, the 24-member cohort community, four quarterly 1:1 strategy sessions, monthly VIP CEO Strategy Hour, Priority Executive Access, the annual retreat, AI Executive Assistant Implementation™, and done-with-you implementation across infrastructure, group trip launch, and supplier strategy.",
    ],
    closing: "Different products. Different audiences. Both built on the same Pathways framework. Fast Track teaches the pathway. VIP CEO Vault™ walks with the operator.",
  },
  {
    q: "Will pricing stay at $997/month forever?",
    a: ["No. $997/month is the Founding Cohort rate — available only while the inaugural 24 members are being seated. After the Founding Cohort fills, all subsequent cohorts move to standard pricing of $1,497/month. That is a $6,000 annual difference. Founding members who enroll at $997/month retain that rate for their full 12-month cohort commitment."],
  },
];

const CV_FAQ = () => (
  <section className="cv-faq" data-screen-label="17 FAQ">
    <div className="wrap cv-faq-wrap">
      <div className="section-head">
        <span className="eyebrow center">Frequently Asked</span>
        <h2>Honest Questions, Honest Answers</h2>
      </div>
      <div className="faq-list">
        {CV_FAQS.map((f, i) => (
          <details key={i} className="faq-item" open={i === 0}>
            <summary>{f.q}<span className="ico">+</span></summary>
            <div className="ans">
              {f.a.map((p, j) => <p key={j}>{p}</p>)}
              {f.extra || null}
              {f.table || null}
              {f.afterTable ? <p>{f.afterTable}</p> : null}
              {f.closing ? <p><strong>{f.closing}</strong></p> : null}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Section 18 — Disclaimer ────────────────────────────────── */
const CV_Disclaimer = () => (
  <section className="sp-disclaimer" data-screen-label="18 Disclaimer">
    <div className="wrap sp-disclaimer-wrap">
      <h6 className="sp-disclaimer-label">Important</h6>
      <p className="sp-disclaimer-text">VIP CEO Vault™ provides advisory services, educational guidance, structured methodology, and operational support designed to assist travel professionals in their independent ownership transition. Outcomes depend on each member's business structure, qualifications, market conditions, effort, and third-party requirements.</p>
      <p className="sp-disclaimer-text">Accreditation approvals, supplier relationships, commission outcomes, group trip sales results, and client payment plan outcomes depend on factors outside the Institute's control. VIP CEO Vault™ does not guarantee accreditation approval, supplier acceptance, income outcomes, specific group sales results, or business outcomes of any kind.</p>
      <p className="sp-disclaimer-text">Industry math examples referenced on this page (including host commission split scenarios, traditional labor cost equivalents, and modern infrastructure cost ranges) are illustrative of typical industry conditions and are not representations of any specific member's expected outcomes. Individual experiences vary based on market, niche, business stage, and effort.</p>
      <p className="sp-disclaimer-text">AI Executive Assistant Implementation™ methodology, frameworks, tools, prompts, workflows, system architecture, and integrations are proprietary intellectual property of The Best Travel Biz Institute™ and are disclosed only to active VIP CEO Vault™ members under the terms of program enrollment. Public discussion or distribution of proprietary methodology by members is governed by the program's enrollment terms.</p>
      <p className="sp-disclaimer-text">Testimonials reflect the experiences of specific members and are not a guarantee or prediction of similar results.</p>
      <p className="sp-disclaimer-text sp-disclaimer-italic">Cohort delivery: 12 months from acceptance date. Application required. Founding Cohort opens July 1, 2026.</p>
    </div>
  </section>
);

/* ─── Section 19 — Founding Cohort Pricing Reminder ─────────── */
const CV_PricingReminder = () => (
  <section className="cv-reminder" data-screen-label="19 Pricing Reminder">
    <div className="cv-reminder-inner">
      <span className="eyebrow center">A Note on Founding Cohort Pricing</span>
      <h2>The $997 Rate Is the<br />Founding Cohort Rate.</h2>
      <p>VIP CEO Vault™ is priced at $997/month for the Founding Cohort — the first 24 members seated during the inaugural cohort window opening July 1, 2026.</p>
      <p>After the Founding Cohort fills, standard pricing of $1,497/month begins for all subsequent cohorts — a $6,000 annual difference.</p>
      <p>Founding members who enroll at the $997 rate retain that rate for the full 12-month cohort commitment. Standard pricing applies to any re-enrollment or future cohort participation.</p>
      <p className="close">The Founding Cohort exists once. Standard pricing is permanent.</p>
    </div>
  </section>
);

/* ─── Section 20 — Final CTA ─────────────────────────────────── */
const CV_Final = () => (
  <section className="cv-final" data-screen-label="20 Final CTA">
    <div className="wrap">
      <h2>You Were Created to <em>Build More.</em></h2>
      <div className="cv-final-body">
        <p>VIP CEO Vault™ was built for travel professionals ready to move beyond dependency models and build ownership with structure, strategy, and intention.</p>
        <p>Because long-term transformation is rarely accidental.</p>
      </div>
      <div className="cv-final-emph">It's built.</div>
      <div className="cv-final-status">24 seats · Founding Cohort opens July 1, 2026 · Founding rate $997/mo · By application only</div>
      <span className="eyebrow center">Start With the Travel Business Snapshot™</span>
      <p className="cv-final-diag">An executive diagnostic of your current travel business — designed to identify your structure, ownership readiness, revenue gaps, and next strategic move.</p>
      <p className="cv-final-rate">Founding Cohort Launch Rate: <b>$97</b>.</p>
      <div className="cta-row">
        <CV_CTA>Begin Your Snapshot</CV_CTA>
      </div>
      <p className="cv-final-cta-sub">Application personally reviewed by Bobbie within 7 business days. Founding Cohort pricing of $997/mo locked for your 12-month journey. Standard pricing of $1,497/mo begins after the Founding Cohort fills.</p>
      <div className="cv-final-sig">Bobbie A. Self<small>Founder · The Best Travel Biz Institute™</small></div>
    </div>
  </section>
);

/* ─── Footer Note Strip ──────────────────────────────────────── */
const CV_FootnoteStrip = () => (
  <section className="cv-footnote" data-screen-label="Footer Note">
    <p>VIP CEO Vault™ is a private cohort program of The Best Travel Biz Institute™ · Founded by Bobbie A. Self, MBA — The Travel CEO Architect · © 2026 The Best Travel Biz Institute™</p>
  </section>
);

/* ─── Page Root ───────────────────────────────────────────────── */
const CeoVaultPage = () => (
  <main id="top">
    <Nav home={URLS.home} />
    <CV_Hero />
    <CV_Math />
    <CV_WhatItIs />
    <CV_Founder />
    <CV_Pathways />
    <CV_Proof />
    <CV_Journey />
    <CV_WhyAccess />
    <CV_Advisory />
    <CV_DoneWithYou />
    <CV_Investment />
    <CV_Comparison />
    <CV_Application />
    <CV_FourTracks />
    <CV_Alumni />
    <CV_WhyStructure />
    <CV_FAQ />
    <CV_Disclaimer />
    <CV_PricingReminder />
    <CV_Final />
    <CV_FootnoteStrip />
    <Footer home={URLS.home} />
  </main>
);

window.CeoVaultPage = CeoVaultPage;
