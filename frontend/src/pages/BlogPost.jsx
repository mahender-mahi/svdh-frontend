// src/pages/BlogPost.jsx — Individual blog article with full content rendering
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import AppointmentForm from '../components/AppointmentForm';
import { BLOG_POSTS } from './BlogPage';

function renderMarkdown(text) {
  return text.split('\n').map((line, i) => {
    if (line.startsWith('## ')) return <h2 key={i} style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.35rem', color: '#2a7aad', margin: '2rem 0 0.8rem' }}>{line.slice(3)}</h2>;
    if (line.startsWith('**') && line.endsWith('**')) return <p key={i} style={{ fontWeight: 700, color: '#1a2e1a', marginBottom: '0.4rem' }}>{line.slice(2,-2)}</p>;
    if (line.startsWith('- ')) return <li key={i} style={{ color: '#3a5a3a', fontSize: '0.92rem', marginBottom: '0.3rem', marginLeft: '1.2rem' }}>{line.slice(2)}</li>;
    if (line.trim() === '') return <div key={i} style={{ height: '0.5rem' }} />;
    // Handle inline bold **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    if (parts.length > 1) {
      return <p key={i} style={{ color: '#3a5a3a', fontSize: '0.93rem', lineHeight: 1.8, marginBottom: '0.5rem' }}>
        {parts.map((p, j) => p.startsWith('**') ? <strong key={j} style={{ color: '#1a2e1a' }}>{p.slice(2,-2)}</strong> : p)}
      </p>;
    }
    return <p key={i} style={{ color: '#3a5a3a', fontSize: '0.93rem', lineHeight: 1.8, marginBottom: '0.5rem' }}>{line}</p>;
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const otherPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt.slice(0, 155)}
        canonical={`/blog/${post.slug}`}
        schema={{ '@type': 'Article', headline: post.title, datePublished: post.date, author: { '@type': 'Organization', name: 'Srivenkateshwara Dental Hospital Kamareddy' } }}
      />
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Link to="/blog" style={{ color: '#2a7aad', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', marginBottom: '1.5rem', display: 'inline-block' }}>← Back to Blog</Link>
          <div style={{ display: 'flex', gap: 10, marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{ background: '#e8f8ff', color: '#2a7aad', padding: '0.25rem 0.75rem', borderRadius: 10, fontSize: '0.75rem', fontWeight: 700 }}>{post.tag}</span>
            <span style={{ color: '#6b8a6b', fontSize: '0.75rem' }}>{post.date} · {post.readTime}</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.6rem,4vw,2.5rem)', color: '#1a2e1a', lineHeight: 1.2, marginBottom: '1rem' }}>{post.title}</h1>
          <p style={{ color: '#3a5a3a', fontSize: '1rem', lineHeight: 1.7 }}>{post.excerpt}</p>
          <div style={{ marginTop: '1.2rem', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#87CEEB,#90EE90)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🦷</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1a2e1a' }}>Srivenkateshwara Dental Hospital</div>
              <div style={{ fontSize: '0.75rem', color: '#6b8a6b' }}>Ashok Nagar, Kamareddy, Telangana</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '3rem', alignItems: 'start' }}>
        {/* Article */}
        <article style={{ background: '#fff', borderRadius: 16, padding: '2.5rem', border: '1px solid rgba(144,238,144,0.25)', boxShadow: '0 2px 12px rgba(0,80,0,0.07)' }}>
          {renderMarkdown(post.content)}

          {/* Author box */}
          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'linear-gradient(135deg,#f0fff0,#e8f8ff)', borderRadius: 12, display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '3rem', flexShrink: 0 }}>🦷</div>
            <div>
              <div style={{ fontWeight: 700, color: '#1a2e1a', marginBottom: '0.3rem' }}>Srivenkateshwara Dental Hospital</div>
              <div style={{ fontSize: '0.83rem', color: '#3a5a3a', lineHeight: 1.6, marginBottom: '0.8rem' }}>Expert dental care at Ashok Nagar, Vidya Nagar Colony, Kamareddy, Telangana. 15+ years serving patients across Kamareddy district.</div>
              <Link to="/contact" style={{ padding: '0.45rem 1.1rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '0.82rem', borderRadius: 15, textDecoration: 'none', display: 'inline-block' }}>Book Appointment →</Link>
            </div>
          </div>

          {/* Related posts */}
          {otherPosts.length > 0 && (
            <div style={{ marginTop: '2.5rem' }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: '#1a2e1a', marginBottom: '1.2rem' }}>More from Our Blog</h3>
              {otherPosts.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f8fff8', borderRadius: 10, marginBottom: '0.7rem', textDecoration: 'none', border: '1px solid rgba(144,238,144,0.2)' }}>
                  <span style={{ fontSize: '2rem', flexShrink: 0 }}>{p.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1a2e1a', fontSize: '0.88rem', marginBottom: '0.2rem' }}>{p.title}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b8a6b' }}>{p.date} · {p.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </article>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: '5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: '1.8rem', border: '1px solid rgba(144,238,144,0.4)', boxShadow: '0 4px 20px rgba(0,80,0,0.08)' }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", color: '#2a7aad', marginBottom: '1.2rem', fontSize: '1rem' }}>📅 Book an Appointment</h3>
            <AppointmentForm />
          </div>

          <div style={{ background: '#FFFACD', borderRadius: 12, padding: '1.2rem', border: '1px solid #e8d84a' }}>
            <div style={{ fontWeight: 700, color: '#8a7200', marginBottom: '0.5rem' }}>🦷 Srivenkateshwara Dental Hospital</div>
            <div style={{ fontSize: '0.82rem', color: '#6a5000', lineHeight: 1.9 }}>
              📍 Ashok Nagar, Kamareddy, Telangana<br />
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
