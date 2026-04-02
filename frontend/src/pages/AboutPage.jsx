// src/pages/AboutPage.jsx
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const TEAM = [
  { name: 'Dr. Srinivas Rao', role: 'Chief Dental Surgeon & Founder', spec: 'Oral Surgery, Implantology', exp: '18 years', icon: '👨‍⚕️' },
  { name: 'Dr. Padmavathi K.', role: 'Senior Dentist', spec: 'Root Canal, Cosmetic Dentistry', exp: '12 years', icon: '👩‍⚕️' },
  { name: 'Dr. Ravi Shankar', role: 'Orthodontist', spec: 'Braces, Clear Aligners', exp: '10 years', icon: '👨‍⚕️' },
  { name: 'Dr. Anitha Reddy', role: 'Paediatric Dentist', spec: 'Children\'s Dentistry', exp: '8 years', icon: '👩‍⚕️' },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us | Multispeciality Dental Clinic in Kamareddy"
        description="Learn about Srivenkateshwara Dental Hospital in Ashok Nagar, Kamareddy — 15+ years serving Telangana with expert, affordable multispeciality dental care."
        canonical="/about"
      />
      <Navbar />

      <section style={{ background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={label}>About Us</div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#2a7aad', lineHeight: 1.2, marginBottom: '1rem' }}>
              Kamareddy's Premier<br />Dental Hospital
            </h1>
            <p style={{ color: '#3a5a3a', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Srivenkateshwara Dental Hospital has been the most trusted dental care destination in Kamareddy, Telangana since 2009. Located at Ashok Nagar, Vidya Nagar Colony, we serve patients from across the Kamareddy district and beyond.
            </p>
            <p style={{ color: '#3a5a3a', fontSize: '1rem', lineHeight: 1.7 }}>
              Our multispeciality clinic combines experienced dental specialists, cutting-edge technology, and a patient-first approach to deliver world-class dental care — at prices that are accessible to everyone in Kamareddy.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[['5000+','Happy Patients'],['15+','Years in Kamareddy'],['8','Specialities'],['4.9★','Google Rating'],['4','Expert Dentists'],['0','Hidden Charges']].map(([n,l])=>(
              <div key={l} style={{ background: '#fff', borderRadius: 12, padding: '1.2rem', textAlign: 'center', border: '1px solid rgba(144,238,144,0.35)', boxShadow: '0 2px 8px rgba(0,80,0,0.06)' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', fontWeight: 700, color: '#3a8a3a' }}>{n}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#6b8a6b' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 3rem' }}>
            <div style={label}>Our Mission</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', color: '#1a2e1a', marginBottom: '1rem' }}>Transforming Dental Health in Kamareddy</h2>
            <p style={{ color: '#3a5a3a', lineHeight: 1.7 }}>We believe everyone in Kamareddy deserves access to expert dental care. Our mission is to provide world-class treatments with honesty, compassion, and affordability — making healthy smiles possible for every family.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.5rem' }}>
            {[
              ['🎯','Patient-First Care','Every decision is made with your health, comfort, and budget in mind. No unnecessary treatments, ever.'],
              ['🔬','Advanced Technology','Digital X-rays, CAD/CAM crowns, rotary endodontics, and laser dentistry for precise, comfortable treatment.'],
              ['👨‍👩‍👧','Community Focus','Serving Kamareddy and surrounding areas including Banswada, Yellareddy, and Bodhan with regular health camps.'],
              ['📚','Continuing Education','Our dentists regularly attend national conferences and training programs to bring the latest techniques to Kamareddy.'],
            ].map(([icon,title,desc])=>(
              <div key={title} style={{ background: 'linear-gradient(135deg,#f0fff0,#e8f8ff)', borderRadius: 14, padding: '1.5rem', border: '1px solid rgba(135,206,235,0.3)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{icon}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, color: '#1a2e1a', marginBottom: '0.5rem' }}>{title}</div>
                <div style={{ fontSize: '0.85rem', color: '#3a5a3a', lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(135deg,#f0fff0,#e8f8ff)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={label}>Our Doctors</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', color: '#1a2e1a' }}>Meet Our Expert Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
            {TEAM.map(d => (
              <div key={d.name} style={{ background: '#fff', borderRadius: 16, padding: '2rem', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,80,0,0.08)', border: '1px solid rgba(144,238,144,0.25)' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{d.icon}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, color: '#1a2e1a', fontSize: '1rem', marginBottom: '0.25rem' }}>{d.name}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#2a7aad', marginBottom: '0.5rem' }}>{d.role}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
                  <span style={{ background: '#f0fff0', color: '#3a8a3a', padding: '0.2rem 0.6rem', borderRadius: 10, fontSize: '0.72rem', fontWeight: 700 }}>{d.spec}</span>
                  <span style={{ background: '#e8f8ff', color: '#2a7aad', padding: '0.2rem 0.6rem', borderRadius: 10, fontSize: '0.72rem', fontWeight: 700 }}>{d.exp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={label}>Our Facility</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', color: '#1a2e1a' }}>State-of-the-Art Clinic in Kamareddy</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
            {['Digital OPG X-Ray Machine','Rotary Endodontic System','Dental Laser Unit','Intraoral Camera','CAD/CAM Crown System','Air Purification System','Sterilisation Centre','Comfortable Waiting Lounge'].map(f=>(
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.8rem 1rem', background: '#f8fff8', borderRadius: 8, border: '1px solid rgba(144,238,144,0.3)', fontSize: '0.85rem', fontWeight: 600, color: '#1a2e1a' }}>
                <span style={{ color: '#3a8a3a', fontWeight: 700 }}>✓</span>{f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1.5rem', background: 'linear-gradient(135deg,#2a7aad,#3a8a3a)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', color: '#fff' }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', marginBottom: '1rem' }}>Visit Us at Ashok Nagar, Kamareddy</h2>
          <p style={{ opacity: 0.85, marginBottom: '2rem' }}>Book your consultation at Srivenkateshwara Dental Hospital. Our team is ready to provide you with the best dental care in Kamareddy, Telangana.</p>
          <Link to="/contact" style={{ padding: '0.85rem 2.2rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '1rem', borderRadius: 25, textDecoration: 'none', display: 'inline-block' }}>📅 Book Appointment</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

const label = { fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#2a7aad', marginBottom: '0.5rem' };
