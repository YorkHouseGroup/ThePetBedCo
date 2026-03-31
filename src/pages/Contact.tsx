import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import EmailCapture from '../components/EmailCapture';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Helmet>
        <title>Contact — ThePetBedCo. | Get in Touch</title>
        <meta name="description" content="Get in touch with ThePetBedCo. — whether you're a customer, press, collaborator, or investor, we'd love to hear from you." />
        <link rel="canonical" href="https://www.thepetbedco.com/contact" />
        <meta property="og:title" content="Contact — ThePetBedCo." />
        <meta property="og:description" content="Get in touch with the team behind ThePetBedCo." />
        <meta property="og:image" content="https://picsum.photos/seed/petbedco-contact-og/1200/630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="contact-hero-heading">
        <div className="container">
          <ScrollReveal><span className="eyebrow">We'd love to hear from you</span></ScrollReveal>
          <ScrollReveal delay={1}><h1 id="contact-hero-heading">Get in touch</h1></ScrollReveal>
          <ScrollReveal delay={2}><p>Whether you're a customer, a press contact, a potential collaborator, or an investor — our inbox is open.</p></ScrollReveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section bg-oat" aria-label="Contact information and form">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <ScrollReveal className="contact-info">
              <span className="eyebrow">How to reach us</span>
              <h2>Let's talk</h2>
              <p>We're a small team and we read every message personally. We typically respond within 1–2 business days.</p>

              {[
                { icon: '✉️', label: 'Email', value: 'hello@thepetbedco.com', href: 'mailto:hello@thepetbedco.com' },
                { icon: '💼', label: 'Investor Enquiries', value: 'invest@thepetbedco.com', href: 'mailto:invest@thepetbedco.com' },
                { icon: '📰', label: 'Press & Media', value: 'press@thepetbedco.com', href: 'mailto:press@thepetbedco.com' },
                { icon: '📍', label: 'Based in', value: 'United Kingdom', href: undefined },
              ].map(d => (
                <div className="contact-detail" key={d.label}>
                  <div className="contact-detail__icon" aria-hidden="true">{d.icon}</div>
                  <div className="contact-detail__text">
                    <strong>{d.label}</strong>
                    {d.href ? <a href={d.href}>{d.value}</a> : <span>{d.value}</span>}
                  </div>
                </div>
              ))}

              <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1rem' }}>Follow us</h3>
              <div className="contact-social">
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="TikTok">♫</a>
                <a href="#" aria-label="Facebook">👤</a>
              </div>

              <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--slate)', borderRadius: '12px', borderLeft: '3px solid var(--terracotta)' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Are you an investor?</h4>
                <p style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '1rem' }}>We're exploring early-stage investment opportunities. Visit our investor page for more.</p>
                <Link to="/invest" className="btn btn-outline btn-sm">View Investor Page</Link>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={2} className="contact-form-wrapper">
              <h3>Send us a message</h3>
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="first-name">First Name</label>
                      <input type="text" id="first-name" name="first-name" placeholder="Jane" required autoComplete="given-name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last-name">Last Name</label>
                      <input type="text" id="last-name" name="last-name" placeholder="Smith" required autoComplete="family-name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="jane@example.com" required autoComplete="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject">
                      <option value="">Select a topic…</option>
                      <option value="general">General Enquiry</option>
                      <option value="products">Product / Pre-order</option>
                      <option value="invest">Investment Opportunity</option>
                      <option value="press">Press &amp; Media</option>
                      <option value="collab">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us what's on your mind…" required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                  <p style={{ fontSize: '0.75rem', marginTop: '1rem', opacity: 0.5, textAlign: 'center' }}>We'll get back to you within 1–2 business days.</p>
                </form>
              ) : (
                <div className="form-success">
                  <div className="checkmark" aria-hidden="true">✓</div>
                  <h3>Message received!</h3>
                  <p>Thanks for reaching out. We'll be back in touch within 1–2 business days.</p>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <EmailCapture heading="Sign up for launch updates" eyebrow="Before you go" buttonLabel="Sign Me Up" subtext="Be the first to know when we go live — no spam, just the good stuff." />
    </>
  );
}
