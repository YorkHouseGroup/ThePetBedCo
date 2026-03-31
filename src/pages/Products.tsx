import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import EmailCapture from '../components/EmailCapture';
import NotifyModal from '../components/NotifyModal';

type Category = 'all' | 'base' | 'cover';

interface Product {
  id: string;
  name: string;
  desc: string;
  seed: string;
  category: 'base' | 'cover';
  featured?: boolean;
  badgeLabel?: string;
}

const PRODUCTS: Product[] = [
  { id: 'base', name: 'The Foundation Orthopaedic Base Bed', desc: 'The bed built to last a lifetime. High-density memory foam, structured bolster sides, waterproof inner liner, and a universal zip system designed to work with every cover. Available in three sizes.', seed: 'basebed-feature', category: 'base', featured: true, badgeLabel: 'The Original' },
  { id: 'tweed', name: 'Highland Tweed Cover', desc: 'Woven in warm rust, oat, and forest tones. A heritage fabric that brings texture and warmth to any interior.', seed: 'cover-tweed-p', category: 'cover' },
  { id: 'linen', name: 'Linen Stone Cover', desc: 'Undyed, natural linen in a cool stone tone. Effortlessly minimal — built for the Scandi-modern home.', seed: 'cover-linen-p', category: 'cover' },
  { id: 'velvet', name: 'Midnight Velvet Cover', desc: 'Deep navy velvet — luxurious to the touch and rich in tone. Ideal for statement living rooms.', seed: 'cover-velvet-p', category: 'cover' },
  { id: 'boucle', name: 'Sage Bouclé Cover', desc: 'Textured bouclé in a muted sage green. The on-trend choice that complements terracotta, oak, and earthy palettes.', seed: 'cover-boucle', category: 'cover' },
  { id: 'herring', name: 'Blush Herringbone Cover', desc: 'A classic herringbone weave in soft blush tones. Feminine without being fussy — perfect for bright, airy spaces.', seed: 'cover-herring', category: 'cover' },
  { id: 'canvas', name: 'Charcoal Canvas Cover', desc: 'Heavy-weight washed canvas in deep charcoal. Tough, casual, and impossibly easy to style — works everywhere.', seed: 'cover-canvas', category: 'cover' },
];

export default function Products() {
  const [filter, setFilter] = useState<Category>('all');
  const [modalProduct, setModalProduct] = useState<string | null>(null);

  const visible = PRODUCTS.filter(p => filter === 'all' || p.category === filter);
  const featured = visible.find(p => p.featured);
  const grid = visible.filter(p => !p.featured);

  return (
    <>
      <Helmet>
        <title>Products — ThePetBedCo. | Modular Dog Beds &amp; Interchangeable Covers</title>
        <meta name="description" content="Browse ThePetBedCo.'s modular dog bed collection — the orthopaedic Foundation Base Bed and interchangeable zip-off covers in premium fabrics. Coming soon." />
        <link rel="canonical" href="https://www.thepetbedco.com/products" />
        <meta property="og:title" content="Products — ThePetBedCo." />
        <meta property="og:description" content="One orthopaedic base, infinite style. Premium covers in tweed, velvet, linen and more. Coming soon." />
        <meta property="og:image" content="https://picsum.photos/seed/petbedco-products-og/1200/630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="products-heading">
        <div className="container">
          <ScrollReveal><span className="eyebrow">The collection</span></ScrollReveal>
          <ScrollReveal delay={1}><h1 id="products-heading">One base. Endless style.</h1></ScrollReveal>
          <ScrollReveal delay={2}><p>The Foundation Orthopaedic Base Bed paired with interchangeable covers — designed to live beautifully in your home.</p></ScrollReveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section bg-oat" aria-label="Product listings">
        <div className="container">
          <div className="filter-bar">
            {(['all', 'base', 'cover'] as Category[]).map(cat => (
              <button key={cat} className={`filter-btn${filter === cat ? ' active' : ''}`} onClick={() => setFilter(cat)}>
                {cat === 'all' ? 'All Products' : cat === 'base' ? 'Base Bed' : 'Covers'}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {featured && (
              <article className="product-card product-card--featured reveal visible" aria-label={featured.name}>
                <div className="product-card__image">
                  <img src={`https://picsum.photos/seed/${featured.seed}/800/600`} alt={`${featured.name} — premium orthopaedic dog bed`} width={800} height={600} />
                  {featured.badgeLabel && <span className="product-card__badge product-card__badge--new">{featured.badgeLabel}</span>}
                </div>
                <div className="product-card__body">
                  <span className="eyebrow">Foundation</span>
                  <h2>{featured.name}</h2>
                  <p>{featured.desc}</p>
                  <span className="coming-soon-badge">Coming Soon</span>
                  <div className="product-card__actions">
                    <button className="btn btn-primary" onClick={() => setModalProduct(featured.name)}>Notify Me</button>
                    <Link to="#how-it-works" className="btn btn-outline">Learn More</Link>
                  </div>
                </div>
              </article>
            )}

            {grid.map((p, i) => (
              <ScrollReveal key={p.id} delay={((i % 3) + 1) as 1 | 2 | 3} className="product-card">
                <div className="product-card__image">
                  <img src={`https://picsum.photos/seed/${p.seed}/600/400`} alt={`${p.name} — interchangeable dog bed cover`} width={600} height={400} />
                  <span className="product-card__badge">Cover</span>
                </div>
                <div className="product-card__body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <span className="coming-soon-badge">Coming Soon</span>
                  <div className="product-card__actions">
                    <button className="btn btn-primary btn-sm" onClick={() => setModalProduct(p.name)}>Notify Me</button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section bg-slate" id="how-it-works" aria-labelledby="hiw-heading">
        <div className="container">
          <div className="section-header">
            <ScrollReveal><span className="eyebrow">The system</span></ScrollReveal>
            <ScrollReveal delay={1}><h2 id="hiw-heading">How the modular system works</h2></ScrollReveal>
            <ScrollReveal delay={2}><p>One base, infinite covers. Designed to fit together perfectly — every time.</p></ScrollReveal>
          </div>
          <div className="steps">
            {[
              { n: '1', t: 'The Base', p: 'The Foundation Base is your one-time investment. Dense memory foam, bolster sides, and a universal zip trim — available in S, M, and L.' },
              { n: '2', t: 'The Cover', p: 'Choose from our growing collection. Each cover is precision-cut to fit the base, with a robust zip that stays secure through daily use.' },
              { n: '3', t: 'The Swap', p: 'Unzip, remove, wash, and replace in under a minute. New season, new cover. No new bed required.' },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={(i + 1) as 1 | 2 | 3} className="step">
                <div className="step__number">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <EmailCapture heading="Get notified at launch" eyebrow="Join the waitlist" buttonLabel="Notify Me" subtext="Sign up and we'll let you know the moment we go live — plus an exclusive early access discount." />

      {modalProduct && <NotifyModal productName={modalProduct} onClose={() => setModalProduct(null)} />}
    </>
  );
}
