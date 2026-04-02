// src/pages/BlogPage.jsx
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export const BLOG_POSTS = [
  {
    slug: 'signs-you-need-root-canal-kamareddy',
    emoji: '😬', tag: 'Root Canal', date: 'March 2025', readTime: '5 min read',
    title: '5 Signs You Need a Root Canal in Kamareddy',
    excerpt: 'Severe toothache at night? Prolonged sensitivity to hot or cold? A darkened tooth? These are warning signs that should never be ignored. Learn the 5 key signs that indicate you may need root canal treatment in Kamareddy.',
    content: `Root canal treatment (RCT) is one of the most misunderstood dental procedures. Many patients in Kamareddy delay seeking treatment due to fear — but modern root canal therapy is completely painless and can save your tooth permanently.

## 5 Signs You Need Root Canal Treatment

**1. Severe, Persistent Toothache**
If you experience a throbbing, intense toothache that gets worse at night or when lying down, this is a classic sign of pulp infection. The pain may radiate to your jaw, ear, or neck.

**2. Prolonged Sensitivity to Hot or Cold**
Normal teeth feel brief sensitivity to hot or cold foods and drinks. If the sensitivity lingers for 30+ seconds after the stimulus is removed, the nerve may be damaged or infected.

**3. Swollen, Tender Gums**
Swelling near a specific tooth, or a small raised bump (parulis or "gum pimple") on the gum, indicates an abscess — a pocket of infection that requires immediate treatment.

**4. Darkening or Discolouration of the Tooth**
A grey or brown tooth — especially following trauma or a deep cavity — signals that the internal blood supply has been compromised and the pulp tissue may be dying.

**5. Pain When Biting or Chewing**
If a tooth consistently hurts when you bite down on food, the surrounding ligaments may be inflamed due to infection spreading beyond the root tip.

## What to Do If You Have These Symptoms

Do not wait. Call Srivenkateshwara Dental Hospital in Kamareddy immediately. Delaying treatment allows the infection to spread to surrounding bone and teeth, potentially leading to tooth loss.

At our clinic in Ashok Nagar, Kamareddy, we use advanced rotary endodontics and digital X-rays to diagnose and treat root infections painlessly — usually in a single appointment.

**Remember:** A timely root canal treatment costs far less (financially and in pain) than an extraction followed by an implant.`,
  },
  {
    slug: 'how-often-visit-dentist-kamareddy',
    emoji: '🦷', tag: 'Prevention', date: 'February 2025', readTime: '4 min read',
    title: 'How Often Should You Visit a Dentist in Kamareddy?',
    excerpt: 'Most people only visit the dentist when pain strikes. But regular dental check-ups are the single most powerful tool for preventing costly, painful problems. Here\'s what the experts recommend.',
    content: `"I'll go to the dentist when something hurts." This is one of the most common — and costly — mistakes we see among patients in Kamareddy. By the time you feel pain, a small, easily treatable problem has often become a complex, expensive one.

## The Standard Recommendation: Every 6 Months

Most dental associations worldwide recommend a check-up and cleaning every 6 months. This interval allows dentists to:

- Catch cavities when they are tiny (a simple filling vs. a root canal)
- Detect gum disease in early, reversible stages
- Remove tartar buildup that causes bone loss over time
- Screen for oral cancer (a check that takes only 2 minutes)

## Do You Need to Go More Often?

Certain patients benefit from more frequent visits (every 3–4 months):

- People with active gum disease (periodontitis)
- Diabetics (who have higher infection risk)
- Pregnant women (hormonal changes increase gum sensitivity)
- Heavy smokers or tobacco users
- Patients with a history of frequent cavities

## Signs You Should Visit Immediately (Don't Wait for Your Check-Up)

- Toothache or sensitivity lasting more than 2 days
- Swollen jaw, cheek, or gum
- Bleeding gums that don't resolve with brushing
- A cracked or broken tooth
- A loose tooth (in adults)

## Book Your Check-Up at Srivenkateshwara Dental Hospital, Kamareddy

Our clinic in Ashok Nagar is open Monday–Saturday 9AM–8PM and Sunday 10AM–3PM. Regular patients get priority scheduling and our clinical team will send you a reminder when your check-up is due.`,
  },
  {
    slug: 'teeth-whitening-home-vs-professional',
    emoji: '✨', tag: 'Cosmetic', date: 'January 2025', readTime: '6 min read',
    title: 'Teeth Whitening at Home vs Professional: What Actually Works?',
    excerpt: 'Walk into any pharmacy in Kamareddy and you\'ll find whitening toothpastes, strips, and gels promising a dazzling smile. But do they work? Here\'s the honest truth from your dentists at SVDH.',
    content: `Teeth whitening is one of the most requested cosmetic dental procedures — and also one of the most misunderstood. Patients in Kamareddy often try multiple home products before visiting us, and most report disappointment.

## Why Home Whitening Products Underdeliver

**Whitening Toothpastes**
These use mild abrasives to scrub surface stains — they don't actually bleach your teeth. Result: marginal improvement on light staining only.

**Whitening Strips (Crest, etc.)**
These contain low concentrations of hydrogen peroxide (3–10%). They can lighten teeth 1–3 shades but results are uneven, especially on crowded or shaped teeth.

**Charcoal Products**
No credible scientific evidence supports their effectiveness. They may actually damage enamel over time due to their abrasiveness.

## Why Professional Whitening Works

At Srivenkateshwara Dental Hospital in Kamareddy, we use professional-grade bleaching gel (35–40% carbamide peroxide) that penetrates deep into enamel to break up intrinsic stains.

The results:
- **8 shades lighter in one 90-minute session**
- Even, consistent results across all tooth surfaces
- Dentist-supervised for safety — no enamel or gum damage
- Long-lasting: 1–3 years with proper care

## Is It Safe?

Yes — professional whitening performed by a qualified dentist is completely safe. Sensitivity, if it occurs, is temporary and we have protocols to minimise it.

Home products, when overused, can damage enamel and irritate gums due to ill-fitting trays.

## The Verdict

If you want a genuinely whiter smile, professional whitening is the only method with consistent, dramatic, and lasting results. Book a whitening session at our Kamareddy clinic — results you\'ll notice from day one.`,
  },
  {
    slug: 'when-should-child-first-see-dentist',
    emoji: '👶', tag: 'Paediatric', date: 'December 2024', readTime: '4 min read',
    title: 'When Should Your Child First See a Dentist in Kamareddy?',
    excerpt: 'Many parents in Kamareddy wait until their child complains of a toothache before visiting a dentist. Here\'s why the first visit should happen much earlier — and what to expect.',
    content: `One of the most common questions we hear from parents in Kamareddy is: "When should my child first see a dentist?" The answer surprises most people.

## The Answer: By Age 1 (or When the First Tooth Appears)

The American Academy of Paediatric Dentistry (AAPD) and Indian Dental Association both recommend the first dental visit by the child's first birthday, or within 6 months of the first tooth erupting.

Why so early? Because:

- Baby teeth are prone to decay as soon as they appear
- Early habits (diet, brushing technique) prevent future problems
- Children become comfortable with dental environments early
- Dentists can catch issues with jaw development early

## What Happens at a Child's First Visit?

At Srivenkateshwara Dental Hospital in Kamareddy, your child's first visit is designed to be positive and stress-free:

1. **Welcome familiarisation** — the child explores the chair, lights, and instruments without any treatment pressure
2. **Gentle examination** — the dentist checks for cavities, bite alignment, and jaw development
3. **Cleaning** — a gentle cleaning if the child is comfortable
4. **Fluoride application** — strengthens enamel against early decay
5. **Parent education** — advice on diet, thumb-sucking, bottle feeding, and home brushing

## Our Paediatric Approach in Kamareddy

Our paediatric dentist uses the "tell-show-do" technique — explaining everything before doing it, so children are never surprised. We make dental visits fun with positive reinforcement.

Regular visits from an early age mean your child grows up without dental anxiety — a gift that lasts a lifetime.`,
  },
];

export default function BlogPage() {
  return (
    <>
      <SEOHead
        title="Dental Health Blog | Tips from Kamareddy's Best Dentists"
        description="Expert dental health tips, guides, and advice from Srivenkateshwara Dental Hospital, Kamareddy. Root canal, whitening, implants, paediatric dentistry & more."
        canonical="/blog"
      />
      <Navbar />

      <section style={{ background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={label}>Dental Health Blog</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,4vw,2.6rem)', color: '#2a7aad', marginBottom: '1rem' }}>Tips & Insights from Our Kamareddy Dentists</h1>
          <p style={{ color: '#3a5a3a', fontSize: '1rem' }}>Expert advice on dental health, treatments, and preventive care — written by the team at Srivenkateshwara Dental Hospital, Kamareddy.</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.8rem' }}>
          {BLOG_POSTS.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,80,0,0.08)', border: '1px solid rgba(144,238,144,0.25)', textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
              <div style={{ height: 140, background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>{post.emoji}</div>
              <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: '0.7rem' }}>
                  <span style={{ background: '#e8f8ff', color: '#2a7aad', padding: '0.2rem 0.65rem', borderRadius: 10, fontSize: '0.72rem', fontWeight: 700 }}>{post.tag}</span>
                  <span style={{ color: '#6b8a6b', fontSize: '0.72rem' }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.05rem', color: '#1a2e1a', marginBottom: '0.6rem', lineHeight: 1.4 }}>{post.title}</h2>
                <p style={{ fontSize: '0.83rem', color: '#3a5a3a', lineHeight: 1.6, flex: 1 }}>{post.excerpt.slice(0,120)}...</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#6b8a6b' }}>{post.date}</span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#3a8a3a' }}>Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

const label = { fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#2a7aad', marginBottom: '0.5rem' };
