// src/components/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#0f1e0f', color: '#80a880', padding: '3rem 1.5rem 1.5rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '2rem', marginBottom: '2.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#87CEEB,#90EE90)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🦷</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '0.95rem', fontWeight: 700, color: '#90EE90' }}>Srivenkateshwara Dental Hospital</div>
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.8, marginBottom: '0.8rem' }}>Trusted multispeciality dental & cosmetic clinic in Ashok Nagar, Vidya Nagar Colony, Kamareddy, Telangana.</p>
            <div style={{ fontSize: '0.78rem' }}>📍 Ashok Nagar, Kamareddy 503111<br/>📞 +91-XXXXX-XXXXX<br/>⏰ Mon–Sat 9AM–8PM | Sun 10AM–3PM</div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#90EE90', fontFamily: "'Playfair Display',serif", marginBottom: '1rem', fontSize: '0.95rem' }}>Services</h4>
            {['Root Canal Kamareddy','Teeth Whitening','Dental Implants','Orthodontics','Cosmetic Dentistry','Paediatric Dentistry','Oral Surgery'].map(s => (
              <Link key={s} to="/services" style={{ display: 'block', color: '#80a880', fontSize: '0.82rem', marginBottom: '0.45rem', textDecoration: 'none' }}>{s}</Link>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#90EE90', fontFamily: "'Playfair Display',serif", marginBottom: '1rem', fontSize: '0.95rem' }}>Quick Links</h4>
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Blog', to: '/blog' },
              { label: 'Contact Us', to: '/contact' },
              { label: 'Dentist in Kamareddy', to: '/dentist-kamareddy' },
              { label: 'Book Appointment', to: '/contact' },
              { label: 'Admin Login', to: '/admin/login' },
            ].map(l => (
              <Link key={l.to} to={l.to} style={{ display: 'block', color: '#80a880', fontSize: '0.82rem', marginBottom: '0.45rem', textDecoration: 'none' }}>{l.label}</Link>
            ))}
          </div>

          {/* SEO Keywords Block */}
          <div>
            <h4 style={{ color: '#90EE90', fontFamily: "'Playfair Display',serif", marginBottom: '1rem', fontSize: '0.95rem' }}>Find Us</h4>
            <p style={{ fontSize: '0.78rem', lineHeight: 1.9 }}>
              Best Dental Clinic Kamareddy<br/>
              Dentist in Kamareddy Telangana<br/>
              Root Canal Kamareddy<br/>
              Teeth Whitening Kamareddy<br/>
              Dental Implants Kamareddy<br/>
              Orthodontist Kamareddy
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1a3a1a', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', fontSize: '0.75rem', color: '#4a7a4a' }}>
          <span>© {new Date().getFullYear()} Srivenkateshwara Dental Hospital, Kamareddy. All rights reserved.</span>
          <span>Best Dental Clinic in Kamareddy | Ashok Nagar, Telangana</span>
        </div>
      </div>
    </footer>
  );
}
