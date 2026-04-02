// src/pages/HomePage.jsx — Full homepage
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import AppointmentForm from '../components/AppointmentForm';

const SERVICES = [
  { icon: '🦷', name: 'Dental Cleaning', slug: 'teeth-cleaning-kamareddy', desc: 'Professional scaling & polishing. Removes tartar, prevents gum disease. Recommended every 6 months.' },
  { icon: '🔬', name: 'Root Canal', slug: 'root-canal-kamareddy', desc: 'Pain-free RCT with rotary endodontics. Relieves severe toothache and saves your natural tooth.' },
  { icon: '✨', name: 'Teeth Whitening', slug: 'teeth-whitening-kamareddy', desc: 'Up to 8 shades brighter in a single visit. Safe professional bleaching for a confident smile.' },
  { icon: '🪥', name: 'Dental Implants', slug: 'dental-implants-kamareddy', desc: 'Permanent tooth replacement. Looks, feels, and functions exactly like natural teeth.' },
  { icon: '😁', name: 'Cosmetic Dentistry', slug: 'cosmetic-dentistry-kamareddy', desc: 'Veneers, bonding, smile makeovers. Transform your smile with precision aesthetic treatments.' },
  { icon: '🦴', name: 'Orthodontics', slug: 'orthodontics-kamareddy', desc: 'Traditional braces & clear aligners for children and adults. Achieve perfectly aligned teeth.' },
  { icon: '🧒', name: 'Paediatric Dentistry', slug: 'paediatric-dentistry-kamareddy', desc: 'Gentle, child-friendly care. Making dentistry fun for kids from their very first visit.' },
  { icon: '🩺', name: 'Oral Surgery', slug: 'oral-surgery-kamareddy', desc: 'Wisdom tooth removal, extractions & surgical procedures with expert care and comfort.' },
];

const TESTIMONIALS = [
  { text: 'Exceptional service! The root canal was completely painless. Highly recommend Srivenkateshwara Dental Hospital to everyone in Kamareddy.', author: 'Ramesh Kumar', loc: 'Kamareddy', color: '#87CEEB', initials: 'RK' },
  { text: 'Got my teeth whitening done here. Fantastic results — my smile has never looked better! Staff is very professional and friendly.', author: 'Priya Sharma', loc: 'Ashok Nagar, Kamareddy', color: '#90EE90', initials: 'PS' },
  { text: "My daughter's braces treatment was excellent. The doctor is very patient with kids. The clinic is spotlessly clean and well-equipped.", author: 'Suresh Reddy', loc: 'Vidya Nagar Colony', color: '#f4b942', initials: 'SR' },
  { text: 'Outstanding dental implant experience. Six months later it feels completely natural. Undoubtedly the best dental clinic in Kamareddy!', author: 'Lakshmi Devi', loc: 'Kamareddy', color: '#e897b0', initials: 'LD' },
  { text: 'Had a dental emergency and they accommodated me right away. Quick diagnosis, gentle treatment. Really grateful for the care.', author: 'Anil Naik', loc: 'Kamareddy Town', color: '#a0a8e8', initials: 'AN' },
  { text: 'The AI chat on their website helped me understand my symptoms. The consultation confirmed exactly what I suspected. Great experience!', author: 'Meena Prasad', loc: 'Kamareddy', color: '#90EE90', initials: 'MP' },
];

const FAQS = [
  { q: 'Who is the best dentist in Kamareddy?', a: 'Srivenkateshwara Dental Hospital in Ashok Nagar is recognised as the top multispeciality dental clinic in Kamareddy, Telangana, offering advanced treatments across all dental specialities.' },
  { q: 'Is there a dental clinic near me open in Kamareddy?', a: 'Yes! We are at Ashok Nagar, Vidya Nagar Colony, Kamareddy. Open Mon–Sat 9AM–8PM, Sunday 10AM–3PM. Emergency care available 24/7.' },
  { q: 'How much does a root canal cost in Kamareddy?', a: 'Root canal treatment is affordable and competitively priced at our clinic. The exact cost depends on the tooth and complexity. Contact us for a transparent, no-hidden-charges quote.' },
  { q: 'Is teeth whitening safe? How long does it last?', a: 'Professional whitening done by certified dentists is completely safe. Results last 1–3 years with proper care. We use advanced bleaching agents for best, even results.' },
  { q: 'Do you provide dental implants in Kamareddy?', a: 'Yes! We are one of the few clinics in Kamareddy with premium implants and a high success rate. The procedure is comfortable and creates a permanent, natural-looking result.' },
  { q: 'What should I do in a dental emergency in Kamareddy?', a: 'Call us immediately on our emergency number. We accommodate urgent cases as fast as possible. For severe pain, swelling, or a knocked-out tooth, do not delay — contact us right away.' },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid rgba(135,206,235,0.4)', borderRadius: 8, overflow: 'hidden', marginBottom: 8 }}>
      <div onClick={() => setOpen(o => !o)} style={{ padding: '1rem 1.2rem', fontWeight: 700, color: open ? '#2a7aad' : '#1a2e1a', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: open ? 'linear-gradient(135deg,#f0f8ff,#f0fff0)' : '#fff', transition: 'all 0.2s', fontSize: '0.92rem' }}>
        {q}<span style={{ transition: 'transform 0.25s', transform: open ? 'rotate(180deg)' : 'none', color: '#2a7aad' }}>▼</span>
      </div>
      {open && <div style={{ padding: '0.8rem 1.2rem 1rem', color: '#3a5a3a', fontSize: '0.88rem', lineHeight: 1.7, borderTop: '1px solid rgba(135,206,235,0.2)' }}>{a}</div>}
    </div>
  );
}

import { useState } from 'react';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Best Dental Clinic in Kamareddy"
        description="Top dentist in Kamareddy for root canal, teeth whitening, dental implants & cosmetic dentistry. Book appointment at Srivenkateshwara Dental Hospital, Ashok Nagar, Kamareddy."
        canonical="/"
      />
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg,#e8f8ff 0%,#f0fff0 50%,#fffef0 100%)', minHeight: '88vh', display: 'flex', alignItems: 'center', padding: '3rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '3rem', alignItems: 'center', width: '100%' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FFFACD', border: '1px solid #e8d84a', borderRadius: 20, padding: '0.3rem 0.9rem', fontSize: '0.78rem', fontWeight: 700, color: '#8a7200', marginBottom: '1rem' }}>⭐ #1 Dental Clinic in Kamareddy</div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#2a7aad', lineHeight: 1.2, marginBottom: '1rem' }}>
              Best <span style={{ color: '#3a8a3a' }}>Dentist</span> in Kamareddy<br />— Your Smile, Our Mission
            </h1>
            <p style={{ color: '#3a5a3a', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: 480, lineHeight: 1.7 }}>
              Srivenkateshwara Dental Hospital offers world-class multispeciality dental & cosmetic care at Ashok Nagar, Kamareddy. Advanced technology. Experienced doctors. Affordable prices.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ padding: '0.75rem 1.8rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '0.95rem', borderRadius: 25, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>📅 Book Appointment</Link>
              <Link to="/services" style={{ padding: '0.75rem 1.8rem', background: 'transparent', color: '#2a7aad', fontWeight: 700, fontSize: '0.95rem', borderRadius: 25, textDecoration: 'none', border: '2px solid #87CEEB', display: 'inline-flex', alignItems: 'center', gap: 6 }}>Explore Services →</Link>
            </div>
            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              {[['5000+','Happy Patients'],['15+','Years Experience'],['8','Specialities'],['4.9★','Google Rating']].map(([n,l]) => (
                <div key={l} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', fontWeight: 700, color: '#3a8a3a' }}>{n}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b8a6b', fontWeight: 600 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', borderRadius: 20, padding: '2rem', boxShadow: '0 4px 24px rgba(0,80,0,0.09)', border: '1px solid rgba(135,206,235,0.3)' }}>
            <div style={{ background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)', borderRadius: 16, padding: '2rem', textAlign: 'center', marginBottom: '1rem' }}>
              <div style={{ fontSize: '4rem' }}>🦷</div>
              <p style={{ fontFamily: "'Playfair Display',serif", color: '#2a7aad', fontWeight: 700, fontSize: '1.1rem', margin: '0.5rem 0 0.2rem' }}>Srivenkateshwara Dental Hospital</p>
              <p style={{ fontSize: '0.8rem', color: '#6b8a6b' }}>📍 Ashok Nagar, Kamareddy</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {['Root Canal','Implants','Whitening','Cleaning','Orthodontics','Cosmetic'].map(s => (
                <div key={s} style={{ background: 'linear-gradient(135deg,#e8fff0,#d0f0d0)', borderRadius: 10, padding: '0.65rem 0.8rem', fontSize: '0.8rem', fontWeight: 600, color: '#3a8a3a', display: 'flex', alignItems: 'center', gap: 5 }}>✓ {s}</div>
              ))}
            </div>
            <div style={{ marginTop: '1rem', padding: '0.8rem', background: '#FFFACD', borderRadius: 10, fontSize: '0.82rem', fontWeight: 600, color: '#8a7200', textAlign: 'center' }}>
              📞 Free Consultation Available
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: '5rem 1.5rem', background: 'linear-gradient(180deg,#fff,#f0fff0)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={sectionLabel}>Our Services</div>
          <h2 style={sectionTitle}>Comprehensive <span style={{ color: '#2a7aad' }}>Dental Care</span> in Kamareddy</h2>
          <p style={sectionSub}>From routine cleaning to complex implants — all specialities under one roof at Ashok Nagar, Kamareddy.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {SERVICES.map(s => (
              <Link to={`/services/${s.slug}`} key={s.slug} style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,80,0,0.08)', border: '1px solid rgba(144,238,144,0.3)', textDecoration: 'none', textAlign: 'center', transition: 'transform 0.2s, box-shadow 0.2s', display: 'block' }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(0,120,0,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 2px 12px rgba(0,80,0,0.08)'; }}>
                <div style={{ width: 60, height: 60, background: 'linear-gradient(135deg,#87CEEB,#b0e8ff)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto 1rem' }}>{s.icon}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.05rem', fontWeight: 600, color: '#1a2e1a', marginBottom: '0.4rem' }}>{s.name}</div>
                <div style={{ fontSize: '0.82rem', color: '#6b8a6b', lineHeight: 1.5 }}>{s.desc}</div>
                <div style={{ marginTop: '0.8rem', fontSize: '0.8rem', fontWeight: 700, color: '#3a8a3a' }}>Learn More →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={sectionLabel}>About Us</div>
            <h2 style={sectionTitle}>Kamareddy's Most <span style={{ color: '#2a7aad' }}>Trusted</span> Dental Hospital</h2>
            <p style={{ color: '#3a5a3a', marginBottom: '1.2rem', lineHeight: 1.7 }}>Located in Ashok Nagar, Vidya Nagar Colony, Kamareddy, Srivenkateshwara Dental Hospital has served the region with compassionate, affordable, and advanced dental care for over 15 years.</p>
            <p style={{ color: '#3a5a3a', marginBottom: '2rem', lineHeight: 1.7 }}>Our multispeciality team uses the latest technology — digital X-rays, laser dentistry, CAD/CAM crowns — to deliver world-class care in Kamareddy, Telangana.</p>
            {[['🏥','State-of-the-Art Facility','Modern equipment: digital X-rays, laser treatment & CAD/CAM'],['👨‍⚕️','Experienced Specialists','Qualified dentists across all specialities for comprehensive care'],['💊','Pain-Free Dentistry','Advanced anesthesia & gentle techniques for comfortable treatment'],['💰','Affordable Pricing','Transparent pricing, EMI options & plans for every budget']].map(([icon,title,desc]) => (
              <div key={title} style={{ display: 'flex', gap: '0.9rem', padding: '0.9rem', borderRadius: 8, background: '#f8fffa', borderLeft: '3px solid #90EE90', marginBottom: '0.7rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#1a2e1a', fontSize: '0.9rem' }}>{title}</div>
                  <div style={{ fontSize: '0.82rem', color: '#6b8a6b' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: 'linear-gradient(135deg,#e0f7e0,#d0eeff)', borderRadius: 20, padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🏥</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", color: '#2a7aad', marginBottom: '0.5rem' }}>Srivenkateshwara Dental Hospital</h3>
            <p style={{ color: '#3a5a3a', fontSize: '0.88rem', marginBottom: '1.5rem' }}>Ashok Nagar, Vidya Nagar Colony<br />Kamareddy, Telangana 503111</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: '1.5rem' }}>
              {['ISO Certified','IDA Member','15+ Years','Multispeciality','5000+ Patients','Kamareddy #1'].map((b, i) => (
                <span key={b} style={{ padding: '0.3rem 0.9rem', borderRadius: 20, fontSize: '0.78rem', fontWeight: 700, background: i%2===0?'#90EE90':'#87CEEB', color: i%2===0?'#3a8a3a':'#2a7aad' }}>{b}</span>
              ))}
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '1rem', fontSize: '0.85rem', color: '#3a5a3a' }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>📅 Working Hours</div>
              Mon–Sat: 9:00 AM – 8:00 PM<br />Sunday: 10:00 AM – 3:00 PM<br />
              <span style={{ color: '#3a8a3a', fontWeight: 700 }}>Emergency: 24/7 Available</span>
            </div>
            <Link to="/about" style={{ display: 'inline-block', marginTop: '1.2rem', padding: '0.6rem 1.4rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, borderRadius: 20, textDecoration: 'none', fontSize: '0.88rem' }}>Learn More About Us →</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(135deg,#f0fff0,#e8f8ff)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={sectionLabel}>Patient Stories</div>
          <h2 style={sectionTitle}>What Kamareddy Patients <span style={{ color: '#2a7aad' }}>Say About Us</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '1.8rem', boxShadow: '0 2px 12px rgba(0,80,0,0.08)' }}>
                <div style={{ color: '#f4b942', fontSize: '1.1rem', marginBottom: '0.8rem' }}>★★★★★</div>
                <p style={{ color: '#3a5a3a', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.2rem' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.95rem', color: '#fff', flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1a2e1a' }}>{t.author}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b8a6b' }}>📍 {t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={sectionLabel}>FAQs</div>
            <h2 style={sectionTitle}>Common Questions About <span style={{ color: '#2a7aad' }}>Dental Care in Kamareddy</span></h2>
          </div>
          <div style={{ maxWidth: 760, margin: '3rem auto 0' }}>
            {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── BOOK CTA BANNER ── */}
      <section style={{ padding: '4rem 1.5rem', background: 'linear-gradient(135deg,#2a7aad,#3a8a3a)', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: '1rem' }}>Ready for Your Best Smile in Kamareddy?</h2>
          <p style={{ opacity: 0.85, fontSize: '1rem', marginBottom: '2rem' }}>Join 5000+ happy patients at Srivenkateshwara Dental Hospital. Book your appointment today — no long waits, no hidden charges.</p>
          <Link to="/contact" style={{ padding: '0.85rem 2.2rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '1rem', borderRadius: 25, textDecoration: 'none', display: 'inline-block' }}>📅 Book Free Consultation</Link>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" style={{ padding: '5rem 1.5rem', background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={sectionLabel}>Book Now</div>
            <h2 style={sectionTitle}>Request an <span style={{ color: '#2a7aad' }}>Appointment</span> in Kamareddy</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2.5rem', alignItems: 'start' }}>
            <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', boxShadow: '0 4px 16px rgba(0,80,0,0.08)' }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: '#2a7aad', marginBottom: '1.5rem' }}>Contact Details</h3>
              {[['📍','Address','Ashok Nagar, Vidya Nagar Colony\nKamareddy, Telangana 503111'],['📞','Phone','+91-XXXXX-XXXXX\n(Emergency 24/7)'],['🕐','Hours','Mon–Sat: 9 AM – 8 PM\nSunday: 10 AM – 3 PM'],['📧','Email','info@svdentalkamareddy.com']].map(([icon,label,val]) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.3rem' }}>
                  <div style={{ width: 42, height: 42, background: '#87CEEB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{icon}</div>
                  <div><div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1a2e1a' }}>{label}</div><div style={{ fontSize: '0.83rem', color: '#3a5a3a', whiteSpace: 'pre-line' }}>{val}</div></div>
                </div>
              ))}
              <a href="https://maps.google.com/?q=Kamareddy+Telangana" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', height: 180, background: 'linear-gradient(135deg,#d0eeff,#d0f0d0)', borderRadius: 12, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8, textDecoration: 'none', color: '#2a7aad', fontWeight: 600, marginTop: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🗺️</span>
                <span>Open in Google Maps</span>
                <span style={{ fontSize: '0.75rem' }}>Ashok Nagar, Kamareddy, Telangana</span>
              </a>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', boxShadow: '0 4px 16px rgba(0,80,0,0.08)' }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: '#2a7aad', marginBottom: '1.5rem' }}>📅 Request Appointment</h3>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const sectionLabel = { fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#2a7aad', marginBottom: '0.5rem' };
const sectionTitle = { fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#1a2e1a', marginBottom: '0.8rem' };
const sectionSub   = { color: '#3a5a3a', maxWidth: 560, fontSize: '1rem', lineHeight: 1.7 };
