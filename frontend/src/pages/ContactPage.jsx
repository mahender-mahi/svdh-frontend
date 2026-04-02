// src/pages/ContactPage.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import AppointmentForm from '../components/AppointmentForm';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact & Appointments | Dentist in Kamareddy"
        description="Book an appointment at Srivenkateshwara Dental Hospital, Ashok Nagar, Kamareddy. Call us or submit the form. Open Mon–Sat 9AM–8PM."
        canonical="/contact"
      />
      <Navbar />

      <section style={{ background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={label}>Get In Touch</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#2a7aad', marginBottom: '1rem' }}>Book Your Appointment in Kamareddy</h1>
          <p style={{ color: '#3a5a3a', fontSize: '1rem', lineHeight: 1.7 }}>Fill in the form below or call us directly. Our team at Srivenkateshwara Dental Hospital, Kamareddy will confirm your slot within 2 hours.</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2.5rem', alignItems: 'start' }}>

          {/* Info + Map */}
          <div>
            <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid rgba(144,238,144,0.3)', boxShadow: '0 2px 12px rgba(0,80,0,0.07)', marginBottom: '1.5rem' }}>
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: '#2a7aad', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Contact Details</h2>
              {[
                ['📍','Address','Ashok Nagar, Vidya Nagar Colony\nKamareddy, Telangana 503111'],
                ['📞','Phone','+91-XXXXX-XXXXX\nEmergency: 24/7 Available'],
                ['📧','Email','info@svdentalkamareddy.com'],
                ['🕐','Working Hours','Monday – Saturday: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 3:00 PM'],
              ].map(([icon, label, val]) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.4rem' }}>
                  <div style={{ width: 44, height: 44, background: '#87CEEB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1a2e1a', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{label}</div>
                    <div style={{ fontSize: '0.83rem', color: '#3a5a3a', whiteSpace: 'pre-line', lineHeight: 1.7 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <a href="https://maps.google.com/?q=Kamareddy+Telangana+Dental+Hospital+Ashok+Nagar" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', height: 200, background: 'linear-gradient(135deg,#d0eeff,#d0f0d0)', borderRadius: 16, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8, textDecoration: 'none', color: '#2a7aad' }}>
              <span style={{ fontSize: '3rem' }}>🗺️</span>
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Open in Google Maps</span>
              <span style={{ fontSize: '0.78rem', color: '#3a5a3a' }}>Ashok Nagar, Kamareddy, Telangana</span>
            </a>

            {/* Quick directions */}
            <div style={{ background: '#FFFACD', borderRadius: 12, padding: '1.2rem', marginTop: '1rem', border: '1px solid #e8d84a' }}>
              <div style={{ fontWeight: 700, color: '#8a7200', marginBottom: '0.5rem', fontSize: '0.9rem' }}>🚗 How to Find Us</div>
              <div style={{ fontSize: '0.83rem', color: '#6a5000', lineHeight: 1.8 }}>
                Located in Ashok Nagar, Vidya Nagar Colony, near the main road in Kamareddy town. Easily accessible from Kamareddy Bus Stand, Kamareddy Railway Station, and all major areas. Parking available.
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid rgba(144,238,144,0.3)', boxShadow: '0 2px 12px rgba(0,80,0,0.07)' }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", color: '#2a7aad', marginBottom: '1.5rem', fontSize: '1.2rem' }}>📅 Request Appointment</h2>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section style={{ padding: '3rem 1.5rem', background: 'linear-gradient(135deg,#c0392b,#922b21)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', color: '#fff' }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.8rem', marginBottom: '0.8rem' }}>🚨 Dental Emergency in Kamareddy?</h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Severe toothache, broken tooth, or swollen jaw? Don't wait. Our emergency dental team is available 24/7.</p>
          <a href="tel:+91XXXXXXXXXX" style={{ padding: '0.85rem 2.2rem', background: '#fff', color: '#c0392b', fontWeight: 700, fontSize: '1.05rem', borderRadius: 25, textDecoration: 'none', display: 'inline-block' }}>📞 Call Emergency Line Now</a>
        </div>
      </section>

      <Footer />
    </>
  );
}

const label = { fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#2a7aad', marginBottom: '0.5rem' };
