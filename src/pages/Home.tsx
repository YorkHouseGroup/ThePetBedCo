import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import EmailCapture from '../components/EmailCapture';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ThePetBedCo. — The Last Dog Bed You'll Ever Need to Buy</title>
        <meta name="description" content="ThePetBedCo. makes the last dog bed you'll ever need. One premium orthopaedic base, infinite style with interchangeable zip-off covers. Sustainable, stylish, made to last." />
        <link rel="canonical" href="https://www.thepetbedco.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ThePetBedCo. — The Last Dog Bed You'll Ever Need to Buy" />
        <meta property="og:description" content="One premium orthopaedic base, infinite style. Interchangeable zip-off covers mean you never need to replace your dog bed again." />
        <meta property="og:image" content="https://picsum.photos/seed/petbedco-og/1200/630" />
        <meta property="og:url" content="https://www.thepetbedco.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ThePetBedCo. — The Last Dog Bed You'll Ever Need to Buy" />
        <meta name="twitter:description" content="One premium orthopaedic base, infinite style." />
        <meta name="twitter:image" content="https://picsum.photos/seed/petbedco-og/1200/630" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What makes ThePetBedCo. different?", "acceptedAnswer": { "@type": "Answer", "text": "A modular system — one premium orthopaedic base paired with interchangeable zip-off covers. Simply swap the cover instead of buying a new bed." } },
            { "@type": "Question", "name": "How do the interchangeable covers work?", "acceptedAnswer": { "@type": "Answer", "text": "Each cover zips off and on in seconds. Machine washable and precision-fitted to the base." } },
            { "@type": "Question", "name": "When will products be available?", "acceptedAnswer": { "@type": "Answer", "text": "Launching soon. Sign up for early access to be first and receive an exclusive launch discount." } },
          ]
        })}</script>
      </Helmet>

      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <div className="hero__bg" style={{ backgroundImage: "url('https://picsum.photos/seed/dogbed-hero/1600/900')" }} role="img" aria-label="A stylish dog resting on a premium orthopaedic dog bed in a beautifully decorated living room" />
        <div className="container">
          <div className="hero__content">
            <ScrollReveal><span className="eyebrow">Designed for life at home</span></ScrollReveal>
            <ScrollReveal delay={1}>
              <h1>The last dog bed<br />you'll ever need<br /><em>to buy.</em></h1>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p>One premium orthopaedic base. Infinite style. Swap covers — not beds. ThePetBedCo. is where interior design meets dog care.</p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="hero__actions">
                <a href="#email-capture" className="btn btn-primary">Get Early Access</a>
                <Link to="/products" className="btn btn-outline">See the Collection</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">Scroll</div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="section problem-solution" aria-labelledby="problem-heading">
        <div className="container">
          <div className="problem-solution__grid">
            <ScrollReveal className="problem-solution__text">
              <span className="eyebrow">The problem with pet beds</span>
              <h2 id="problem-heading">Why do dog beds always look like dog beds?</h2>
              <p>You've redecorated. The sofa is perfect. The cushions are just right. Then there's the dog bed — faded, worn, impossible to clean, and completely at odds with everything else in the room.</p>
              <p>The average dog owner buys a new bed every 18 months. That's waste you shouldn't have to accept.</p>
              <p style={{ marginBottom: '2rem' }}><strong>We built a better system.</strong> One beautifully engineered orthopaedic base. A range of premium, zip-off covers designed for your home — not just your dog.</p>
              <Link to="/about" className="btn btn-outline">Our Story</Link>
            </ScrollReveal>
            <ScrollReveal delay={2} className="problem-solution__image">
              <img src="https://picsum.photos/seed/dogbed-living/700/600" alt="A premium modular dog bed with a linen cover sitting in a minimalist living room interior" width={700} height={600} />
              <div className="problem-solution__badge">"Finally, a dog bed that looks like it belongs."</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section bg-oat" aria-labelledby="how-heading">
        <div className="container">
          <div className="section-header">
            <ScrollReveal><span className="eyebrow">Simple by design</span></ScrollReveal>
            <ScrollReveal delay={1}><h2 id="how-heading">How it works</h2></ScrollReveal>
            <ScrollReveal delay={2}><p>The modular system is engineered for ease — stylish enough for your home, durable enough for your dog.</p></ScrollReveal>
          </div>
          <div className="steps">
            {[
              { n: '1', title: 'Choose Your Base', text: 'Select the Foundation Orthopaedic Base Bed in the size that suits your dog. Built to last a lifetime — dense foam, structured sides, and a waterproof inner liner.' },
              { n: '2', title: 'Pick a Cover', text: 'Browse our curated cover collection — from Highland Tweed to Midnight Velvet. Each cover is designed to complement real interiors, not clash with them.' },
              { n: '3', title: 'Zip, Wash, Repeat', text: 'Covers zip off in seconds. Machine wash, dry, and zip back on. Change the look with the seasons. Never buy a whole new bed again.' },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={(i + 1) as 1 | 2 | 3} className="step">
                <div className="step__number" aria-hidden="true">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT TEASER */}
      <section className="section product-teaser" aria-labelledby="teaser-heading">
        <div className="container">
          <div className="section-header">
            <ScrollReveal><span className="eyebrow">The collection</span></ScrollReveal>
            <ScrollReveal delay={1}><h2 id="teaser-heading">Covers built for your home</h2></ScrollReveal>
            <ScrollReveal delay={2}><p>A curated palette of textures and tones — designed to sit beautifully alongside your furniture.</p></ScrollReveal>
          </div>
          <div className="teaser-grid">
            {[
              { seed: 'cover-tweed', name: 'Highland Tweed', sub: 'Warm, durable, timeless', w: 600, h: 500 },
              { seed: 'cover-velvet', name: 'Midnight Velvet', sub: 'Deep, rich, sophisticated', w: 500, h: 320 },
              { seed: 'cover-linen', name: 'Linen Stone', sub: 'Natural, minimal, effortless', w: 500, h: 320 },
            ].map((card, i) => (
              <ScrollReveal key={card.seed} delay={(i + 1) as 1 | 2 | 3} className="teaser-card">
                <img src={`https://picsum.photos/seed/${card.seed}/${card.w}/${card.h}`} alt={`${card.name} dog bed cover`} width={card.w} height={card.h} />
                <div className="teaser-card__overlay">
                  <h3>{card.name}</h3>
                  <p>{card.sub}</p>
                </div>
                <span className="teaser-card__badge">Cover</span>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <ScrollReveal><Link to="/products" className="btn btn-outline-white">View All Products</Link></ScrollReveal>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <div id="email-capture">
        <EmailCapture heading="Be the first to know" eyebrow="Launch is coming" />
      </div>

      {/* TRUST SIGNALS */}
      <section className="section bg-oat" aria-labelledby="trust-heading">
        <div className="container">
          <div className="section-header">
            <ScrollReveal><span className="eyebrow">Why ThePetBedCo.</span></ScrollReveal>
            <ScrollReveal delay={1}><h2 id="trust-heading">Built differently, from the ground up</h2></ScrollReveal>
          </div>
          <div className="trust-items">
            {[
              { icon: '🛏️', title: 'Orthopaedic Support', text: 'High-density memory foam engineered for joint health and all-night comfort.' },
              { icon: '🌿', title: 'Sustainably Minded', text: 'Replace covers, not the whole bed. Dramatically less waste than traditional pet beds.' },
              { icon: '✂️', title: 'Designed in the UK', text: 'Every cover is designed with real homes in mind — curated colourways, quality fabrics.' },
              { icon: '🔄', title: 'Zip & Wash', text: 'Covers remove in seconds and are fully machine washable. Hygiene without hassle.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={(i + 1) as 1 | 2 | 3 | 4} className="trust-item">
                <div className="trust-item__icon" aria-hidden="true">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="trust-quote">
            <blockquote>"I finally have a dog bed that I'm actually proud to have in my living room. I didn't know that was possible until now."</blockquote>
            <cite>— Beta tester, London</cite>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-slate" aria-labelledby="faq-heading">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="section-header">
            <ScrollReveal><span className="eyebrow">Questions</span></ScrollReveal>
            <ScrollReveal delay={1}><h2 id="faq-heading">Frequently asked</h2></ScrollReveal>
          </div>
          {[
            { q: "What makes ThePetBedCo. different?", a: "One premium orthopaedic base paired with interchangeable zip-off covers. Simply swap the cover instead of buying a new bed." },
            { q: "How do the covers work?", a: "Each cover zips off and on in seconds. Machine washable and precision-fitted to the base." },
            { q: "When are products available?", a: "We're launching soon. Sign up for early access to be first in line and receive an exclusive launch discount." },
            { q: "Is the base truly orthopaedic?", a: "Yes. The Foundation Base Bed features high-density memory foam designed to support joint health — especially important for older dogs or breeds prone to joint issues." },
          ].map((faq, i) => (
            <ScrollReveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <details style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', boxShadow: 'var(--shadow)', marginBottom: '1.5rem' }}>
                <summary style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--moss)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.q}<span style={{ fontSize: '1.3rem', color: 'var(--terracotta)' }}>+</span>
                </summary>
                <p style={{ marginTop: '1rem', opacity: 0.8 }}>{faq.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
