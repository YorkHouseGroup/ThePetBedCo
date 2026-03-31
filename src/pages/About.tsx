import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import EmailCapture from '../components/EmailCapture';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — ThePetBedCo. | Our Story, Mission &amp; Values</title>
        <meta name="description" content="ThePetBedCo. was born from a simple frustration: why do dog beds have to be ugly? Discover our brand story, sustainability mission, and the vision behind the modular dog bed system." />
        <link rel="canonical" href="https://www.thepetbedco.com/about" />
        <meta property="og:title" content="About Us — ThePetBedCo." />
        <meta property="og:description" content="Born from a simple frustration. Built with purpose." />
        <meta property="og:image" content="https://picsum.photos/seed/petbedco-about-og/1200/630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* HERO */}
      <section className="about-hero" aria-labelledby="about-hero-heading">
        <div className="about-hero__bg" style={{ backgroundImage: "url('https://picsum.photos/seed/about-hero/1600/900')" }} role="img" aria-label="Warm interior with dog resting by a fireplace" />
        <div className="container">
          <div className="about-hero__content">
            <ScrollReveal><span className="eyebrow">Our story</span></ScrollReveal>
            <ScrollReveal delay={1}><h1 id="about-hero-heading">We built this for our dogs — and for our homes.</h1></ScrollReveal>
            <ScrollReveal delay={2}><p>ThePetBedCo. started with a simple question: why should you have to choose between what's good for your dog and what looks good in your home?</p></ScrollReveal>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="section bg-oat" aria-labelledby="story-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <ScrollReveal>
              <span className="eyebrow">Where it began</span>
              <h2 id="story-heading">The frustration that started everything</h2>
              <p>Like most dog owners, we bought bed after bed — each one worn, faded, or falling apart within a year. We'd upgraded every corner of our home, but the dog bed remained stubbornly, embarrassingly, a dog bed.</p>
              <p style={{ marginTop: '1rem' }}>The breaking point came when we redecorated our living room. The new sofa was perfect. The cushions were exactly right. Then we looked at the dog bed in the corner and realised: there's no version of this that works.</p>
              <p style={{ marginTop: '1rem' }}>We looked for something better and found nothing. So we built it.</p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <img src="https://picsum.photos/seed/story-image/700/500" alt="A dog lying contentedly on a stylish modular dog bed in a modern kitchen interior" width={700} height={500} style={{ borderRadius: '12px', width: '100%', objectFit: 'cover' }} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section bg-moss" aria-labelledby="mission-heading">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <ScrollReveal><span className="eyebrow" style={{ color: 'var(--terracotta)' }}>Our mission</span></ScrollReveal>
          <ScrollReveal delay={1}><h2 id="mission-heading" style={{ color: 'var(--white)', fontSize: 'clamp(1.8rem,4vw,3rem)', lineHeight: 1.3 }}>To make the last dog bed<br />you'll ever need to buy.</h2></ScrollReveal>
          <ScrollReveal delay={2}><p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginTop: '1.5rem', maxWidth: '640px', margin: '1.5rem auto 0' }}>We believe the pet industry needs to change. Too much waste, too little design intention, and a complete disregard for the homes these products live in. We're here to fix that — one beautiful, lasting bed at a time.</p></ScrollReveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-oat" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-header">
            <ScrollReveal><span className="eyebrow">What we stand for</span></ScrollReveal>
            <ScrollReveal delay={1}><h2 id="values-heading">Our values</h2></ScrollReveal>
            <ScrollReveal delay={2}><p>Three principles that guide every decision we make — from design to delivery.</p></ScrollReveal>
          </div>
          <div className="values">
            {[
              { title: 'Sustainability First', text: 'The modular system exists because we believe the "buy and replace" cycle is broken. By separating the base from the cover, we dramatically reduce waste created by the pet bedding industry.' },
              { title: 'Design with Intention', text: 'Every cover begins with a single question: does this belong in a beautiful home? We look at interior trends and fabric houses — not pet shop catalogues.' },
              { title: 'Uncompromising Quality', text: 'Your dog deserves support, not stuffing. Our orthopaedic base uses high-density memory foam designed for long-term joint health. We make things that last — because that\'s the entire point.' },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={(i + 1) as 1 | 2 | 3} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section bg-slate" aria-labelledby="founder-heading">
        <div className="container">
          <div className="founder-grid">
            <ScrollReveal className="founder-image">
              <img src="https://picsum.photos/seed/founder-portrait/600/700" alt="Founder of ThePetBedCo. photographed in a bright home studio" width={600} height={700} />
            </ScrollReveal>
            <ScrollReveal delay={2} className="founder-text">
              <span className="eyebrow">The founder</span>
              <h2 id="founder-heading">Built by a dog person,<br />designed for real homes.</h2>
              <span className="founder-role">Founder &amp; Creative Director, ThePetBedCo.</span>
              <p>ThePetBedCo. was founded with one deeply personal goal: to create something I was actually proud to have in my living room. I'm a lifelong dog owner, a home design obsessive, and someone who refused to believe the two had to conflict.</p>
              <p>After years working in product design, I became convinced that the pet industry's approach to home products was fundamentally flawed. Beautiful things shouldn't need to be hidden away. And buying a new bed every eighteen months shouldn't be the expected norm.</p>
              <blockquote>"I didn't want to build a pet company. I wanted to build a home brand that happened to be for dogs."</blockquote>
              <p>The modular system is the result of that conviction — and I can't wait to see it in your home.</p>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>Get in Touch</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <EmailCapture heading="Follow our journey" eyebrow="Stay connected" buttonLabel="Keep Me Posted" subtext="Sign up for launch updates, behind-the-scenes content, and exclusive founding member access." />
    </>
  );
}
