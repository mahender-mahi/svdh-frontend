// src/components/AdminLayout.jsx — Sidebar layout for all admin pages
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';

const NAV = [
  { icon: '📊', label: 'Dashboard',   to: '/admin' },
  { icon: '📋', label: 'Leads',       to: '/admin/leads' },
  { icon: '👤', label: 'Profile',     to: '/admin/profile' },
  { icon: '🌐', label: 'View Site',   to: '/', external: true },
];

export default function AdminLayout({ children, title }) {
  const { admin, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success('Logged out');
    navigate('/admin/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f9f4', fontFamily: 'Nunito,sans-serif' }}>

      {/* Sidebar */}
      <aside style={{ width: 240, background: '#fff', borderRight: '1.5px solid #d0e8d0', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh', flexShrink: 0 }}>
        <div style={{ padding: '1.5rem 1.2rem', borderBottom: '1.5px solid #d0e8d0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#87CEEB,#90EE90)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>🦷</div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1a2e1a', lineHeight: 1.3 }}>SVDH Kamareddy</div>
              <div style={{ fontSize: '0.68rem', color: '#6b8a6b' }}>Admin Panel</div>
            </div>
          </div>
        </div>

        <nav style={{ flex: 1, padding: '1rem 0.7rem' }}>
          {NAV.map(item => {
            const active = pathname === item.to;
            return item.external ? (
              <Link key={item.to} to={item.to} target="_blank"
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.65rem 0.8rem', borderRadius: 8, color: '#6b8a6b', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600, marginBottom: 4 }}>
                {item.icon} {item.label}
              </Link>
            ) : (
              <Link key={item.to} to={item.to}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.65rem 0.8rem', borderRadius: 8, color: active ? '#3a8a3a' : '#3a5a3a', background: active ? '#f0fff0' : 'transparent', textDecoration: 'none', fontSize: '0.88rem', fontWeight: active ? 700 : 600, marginBottom: 4, borderLeft: active ? '3px solid #90EE90' : '3px solid transparent' }}>
                {item.icon} {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User info */}
        <div style={{ padding: '1rem 1.2rem', borderTop: '1.5px solid #d0e8d0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.7rem' }}>
            <div style={{ width: 34, height: 34, background: '#90EE90', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#3a8a3a', fontSize: '0.8rem', flexShrink: 0 }}>
              {admin?.name?.slice(0,2).toUpperCase() || 'AD'}
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1a2e1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{admin?.name}</div>
              <div style={{ fontSize: '0.72rem', color: '#6b8a6b' }}>{admin?.role}</div>
            </div>
          </div>
          <button onClick={handleLogout} style={{ width: '100%', padding: '0.5rem', background: '#fee8e8', color: '#c0392b', border: '1px solid #f9c0c0', borderRadius: 8, fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer', fontFamily: 'Nunito,sans-serif' }}>
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, overflow: 'auto' }}>
        {title && (
          <div style={{ background: '#fff', borderBottom: '1.5px solid #d0e8d0', padding: '1.2rem 2rem' }}>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', color: '#1a2e1a', margin: 0 }}>{title}</h1>
          </div>
        )}
        <div style={{ padding: '2rem' }}>{children}</div>
      </main>
    </div>
  );
}
