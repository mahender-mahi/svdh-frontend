// src/pages/admin/AdminDashboard.jsx
import { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { getLeadStats, getLeads } from '../../utils/api';

export default function AdminDashboard() {
  const [stats, setStats]   = useState(null);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getLeadStats(), getLeads({ limit: 5, page: 1 })]).then(([s, l]) => {
      setStats(s.data.stats);
      setRecent(l.data.data);
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const total      = stats?.total ?? '—';
  const today      = stats?.today ?? '—';
  const thisWeek   = stats?.this_week ?? '—';
  const chatbot    = stats?.by_source?.find(s => s.source === 'chatbot')?.count ?? '—';
  const form       = stats?.by_source?.find(s => s.source === 'form')?.count ?? '—';
  const newLeads   = stats?.by_status?.find(s => s.status === 'new')?.count ?? '—';

  return (
    <AdminLayout title="Dashboard Overview">
      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#6b8a6b' }}>Loading dashboard...</div>
      ) : (
        <>
          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
            {[
              { label: 'Total Leads', value: total, color: '#3a8a3a', border: '#90EE90', bg: '#f0fff0', icon: '👥' },
              { label: "Today's Leads", value: today, color: '#2a7aad', border: '#87CEEB', bg: '#e8f8ff', icon: '📅' },
              { label: 'This Week', value: thisWeek, color: '#7a5a00', border: '#f4b942', bg: '#fffacd', icon: '📈' },
              { label: 'Chatbot Leads', value: chatbot, color: '#2a7aad', border: '#87CEEB', bg: '#e8f8ff', icon: '🤖' },
              { label: 'Form Leads', value: form, color: '#3a8a3a', border: '#90EE90', bg: '#f0fff0', icon: '📝' },
              { label: 'New (Uncontacted)', value: newLeads, color: '#c0392b', border: '#e74c3c', bg: '#fff0f0', icon: '🔔' },
            ].map(c => (
              <div key={c.label} style={{ background: c.bg, border: `1.5px solid ${c.border}`, borderRadius: 12, padding: '1.3rem', borderLeft: `4px solid ${c.border}` }}>
                <div style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>{c.icon}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b8a6b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: '0.3rem' }}>{c.label}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', fontWeight: 700, color: c.color }}>{c.value}</div>
              </div>
            ))}
          </div>

          {/* Source breakdown */}
          {stats?.by_source && (
            <div style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: '1.5rem', border: '1px solid #e8f4e8' }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: '#1a2e1a', marginBottom: '1.2rem' }}>Lead Sources</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {stats.by_source.map(s => {
                  const colors = { chatbot: ['#e8f8ff','#2a7aad'], form: ['#f0fff0','#3a8a3a'], manual: ['#fffacd','#8a7200'], google: ['#f5e8ff','#7a2aad'] };
                  const [bg, color] = colors[s.source] || ['#f4f4f4','#333'];
                  return (
                    <div key={s.source} style={{ background: bg, borderRadius: 8, padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color, textTransform: 'capitalize' }}>{s.source}</span>
                      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, color }}>{s.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Recent leads */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e8f4e8' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: '#1a2e1a' }}>Recent Leads</h3>
              <a href="/admin/leads" style={{ fontSize: '0.82rem', color: '#2a7aad', fontWeight: 600, textDecoration: 'none' }}>View All →</a>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #f0f0f0' }}>
                    {['Name','Phone','Service','Source','Status','Date'].map(h => (
                      <th key={h} style={{ textAlign: 'left', padding: '0.6rem 0.7rem', color: '#6b8a6b', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 0.5, whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recent.map(l => (
                    <tr key={l.id} style={{ borderBottom: '1px solid #f8f8f8' }}>
                      <td style={{ padding: '0.75rem 0.7rem', fontWeight: 600, color: '#1a2e1a' }}>{l.name}</td>
                      <td style={{ padding: '0.75rem 0.7rem' }}>{l.phone}</td>
                      <td style={{ padding: '0.75rem 0.7rem', color: '#3a5a3a' }}>{l.service || '—'}</td>
                      <td style={{ padding: '0.75rem 0.7rem' }}><SourceBadge src={l.source}/></td>
                      <td style={{ padding: '0.75rem 0.7rem' }}><StatusBadge s={l.status}/></td>
                      <td style={{ padding: '0.75rem 0.7rem', fontSize: '0.75rem', color: '#6b8a6b', whiteSpace: 'nowrap' }}>{new Date(l.created_at).toLocaleDateString('en-IN')}</td>
                    </tr>
                  ))}
                  {!recent.length && (
                    <tr><td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: '#6b8a6b' }}>No leads yet. They'll appear here once patients submit forms or chat.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </AdminLayout>
  );
}

export function SourceBadge({ src }) {
  const map = { chatbot: ['#e8f8ff','#2a7aad'], form: ['#f0fff0','#3a8a3a'], manual: ['#fffacd','#8a7200'], google: ['#f5e8ff','#7a2aad'], referral: ['#fef0e8','#a05000'] };
  const [bg, color] = map[src] || ['#f4f4f4','#333'];
  return <span style={{ background: bg, color, padding: '0.2rem 0.6rem', borderRadius: 10, fontSize: '0.72rem', fontWeight: 700, textTransform: 'capitalize' }}>{src}</span>;
}

export function StatusBadge({ s }) {
  const map = { new: ['#fff3e8','#c06000'], contacted: ['#e8f8ff','#2a7aad'], booked: ['#f0fff0','#3a8a3a'], completed: ['#e8ffe8','#1a6a1a'], cancelled: ['#fee8e8','#c0392b'] };
  const [bg, color] = map[s] || ['#f4f4f4','#333'];
  return <span style={{ background: bg, color, padding: '0.2rem 0.6rem', borderRadius: 10, fontSize: '0.72rem', fontWeight: 700, textTransform: 'capitalize' }}>{s}</span>;
}
