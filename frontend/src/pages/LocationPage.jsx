// src/pages/LocationPage.jsx — /dentist-kamareddy SEO landing page
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import AppointmentForm from '../components/AppointmentForm';

export default function LocationPage() {
  return (
    <>
      <SEOHead
        title="Dentist in Kamareddy | Best Dental Clinic Kamareddy Telangana"
        description="Looking for a dentist in Kamareddy? Srivenkateshwara Dental Hospital, Ashok Nagar offers root canal, teeth whitening, implants & more. Book now!"
        canonical="/dentist-kamareddy"
        schema={{
          '@type': 'Dentist',
          name: 'Srivenkateshwara Dental Hospital',
          description: 'Best dentist in Kamareddy, Telangana. Multispeciality dental clinic in Ashok Nagar, Vidya Nagar Colony, Kamareddy.',
        }}
      />
      <Navbar />

      <section style={{ background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={label}>Kamareddy's Best Dental Clinic</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#2a7aad', marginBottom: '1rem' }}>
            Best Dentist in Kamareddy, Telangana
          </h1>
          <p style={{ color: '#3a5a3a', fontSize: '1.05rem', maxWidth: 680, margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Srivenkateshwara Dental Hospital is Kamareddy's most trusted multispeciality dental clinic, located at Ashok Nagar, Vidya Nagar Colony. We offer advanced, affordable dental care including root canal, teeth whitening, implants, orthodontics, and more.
          </p>
          <Link to="/contact" style={ctaBtn}>📅 Book Appointment in Kamareddy</Link>
        </div>
      </section>

      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.9rem', color: '#1a2e1a', marginBottom: '1rem', textAlign: 'center' }}>
            Why We're the <span style={{ color: '#2a7aad' }}>Best Dental Clinic in Kamareddy</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              ['🏥','Advanced Facility','State-of-the-art equipment: digital X-rays, laser dentistry, CAD/CAM crowns. The most modern dental clinic in Kamareddy, Telangana.'],
              ['👨‍⚕️','Expert Dentists','Highly qualified dentists with 15+ years serving patients across Kamareddy, Nizamabad, and surrounding districts.'],
              ['💊','Pain-Free Treatment','Advanced local anesthesia and gentle techniques ensure a completely comfortable dental experience for all ages.'],
              ['💰','Affordable Prices','Transparent pricing with no hidden charges. EMI options available. Quality dental care accessible to all in Kamareddy.'],
              ['📅','Convenient Hours','Mon–Sat 9AM–8PM, Sunday 10AM–3PM. Emergency dental care available 24/7 in Kamareddy.'],
              ['⭐','4.9 Star Rating','Rated 4.9/5 by 200+ verified patients on Google. Trusted by thousands of families across Kamareddy and Telangana.'],
            ].map(([icon,title,desc])=>(
              <div key={title} style={{ background: '#f8fff8', borderRadius: 12, padding: '1.5rem', borderLeft: '3px solid #90EE90' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.7rem' }}>{icon}</div>
                <div style={{ fontWeight: 700, color: '#1a2e1a', marginBottom: '0.4rem', fontFamily: "'Playfair Display',serif" }}>{title}</div>
                <div style={{ fontSize: '0.85rem', color: '#3a5a3a', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAP block for local SEO */}
      <section style={{ padding: '4rem 1.5rem', background: '#f0fff0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', color: '#2a7aad', marginBottom: '2rem' }}>Find a Dentist Near You in Kamareddy</h2>
          <div style={{ background: '#fff', borderRadius: 16, padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,80,0,0.08)', display: 'inline-block', textAlign: 'left', minWidth: 300 }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, color: '#1a2e1a', marginBottom: '1rem' }}>🦷 Srivenkateshwara Dental Hospital</div>
            <div style={{ fontSize: '0.92rem', color: '#3a5a3a', lineHeight: 2 }}>
              📍 Ashok Nagar, Vidya Nagar Colony<br />
              Kamareddy, Telangana 503111<br />
              📞 +91-XXXXX-XXXXX<br />
              📧 info@svdentalkamareddy.com<br />
              ⏰ Mon–Sat: 9AM–8PM | Sun: 10AM–3PM<br />
              🚨 Emergency: 24/7 Available
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <p style={{ color: '#3a5a3a', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Serving patients from Kamareddy, Banswada, Yellareddy, Nizamabad, Bodhan, Armoor, Bhiknoor, Pitlam and all surrounding areas in Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Services with SEO keywords */}
      <section style={{ padding: '4rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.7rem', color: '#1a2e1a', marginBottom: '0.5rem', textAlign: 'center' }}>Dental Services in Kamareddy</h2>
          <p style={{ textAlign: 'center', color: '#6b8a6b', marginBottom: '2.5rem' }}>All major dental treatments available at one location in Kamareddy, Telangana</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem' }}>
            {[
              ['Root Canal Kamareddy','🔬','/services/root-canal-kamareddy'],
              ['Teeth Whitening Kamareddy','✨','/services/teeth-whitening-kamareddy'],
              ['Dental Implants Kamareddy','🪥','/services/dental-implants-kamareddy'],
              ['Teeth Cleaning Kamareddy','🦷','/services/teeth-cleaning-kamareddy'],
              ['Orthodontist Kamareddy','🦴','/services/orthodontics-kamareddy'],
              ['Cosmetic Dentist Kamareddy','😁','/services/cosmetic-dentistry-kamareddy'],
            ].map(([name,icon,to])=>(
              <Link key={name} to={to} style={{ background: 'linear-gradient(135deg,#f0fff0,#e8f8ff)', borderRadius: 12, padding: '1.2rem', textAlign: 'center', textDecoration: 'none', display: 'block', border: '1px solid rgba(144,238,144,0.4)', transition: 'all 0.2s' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a2e1a', lineHeight: 1.3 }}>{name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Book form */}
      <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.8rem', color: '#2a7aad' }}>Book Appointment at Kamareddy's Best Dental Clinic</h2>
          </div>
          <div style={{ background: '#fff', borderRadius: 16, padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,80,0,0.08)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const label = { fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#2a7aad', marginBottom: '0.5rem' };
const ctaBtn = { display: 'inline-block', padding: '0.85rem 2rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '1rem', borderRadius: 25, textDecoration: 'none' };
