// src/pages/ServicesPage.jsx
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const SERVICES = [
  { icon: '🦷', name: 'Dental Cleaning', slug: 'teeth-cleaning-kamareddy', tagline: 'Prevent disease, protect your smile', desc: 'Professional scaling and polishing removes hardened plaque (tartar) and surface stains that regular brushing cannot reach. Recommended every 6 months for optimal oral health. Prevents gum disease, cavities, and bad breath.', benefits: ['Removes tartar buildup','Prevents gum disease','Freshens breath','Early cavity detection','Polishes teeth surface'], duration: '45–60 min', price: '₹500–₹1,200' },
  { icon: '🔬', name: 'Root Canal Treatment', slug: 'root-canal-kamareddy', tagline: 'Pain-free. Tooth-saving.', desc: 'Root Canal Treatment (RCT) relieves severe toothache caused by infected or inflamed tooth pulp. Using advanced rotary endodontics, our dentists perform painless RCT that saves your natural tooth and eliminates pain permanently.', benefits: ['Eliminates severe tooth pain','Saves your natural tooth','Prevents infection spread','Long-lasting results','Same-day procedure available'], duration: '60–90 min', price: '₹3,000–₹8,000' },
  { icon: '✨', name: 'Teeth Whitening', slug: 'teeth-whitening-kamareddy', tagline: 'Up to 8 shades brighter', desc: 'Professional teeth whitening uses medical-grade bleaching agents applied by trained dentists for safe, even, and dramatic results. Achieve a brilliant smile in just one visit — far more effective than any over-the-counter kit.', benefits: ['8 shades whiter in 1 visit','Safe & dentist-supervised','Even, consistent results','Long-lasting (1–3 years)','No sensitivity protocol'], duration: '60–90 min', price: '₹3,500–₹7,000' },
  { icon: '🪥', name: 'Dental Implants', slug: 'dental-implants-kamareddy', tagline: 'Permanent. Natural. Life-changing.', desc: 'Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots. Topped with a crown, they look, feel, and function exactly like natural teeth — permanently.', benefits: ['Permanent tooth replacement','Natural look and feel','Preserves jawbone density','No slipping like dentures','30+ year lifespan'], duration: '2–3 visits over 3–6 months', price: '₹25,000–₹60,000 per implant' },
  { icon: '😁', name: 'Cosmetic Dentistry', slug: 'cosmetic-dentistry-kamareddy', tagline: 'Transform your smile', desc: 'From porcelain veneers and composite bonding to complete smile makeovers, our cosmetic dentistry services are designed to give you the confidence that comes with a beautiful, healthy smile.', benefits: ['Porcelain veneers','Composite bonding','Smile makeovers','Gum contouring','Digital smile preview'], duration: 'Varies by treatment', price: '₹2,000–₹25,000 per tooth' },
  { icon: '🦴', name: 'Orthodontics', slug: 'orthodontics-kamareddy', tagline: 'Align your smile beautifully', desc: 'We offer traditional metal braces, ceramic braces, and clear aligners for children, teens, and adults. Straighter teeth improve appearance, bite function, and oral hygiene.', benefits: ['Traditional & ceramic braces','Clear aligners available','For all ages (8 to 60+)','Improved bite function','Better oral hygiene'], duration: '12–24 months', price: '₹25,000–₹80,000' },
  { icon: '🧒', name: 'Paediatric Dentistry', slug: 'paediatric-dentistry-kamareddy', tagline: 'Gentle care for little smiles', desc: 'Our paediatric dentistry approach makes dental visits fun and stress-free for children. From the first tooth to teenage years, we build healthy dental habits that last a lifetime.', benefits: ['Child-friendly environment','Fluoride treatments','Fissure sealants','Space maintainers','Parent education & guidance'], duration: '30–45 min', price: '₹300–₹2,000' },
  { icon: '🩺', name: 'Oral Surgery', slug: 'oral-surgery-kamareddy', tagline: 'Expert surgical care', desc: 'Our oral surgery services include simple and surgical tooth extractions, wisdom tooth removal, cyst removal, and more — performed with precision and maximum patient comfort.', benefits: ['Wisdom tooth removal','Surgical extractions','Cyst & abscess removal','Jaw surgery (referral)','Post-operative care included'], duration: '30–120 min', price: '₹500–₹8,000' },
];

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Dental Services in Kamareddy"
        description="Complete dental services in Kamareddy: root canal, teeth whitening, dental implants, orthodontics, cosmetic dentistry & more at Srivenkateshwara Dental Hospital."
        canonical="/services"
      />
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={label}>All Specialities</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#2a7aad', marginBottom: '1rem' }}>
            Dental Services in Kamareddy
          </h1>
          <p style={{ color: '#3a5a3a', fontSize: '1.05rem', lineHeight: 1.7 }}>
            8 specialities. One roof. Srivenkateshwara Dental Hospital — Ashok Nagar, Kamareddy, Telangana.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '4rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.8rem' }}>
          {SERVICES.map(s => (
            <div key={s.slug} style={{ background: '#fff', borderRadius: 16, border: '1px solid rgba(144,238,144,0.35)', boxShadow: '0 2px 12px rgba(0,80,0,0.07)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)', padding: '1.8rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.7rem' }}>{s.icon}</div>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.15rem', color: '#1a2e1a', marginBottom: '0.3rem' }}>{s.name}</h2>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#2a7aad', fontStyle: 'italic' }}>{s.tagline}</div>
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: '#3a5a3a', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>{s.desc}</p>
                <div style={{ marginBottom: '1.2rem' }}>
                  {s.benefits.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: '#1a2e1a', marginBottom: '0.3rem' }}>
                      <span style={{ color: '#3a8a3a', fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: '1.2rem', marginTop: 'auto' }}>
                  <div style={{ background: '#f0fff0', borderRadius: 8, padding: '0.5rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6b8a6b', textTransform: 'uppercase', letterSpacing: 0.5 }}>Duration</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1a2e1a' }}>{s.duration}</div>
                  </div>
                  <div style={{ background: '#e8f8ff', borderRadius: 8, padding: '0.5rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6b8a6b', textTransform: 'uppercase', letterSpacing: 0.5 }}>Price Range</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1a2e1a' }}>{s.price}</div>
                  </div>
                </div>
                <Link to={`/services/${s.slug}`} style={{ display: 'block', textAlign: 'center', padding: '0.6rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '0.88rem', borderRadius: 20, textDecoration: 'none' }}>
                  Learn More & Book →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1.5rem', background: 'linear-gradient(135deg,#2a7aad,#3a8a3a)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', color: '#fff' }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', marginBottom: '1rem' }}>Not Sure Which Treatment You Need?</h2>
          <p style={{ opacity: 0.85, marginBottom: '2rem' }}>Book a free consultation at Srivenkateshwara Dental Hospital, Kamareddy. Our dentists will diagnose and recommend the best treatment plan for you.</p>
          <Link to="/contact" style={{ padding: '0.85rem 2rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '1rem', borderRadius: 25, textDecoration: 'none', display: 'inline-block' }}>📅 Book Free Consultation</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

const label = { fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#2a7aad', marginBottom: '0.5rem' };
