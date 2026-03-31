import { useState, useEffect, type FormEvent } from 'react';

interface Props {
  productName: string;
  onClose: () => void;
}

export default function NotifyModal({ productName, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal aria-labelledby="modal-title">
      <div className="modal">
        <button className="modal__close" onClick={onClose} aria-label="Close modal">✕</button>
        {!submitted ? (
          <>
            <h3 id="modal-title">Be the first to know</h3>
            <p>We'll notify you the moment <strong>{productName}</strong> is available — plus an exclusive early access offer.</p>
            <form className="email-form" onSubmit={handleSubmit} noValidate style={{ flexDirection: 'column', gap: '0.75rem' }}>
              <input type="email" placeholder="Your email address" required aria-label="Email address" style={{ width: '100%' }} />
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Notify Me</button>
            </form>
            <p style={{ fontSize: '0.75rem', marginTop: '0.75rem', opacity: 0.5, textAlign: 'center' }}>No spam, ever.</p>
          </>
        ) : (
          <div className="modal__thanks">
            <div className="checkmark" aria-hidden="true">✓</div>
            <h3>You're on the list!</h3>
            <p>We'll reach out the moment it's available.</p>
          </div>
        )}
      </div>
    </div>
  );
}
