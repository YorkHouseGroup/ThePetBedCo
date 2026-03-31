import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">ThePetBedCo<span>.</span></Link>
            <p>The last dog bed you'll ever need to buy. Premium, modular, sustainable — designed for your home.</p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram" title="Instagram">📷</a>
              <a href="#" aria-label="TikTok" title="TikTok">♫</a>
              <a href="#" aria-label="Facebook" title="Facebook">👤</a>
            </div>
          </div>
          <div className="footer__col">
            <h5>Navigate</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/invest">Invest</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/invest">Investors</Link></li>
              <li><Link to="/contact">Press</Link></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Stay in the loop</h5>
            <div className="footer__email-form">
              <p>Get launch updates and exclusive offers.</p>
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <input type="email" placeholder="Your email address" required aria-label="Email address" />
                  <button type="submit" className="btn btn-primary btn-sm" style={{ marginTop: '0.75rem' }}>Subscribe</button>
                </form>
              ) : (
                <p style={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>Thanks — we'll be in touch! ✦</p>
              )}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2025 ThePetBedCo. All rights reserved.</span>
          <span>Designed with care, in the UK.</span>
        </div>
      </div>
    </footer>
  );
}
