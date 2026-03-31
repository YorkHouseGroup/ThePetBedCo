import { useState, type FormEvent } from 'react';
import ScrollReveal from './ScrollReveal';

interface Props {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  buttonLabel?: string;
}

export default function EmailCapture({
  eyebrow = 'Launch is coming',
  heading,
  subtext = 'Sign up for early access — get notified on launch day and receive an exclusive founding member discount.',
  buttonLabel = 'Get Early Access',
}: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section email-capture">
      <div className="container">
        <div className="email-capture__inner">
          <ScrollReveal>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{heading}</h2>
            <p>{subtext}</p>
            {!submitted ? (
              <form className="email-form" onSubmit={handleSubmit} noValidate>
                <input type="email" placeholder="Your email address" required aria-label="Email address" />
                <button type="submit" className="btn btn-primary">{buttonLabel}</button>
              </form>
            ) : (
              <div className="email-thanks" role="status">You're on the list — we'll be in touch soon. ✦</div>
            )}
            <p style={{ fontSize: '0.75rem', marginTop: '1rem', opacity: 0.5 }}>No spam, ever. Unsubscribe at any time.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
