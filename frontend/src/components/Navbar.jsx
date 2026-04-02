// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home',      to: '/' },
  { label: 'Services',  to: '/services' },
  { label: 'About',     to: '/about' },
  { label: 'Blog',      to: '/blog' },
  { label: 'Contact',   to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav style={{ background: '#fff', borderBottom: '2px solid #87CEEB', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(135,206,235,0.2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 42, height: 42, background: 'linear-gradient(135deg,#87CEEB,#90EE90)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🦷</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1rem', fontWeight: 700, color: '#2a7aad', lineHeight: 1.2 }}>Srivenkateshwara Dental Hospital</div>
            <div style={{ fontSize: '0.7rem', color: '#6b8a6b', fontWeight: 500 }}>Kamareddy, Telangana</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to}
              style={{
                padding: '0.4rem 0.85rem', color: pathname === l.to ? '#2a7aad' : '#3a5a3a',
                fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none',
                borderRadius: 8, background: pathname === l.to ? '#e8f4ff' : 'transparent',
                transition: 'all 0.15s',
              }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact"
            style={{ padding: '0.4rem 1.2rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '0.88rem', borderRadius: 20, textDecoration: 'none', marginLeft: 4 }}>
            📅 Book Now
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)} className="md:hidden" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[0,1,2].map(i => <span key={i} style={{ width: 24, height: 2, background: '#2a7aad', display: 'block', transition: '0.3s' }} />)}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ borderTop: '1px solid #e8f4ff', background: '#fff', padding: '1rem 1.5rem' }}>
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '0.7rem 0', color: '#3a5a3a', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid #f4f4f4' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}
            style={{ display: 'block', marginTop: '0.7rem', padding: '0.7rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, textDecoration: 'none', borderRadius: 12, textAlign: 'center' }}>
            📅 Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}
