import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  function close() { setMenuOpen(false); }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container nav__inner">
          <Link to="/" className="nav__logo" onClick={close}>ThePetBedCo<span>.</span></Link>
          <div className="nav__links">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/invest" className={({ isActive }) => isActive ? 'active' : ''}>Invest</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
          </div>
          <Link to="/products" className="btn btn-primary btn-sm nav__cta" onClick={close}>Early Access</Link>
          <button
            className={`nav__hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav__mobile${menuOpen ? ' open' : ''}`} role="dialog" aria-modal aria-label="Mobile navigation">
        <Link to="/" onClick={close}>Home</Link>
        <Link to="/products" onClick={close}>Products</Link>
        <Link to="/about" onClick={close}>About</Link>
        <Link to="/invest" onClick={close}>Invest</Link>
        <Link to="/contact" onClick={close}>Contact</Link>
        <Link to="/products" className="btn btn-primary" onClick={close}>Early Access</Link>
      </div>
    </>
  );
}
