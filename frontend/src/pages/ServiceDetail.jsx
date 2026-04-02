// src/pages/ServiceDetail.jsx — Dynamic service detail page
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import AppointmentForm from '../components/AppointmentForm';

const SERVICES = {
  'root-canal-kamareddy': {
    icon: '🔬', name: 'Root Canal Treatment in Kamareddy', short: 'Root Canal',
    hero: 'Pain-Free Root Canal Treatment at Srivenkateshwara Dental Hospital, Kamareddy',
    intro: 'Suffering from severe toothache, swollen gums, or prolonged sensitivity? You may need a Root Canal Treatment (RCT). At Srivenkateshwara Dental Hospital, Kamareddy, we perform painless, advanced root canal treatments that save your natural tooth and eliminate pain permanently.',
    whatIs: 'Root canal treatment (endodontic treatment) involves removing the infected or inflamed pulp from inside the tooth, cleaning and shaping the root canals, and sealing them to prevent re-infection. The tooth is then restored with a crown for full strength and function.',
    signs: ['Severe toothache, especially at night', 'Prolonged sensitivity to hot and cold', 'Swollen or tender gums near the tooth', 'Darkening or discolouration of the tooth', 'Persistent pimple on the gums', 'Pain when biting or chewing'],
    steps: [['Consultation & X-Ray', 'Digital X-ray diagnosis to assess root anatomy and infection extent.'], ['Anaesthesia', 'Local anaesthesia ensures you feel absolutely no pain during the procedure.'], ['Pulp Removal', 'Infected pulp is carefully removed using precision rotary instruments.'], ['Canal Cleaning', 'Root canals are shaped, cleaned, and disinfected thoroughly.'], ['Sealing', 'Canals are sealed with biocompatible gutta-percha material.'], ['Crown Placement', 'A custom crown is placed over the treated tooth for full restoration.']],
    duration: '60–90 min (1–2 visits)', price: '₹3,000–₹8,000', success: '95%+',
    seoKeywords: 'root canal Kamareddy, root canal treatment Kamareddy, RCT Kamareddy, painless root canal Kamareddy',
  },
  'teeth-cleaning-kamareddy': {
    icon: '🦷', name: 'Teeth Cleaning in Kamareddy', short: 'Teeth Cleaning',
    hero: 'Professional Teeth Cleaning & Scaling at Srivenkateshwara Dental Hospital, Kamareddy',
    intro: 'Professional dental cleaning (scaling and polishing) is the foundation of good oral health. At Srivenkateshwara Dental Hospital in Kamareddy, our dental hygienists remove built-up tartar, plaque, and stains that regular brushing simply cannot eliminate.',
    whatIs: 'Dental cleaning involves ultrasonic scaling to remove hardened tartar from above and below the gumline, followed by hand scaling for precision and polishing to remove surface stains and smooth tooth surfaces. It typically takes 45–60 minutes.',
    signs: ['You have not had a cleaning in 6+ months', 'Yellow or brown stains on teeth', 'Bleeding gums when you brush', 'Persistent bad breath', 'Visible tartar buildup', 'Sensitivity near the gumline'],
    steps: [['Examination', 'Check for cavities, gum disease, and other issues before cleaning.'], ['Ultrasonic Scaling', 'High-frequency vibrations blast away hardened tartar safely.'], ['Hand Scaling', 'Fine instruments clean between teeth and under the gumline.'], ['Polishing', 'Gritty polishing paste removes surface stains for a smooth finish.'], ['Fluoride', 'Optional fluoride treatment strengthens enamel against cavities.'], ['Care Advice', 'Personalised home care instructions and recall scheduling.']],
    duration: '45–60 min', price: '₹500–₹1,200', success: '100%',
    seoKeywords: 'teeth cleaning Kamareddy, dental cleaning Kamareddy, scaling polishing Kamareddy, tartar removal Kamareddy',
  },
  'teeth-whitening-kamareddy': {
    icon: '✨', name: 'Teeth Whitening in Kamareddy', short: 'Teeth Whitening',
    hero: 'Professional Teeth Whitening at Srivenkateshwara Dental Hospital, Kamareddy',
    intro: 'Want a brighter, more confident smile? Our professional teeth whitening at Srivenkateshwara Dental Hospital in Kamareddy can lighten your teeth by up to 8 shades in a single 90-minute visit — delivering results no home kit can match.',
    whatIs: 'Professional whitening uses a high-concentration bleaching gel (carbamide peroxide or hydrogen peroxide) applied by a dentist, often activated by a light source. The gel penetrates enamel to break down deep stains from coffee, tea, wine, and ageing.',
    signs: ['Yellow or grey-toned teeth', 'Staining from coffee, tea, or tobacco', 'Discolouration from ageing', 'Before a wedding or special event', 'General desire for a whiter smile', 'Home kits have not delivered results'],
    steps: [['Shade Assessment', 'We record your current shade and set a realistic target goal.'], ['Gum Protection', 'A protective barrier is applied to shield your gums.'], ['Gel Application', 'Professional-grade whitening gel is applied to all tooth surfaces.'], ['Activation', 'LED light may be used to accelerate the whitening process.'], ['Multiple Rounds', 'Gel is refreshed in 15-minute intervals for maximum effect.'], ['Final Shade Check', 'We compare before/after and provide home maintenance advice.']],
    duration: '60–90 min', price: '₹3,500–₹7,000', success: '98%',
    seoKeywords: 'teeth whitening Kamareddy, tooth whitening Kamareddy, smile whitening Kamareddy, professional bleaching Kamareddy',
  },
  'dental-implants-kamareddy': {
    icon: '🪥', name: 'Dental Implants in Kamareddy', short: 'Dental Implants',
    hero: 'Permanent Dental Implants at Srivenkateshwara Dental Hospital, Kamareddy',
    intro: 'Missing a tooth? Dental implants are the gold standard for tooth replacement. At Srivenkateshwara Dental Hospital in Kamareddy, we place premium titanium implants that look, feel, and function exactly like natural teeth — permanently.',
    whatIs: 'A dental implant is a titanium screw surgically placed into the jawbone, acting as an artificial tooth root. After healing (osseointegration), a custom porcelain crown is attached on top, creating a replacement tooth that is virtually indistinguishable from the real thing.',
    signs: ['One or more missing teeth', 'Dentures that slip or cause discomfort', 'Difficulty chewing due to missing teeth', 'Jawbone loss from missing tooth', 'You want a permanent, not removable, solution', 'Bridge is not suitable for your case'],
    steps: [['Consultation & CBCT Scan', '3D imaging to assess bone density and plan implant placement.'], ['Bone Grafting (if needed)', 'If bone is insufficient, grafting builds the foundation first.'], ['Implant Placement', 'Titanium implant is placed under local anaesthesia — no pain.'], ['Healing Phase', '3–6 months for osseointegration (implant fuses with bone).'], ['Abutment Placement', 'Connector piece is attached once implant has integrated.'], ['Crown Fitting', 'Custom porcelain crown is permanently attached. Done!']],
    duration: '2–3 visits over 3–6 months', price: '₹25,000–₹60,000 per implant', success: '97%+',
    seoKeywords: 'dental implants Kamareddy, tooth implant Kamareddy, implant dentist Kamareddy, missing tooth Kamareddy',
  },
};

// Default fallback for any slug not explicitly defined
const DEFAULT_SERVICE = {
  icon: '🦷', name: 'Dental Treatment in Kamareddy', short: 'Dental Treatment',
  hero: 'Expert Dental Care at Srivenkateshwara Dental Hospital, Kamareddy',
  intro: 'Srivenkateshwara Dental Hospital in Ashok Nagar, Kamareddy offers comprehensive multispeciality dental care. Our experienced team provides advanced, affordable treatment for all dental conditions.',
  whatIs: 'We offer a full range of dental services including general dentistry, cosmetic treatments, oral surgery, orthodontics, and paediatric dentistry — all at one convenient location in Kamareddy, Telangana.',
  signs: ['Tooth pain or sensitivity','Bleeding or swollen gums','Stained or yellowed teeth','Missing or broken teeth','Crooked teeth or bite issues','Time for routine check-up'],
  steps: [['Consultation','Our dentist performs a thorough examination and takes necessary X-rays.'],['Diagnosis','We explain our findings clearly and present all treatment options.'],['Treatment Plan','A personalised, step-by-step plan is prepared for your case.'],['Treatment','Procedures are carried out with maximum comfort and precision.'],['Follow-up','We monitor your healing and ensure optimal results.'],['Prevention','Advice on home care to maintain your oral health long-term.']],
  duration: 'Varies by treatment', price: 'Contact for quote', success: '95%+',
  seoKeywords: 'dental clinic Kamareddy, dentist Kamareddy, dental treatment Kamareddy',
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES[slug] || { ...DEFAULT_SERVICE, name: slug?.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase()) || 'Service' };

  return (
    <>
      <SEOHead
        title={service.name}
        description={`${service.intro.slice(0,155)}...`}
        canonical={`/services/${slug}`}
      />
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Link to="/services" style={{ color: '#2a7aad', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}>← All Services</Link>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '4rem', flexShrink: 0 }}>{service.icon}</div>
            <div>
              <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', color: '#2a7aad', marginBottom: '0.8rem', lineHeight: 1.2 }}>{service.hero}</h1>
              <p style={{ color: '#3a5a3a', fontSize: '1rem', lineHeight: 1.7, maxWidth: 680 }}>{service.intro}</p>
              <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <Link to="/contact" style={{ padding: '0.65rem 1.5rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '0.9rem', borderRadius: 20, textDecoration: 'none' }}>📅 Book Appointment</Link>
                <div style={{ display: 'flex', gap: '0.7rem' }}>
                  {[['⏱',service.duration],['💰',service.price],['✅',`${service.success} Success`]].map(([ic,val])=>(
                    <div key={val} style={{ background: '#fff', borderRadius: 10, padding: '0.4rem 0.8rem', fontSize: '0.78rem', fontWeight: 600, color: '#3a5a3a', border: '1px solid #d0e8d0', display: 'flex', alignItems: 'center', gap: 4 }}>{ic} {val}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>
        <div>
          {/* What is */}
          <div style={card}>
            <h2 style={h2}>What is {service.short}?</h2>
            <p style={para}>{service.whatIs}</p>
          </div>

          {/* Signs you need it */}
          <div style={{ ...card, marginTop: '1.5rem' }}>
            <h2 style={h2}>Signs You May Need {service.short}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '0.6rem', marginTop: '1rem' }}>
              {service.signs.map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, background: '#f8fff8', borderRadius: 8, padding: '0.7rem', fontSize: '0.85rem', color: '#1a2e1a' }}>
                  <span style={{ color: '#c0392b', fontWeight: 700, flexShrink: 0 }}>⚠</span>{s}
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div style={{ ...card, marginTop: '1.5rem' }}>
            <h2 style={h2}>How It Works at Our Kamareddy Clinic</h2>
            <div style={{ marginTop: '1.2rem' }}>
              {service.steps.map(([title, desc], i) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: i % 2 === 0 ? '#90EE90' : '#87CEEB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff', fontSize: '0.85rem', flexShrink: 0, marginTop: 2 }}>{i+1}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1a2e1a', marginBottom: '0.15rem', fontSize: '0.9rem' }}>{title}</div>
                    <div style={{ color: '#3a5a3a', fontSize: '0.85rem', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why us */}
          <div style={{ ...card, marginTop: '1.5rem', background: 'linear-gradient(135deg,#f0fff0,#e8f8ff)' }}>
            <h2 style={h2}>Why Choose Us for {service.short} in Kamareddy?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '0.8rem', marginTop: '1rem' }}>
              {[['🏥','Advanced Equipment','Digital X-rays, rotary instruments, laser tech'],['👨‍⚕️','Expert Dentists','15+ years experience in Kamareddy'],['💊','Painless Treatment','Advanced anaesthesia techniques'],['💰','Affordable','Transparent pricing, EMI available']].map(([ic,t,d])=>(
                <div key={t} style={{ background: '#fff', borderRadius: 10, padding: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{ic}</div>
                  <div style={{ fontWeight: 700, color: '#1a2e1a', fontSize: '0.88rem', marginBottom: '0.2rem' }}>{t}</div>
                  <div style={{ fontSize: '0.78rem', color: '#6b8a6b' }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: '5rem' }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: '1.8rem', border: '1px solid rgba(144,238,144,0.4)', boxShadow: '0 4px 20px rgba(0,80,0,0.08)' }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", color: '#2a7aad', marginBottom: '1.2rem' }}>Book This Treatment</h3>
            <AppointmentForm />
          </div>

          <div style={{ background: '#FFFACD', borderRadius: 12, padding: '1.2rem', marginTop: '1rem', border: '1px solid #e8d84a' }}>
            <div style={{ fontWeight: 700, color: '#8a7200', marginBottom: '0.5rem' }}>📍 Find Us in Kamareddy</div>
            <div style={{ fontSize: '0.83rem', color: '#6a5000', lineHeight: 1.8 }}>
              Ashok Nagar, Vidya Nagar Colony<br />Kamareddy, Telangana 503111<br />
              📞 +91-XXXXX-XXXXX<br />
              ⏰ Mon–Sat: 9AM–8PM
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

const card  = { background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid rgba(144,238,144,0.3)', boxShadow: '0 2px 10px rgba(0,80,0,0.06)' };
const h2    = { fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', color: '#1a2e1a', marginBottom: '0.8rem' };
const para  = { color: '#3a5a3a', fontSize: '0.92rem', lineHeight: 1.75 };
