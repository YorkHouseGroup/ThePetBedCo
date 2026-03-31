import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import EmailCapture from '../components/EmailCapture';

export default function Invest() {
  return (
    <>
      <Helmet>
        <title>Invest — ThePetBedCo. | Investment Opportunity in the UK Pet Market</title>
        <meta name="description" content="ThePetBedCo. is disrupting the £9bn+ UK pet industry with a modular dog bed system. Discover our market opportunity, business model, and how to get involved as an early investor." />
        <link rel="canonical" href="https://www.thepetbedco.com/invest" />
        <meta property="og:title" content="Invest in ThePetBedCo. — Modular Pet Products for the Modern Home" />
        <meta property="og:description" content="A scalable, recurring-revenue model in the growing UK pet market." />
        <meta property="og:image" content="https://picsum.photos/seed/petbedco-invest-og/1200/630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* HERO */}
      <section className="invest-hero" aria-labelledby="invest-hero-heading">
        <div className="container">
          <div className="invest-hero__content">
            <ScrollReveal><span className="eyebrow">Investment opportunity</span></ScrollReveal>
            <ScrollReveal delay={1}>
              <h1 id="invest-hero-heading">The pet industry needs<br />a design-led brand.<br /><em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>We're building it.</em></h1>
            </ScrollReveal>
            <ScrollReveal delay={2}><p>ThePetBedCo. is a modular dog bed brand targeting the premium segment of the UK's £9bn+ pet industry — with a recurring revenue model, strong sustainability credentials, and a product that genuinely changes behaviour.</p></ScrollReveal>
            <ScrollReveal delay={3}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:invest@thepetbedco.com" className="btn btn-primary">Get in Touch</a>
                <a href="#market" className="btn btn-outline-white">View the Opportunity</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MARKET */}
      <section className="section bg-oat" id="market" aria-labelledby="market-heading">
        <div className="container">
          <div className="section-header">
            <ScrollReveal><span className="eyebrow">The market</span></ScrollReveal>
            <ScrollReveal delay={1}><h2 id="market-heading">A massive, growing market — with a gap at the top</h2></ScrollReveal>
            <ScrollReveal delay={2}><p>The UK pet industry is one of the most resilient consumer sectors. Premium, design-led pet home products remain almost entirely unaddressed.</p></ScrollReveal>
          </div>
          <div className="market-stats">
            {[
              { num: '£9bn+', label: 'UK Pet Industry Value', sub: 'One of Europe\'s largest pet markets, with consistent year-on-year growth' },
              { num: '13M+', label: 'Dogs in the UK', sub: 'Dog ownership surged post-pandemic and has remained elevated' },
              { num: '18mo', label: 'Average Bed Replacement Cycle', sub: 'Dog owners replace beds on average every 18 months — a problem our system solves' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={(i + 1) as 1 | 2 | 3} className="stat-card">
                <span className="stat-card__number">{s.num}</span>
                <span className="stat-card__label">{s.label}</span>
                <p>{s.sub}</p>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
            {[
              { title: 'The Humanisation Trend', text: 'Pet owners increasingly treat their dogs as family members — extending their personal aesthetic standards to pet products. Demand for premium, home-integrated pet accessories is growing faster than the broader category.' },
              { title: 'The Sustainability Shift', text: 'Consumers are actively seeking products that reduce waste. The modular model is a compelling sustainability story — one that resonates strongly with our target demographic of 25–45 year old homeowners.' },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={(i + 1) as 1 | 2} style={{ padding: '2.5rem', background: 'var(--white)', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{c.title}</h3>
                <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{c.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="section bg-slate" aria-labelledby="biz-heading">
        <div className="container">
          <div className="biz-model__grid">
            <ScrollReveal>
              <span className="eyebrow">Business model</span>
              <h2 id="biz-heading">Built for recurring revenue</h2>
              <p style={{ marginBottom: '1.5rem', opacity: 0.85 }}>The modular system creates a natural recurring revenue loop. The base bed is a one-time premium purchase — but covers are seasonal, giftable, and designed to be collected.</p>
              <p style={{ opacity: 0.85, marginBottom: '1.5rem' }}>Cover releases are planned seasonally (4 collections per year), driving regular return purchase occasions without discounting.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
                {['High AOV — premium base beds command strong margins', 'Recurring covers — seasonal collections drive repeat purchases', 'Gift-ready — covers are an ideal £40–£80 gift item', 'D2C first — high margin ecommerce, scalable to wholesale/retail'].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--terracotta)', fontWeight: 700, marginTop: '0.1rem' }}>✓</span>
                    <span><strong>{item.split(' — ')[0]}</strong> — {item.split(' — ')[1]}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={2} className="biz-model__visual">
              {[
                { icon: '🛏️', bg: 'var(--moss)', title: 'Tier 1 — Foundation Base Bed', desc: 'One-time premium purchase. High AOV, strong first-order margin.' },
                { icon: '🔄', bg: 'var(--terracotta)', title: 'Tier 2 — Seasonal Cover Collections', desc: '4 drops per year. Repeat purchasing, gift occasions, trend-driven demand.' },
                { icon: '🏪', bg: 'var(--slate)', title: 'Tier 3 — Wholesale & Retail', desc: 'Future channel: premium interiors and pet boutiques. Brand amplification.', light: true },
              ].map((t, i) => (
                <div key={t.title}>
                  {i > 0 && <div style={{ textAlign: 'center', fontSize: '1.5rem', color: 'var(--terracotta)' }}>↓</div>}
                  <div className="biz-tier">
                    <div className="biz-tier__icon" style={{ background: t.bg, color: t.light ? 'var(--charcoal)' : 'white' }}>{t.icon}</div>
                    <div><strong>{t.title}</strong><p>{t.desc}</p></div>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="section why-now" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <ScrollReveal><span className="eyebrow">Why now</span></ScrollReveal>
            <ScrollReveal delay={1}><h2 id="why-heading">The timing has never been better</h2></ScrollReveal>
            <ScrollReveal delay={2}><p>Three converging forces are creating a once-in-a-decade opportunity in premium pet home products.</p></ScrollReveal>
          </div>
          <div className="reasons">
            {[
              { n: '01', t: 'Post-Pandemic Pet Boom', p: 'UK dog ownership increased by over 3 million during 2020–2022. Many of these "pandemic pets" are now firmly embedded in households with higher spending power.' },
              { n: '02', t: 'Home Aesthetics Movement', p: 'Interior design content has exploded across Instagram, TikTok, and Pinterest. Pet owners with beautiful homes are acutely aware of products that break the aesthetic.' },
              { n: '03', t: 'Sustainability as Standard', p: 'The next generation of consumers treats sustainability as a baseline expectation. A modular, lower-waste model positions us exactly where consumer values are heading.' },
            ].map((r, i) => (
              <ScrollReveal key={r.n} delay={(i + 1) as 1 | 2 | 3} className="reason">
                <div className="reason__num">{r.n}</div>
                <h3>{r.t}</h3>
                <p>{r.p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRACTION */}
      <section className="section bg-oat" aria-labelledby="traction-heading">
        <div className="container">
          <div className="section-header">
            <ScrollReveal><span className="eyebrow">Early traction</span></ScrollReveal>
            <ScrollReveal delay={1}><h2 id="traction-heading">Building before we've launched</h2></ScrollReveal>
            <ScrollReveal delay={2}><p>We're pre-launch, but not starting from zero.</p></ScrollReveal>
          </div>
          <div className="traction-grid">
            {[
              { val: 'X', sub: 'Early access email signups ahead of launch' },
              { val: "Q3 '25", sub: 'Target launch date for first product collection' },
              { val: '4', sub: 'Cover collections planned for Year 1' },
              { val: '3', sub: 'Bed sizes at launch — S, M, and L' },
            ].map((t, i) => (
              <ScrollReveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4} className="traction-item">
                <div className="traction-item__value"><span>{t.val}</span></div>
                <p>{t.sub}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section invest-cta" aria-labelledby="invest-cta-heading">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Get involved</span>
            <h2 id="invest-cta-heading">Interested in investing?</h2>
            <p>We're having early conversations with investors who share our vision. If that's you, we'd love to talk.</p>
            <div className="invest-cta__actions">
              <a href="mailto:invest@thepetbedco.com" className="btn btn-primary">Email the Founder</a>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
            <p style={{ fontSize: '0.8rem', marginTop: '2rem', opacity: 0.5 }}>This page is for information purposes only and does not constitute a financial promotion or offer of securities.</p>
          </ScrollReveal>
        </div>
      </section>

      <EmailCapture heading="Keep up with our progress" eyebrow="Stay informed" buttonLabel="Keep Me Updated" subtext="Sign up for investor updates and key milestones as we build toward launch." />
    </>
  );
}
