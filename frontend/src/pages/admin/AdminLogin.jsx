// src/pages/admin/AdminLogin.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import toast from 'react-hot-toast';

export default function AdminLogin() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [serverError, setServerError] = useState('');

  if (isAuthenticated) { navigate('/admin'); return null; }

  const onSubmit = async ({ email, password }) => {
    setServerError('');
    try {
      await login(email, password);
      toast.success('Welcome back!');
      navigate('/admin');
    } catch (err) {
      setServerError(err.response?.data?.message || 'Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#e8f8ff,#f0fff0)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ background: '#fff', borderRadius: 20, padding: '2.5rem', width: '100%', maxWidth: 420, boxShadow: '0 8px 40px rgba(0,100,0,0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🦷</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', color: '#2a7aad', marginBottom: '0.25rem' }}>Admin Login</h1>
          <p style={{ color: '#6b8a6b', fontSize: '0.85rem' }}>Srivenkateshwara Dental Hospital — Staff Portal</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={lbl}>Email Address</label>
            <input type="email" placeholder="admin@svdh.com" {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} style={inp(!!errors.email)} />
            {errors.email && <span style={err}>{errors.email.message}</span>}
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={lbl}>Password</label>
            <input type="password" placeholder="••••••••" {...register('password', { required: 'Password is required' })} style={inp(!!errors.password)} />
            {errors.password && <span style={err}>{errors.password.message}</span>}
          </div>

          {serverError && (
            <div style={{ background: '#fee8e8', color: '#c0392b', padding: '0.75rem 1rem', borderRadius: 8, fontSize: '0.85rem', marginBottom: '1.2rem', border: '1px solid #f9c0c0' }}>
              ⚠️ {serverError}
            </div>
          )}

          <button type="submit" disabled={isSubmitting} style={{ width: '100%', padding: '0.8rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '0.95rem', border: 'none', borderRadius: 25, cursor: isSubmitting ? 'not-allowed' : 'pointer', fontFamily: 'Nunito,sans-serif', opacity: isSubmitting ? 0.7 : 1 }}>
            {isSubmitting ? 'Signing in...' : '🔐 Sign In'}
          </button>
        </form>

        <div style={{ marginTop: '1rem', padding: '0.8rem', background: '#f8fff8', borderRadius: 8, fontSize: '0.75rem', color: '#6b8a6b', textAlign: 'center', border: '1px solid #d0e8d0' }}>
          Demo credentials: <strong>admin@svdh.com</strong> / <strong>Admin@SVDH2025</strong>
        </div>

        <Link to="/" style={{ display: 'block', textAlign: 'center', marginTop: '1rem', color: '#2a7aad', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}>← Back to Website</Link>
      </div>
    </div>
  );
}

const lbl = { display: 'block', fontWeight: 700, fontSize: '0.82rem', color: '#1a2e1a', marginBottom: '0.35rem' };
const inp = (e) => ({ width: '100%', border: `1.5px solid ${e ? '#e74c3c' : '#d0e8d0'}`, borderRadius: 8, padding: '0.7rem 1rem', fontFamily: 'Nunito,sans-serif', fontSize: '0.9rem', color: '#1a2e1a', outline: 'none', boxSizing: 'border-box' });
const err = { fontSize: '0.75rem', color: '#e74c3c', marginTop: '0.2rem', display: 'block' };
