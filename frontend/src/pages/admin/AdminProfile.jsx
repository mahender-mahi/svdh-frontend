// src/pages/admin/AdminProfile.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import AdminLayout from '../../components/AdminLayout';
import { useAuth } from '../../hooks/useAuth';
import { updateProfile, updatePassword } from '../../utils/api';

export default function AdminProfile() {
  const { admin } = useAuth();
  const [tab, setTab] = useState('profile');

  const { register: rP, handleSubmit: hP, formState: { isSubmitting: spP } } = useForm({ defaultValues: { name: admin?.name, email: admin?.email } });
  const { register: rPw, handleSubmit: hPw, reset: resetPw, formState: { isSubmitting: spPw } } = useForm();

  const saveProfile = async (data) => {
    try { await updateProfile(data); toast.success('Profile updated!'); }
    catch (e) { toast.error(e.response?.data?.message || 'Update failed.'); }
  };
  const savePassword = async (data) => {
    if (data.newPassword !== data.confirmPassword) { toast.error("Passwords don't match."); return; }
    try { await updatePassword({ currentPassword: data.currentPassword, newPassword: data.newPassword }); toast.success('Password changed!'); resetPw(); }
    catch (e) { toast.error(e.response?.data?.message || 'Password update failed.'); }
  };

  return (
    <AdminLayout title="Admin Profile">
      <div style={{ maxWidth: 580 }}>
        {/* Avatar card */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem', border: '1px solid #e8f4e8', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div style={{ width: 60, height: 60, background: '#90EE90', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.4rem', color: '#3a8a3a', flexShrink: 0 }}>
            {admin?.name?.slice(0,2).toUpperCase()}
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: '#1a2e1a', fontWeight: 600 }}>{admin?.name}</div>
            <div style={{ fontSize: '0.83rem', color: '#6b8a6b' }}>{admin?.email}</div>
            <div style={{ marginTop: 4, padding: '0.2rem 0.7rem', background: '#f0fff0', color: '#3a8a3a', fontSize: '0.72rem', fontWeight: 700, borderRadius: 10, display: 'inline-block', textTransform: 'capitalize' }}>{admin?.role}</div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {[['profile','👤 Edit Profile'],['password','🔒 Change Password']].map(([t,l])=>(
            <button key={t} onClick={()=>setTab(t)} style={{ padding:'0.5rem 1.2rem',borderRadius:20,border:'1.5px solid',borderColor:tab===t?'#90EE90':'#d0e8d0',background:tab===t?'#90EE90':'#fff',color:tab===t?'#3a8a3a':'#3a5a3a',fontWeight:700,fontSize:'0.85rem',cursor:'pointer',fontFamily:'Nunito,sans-serif' }}>{l}</button>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: 12, padding: '2rem', border: '1px solid #e8f4e8', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          {tab === 'profile' ? (
            <form onSubmit={hP(saveProfile)}>
              <div style={fg}><label style={lbl}>Full Name *</label><input required {...rP('name')} style={inp}/></div>
              <div style={fg}><label style={lbl}>Email Address *</label><input required type="email" {...rP('email')} style={inp}/></div>
              <button type="submit" disabled={spP} style={primaryBtn}>{spP?'Saving...':'💾 Update Profile'}</button>
            </form>
          ) : (
            <form onSubmit={hPw(savePassword)}>
              <div style={fg}><label style={lbl}>Current Password *</label><input required type="password" placeholder="Enter current password" {...rPw('currentPassword')} style={inp}/></div>
              <div style={fg}><label style={lbl}>New Password *</label><input required type="password" placeholder="Minimum 8 characters" {...rPw('newPassword',{minLength:{value:8,message:'Min 8 chars'}})} style={inp}/></div>
              <div style={fg}><label style={lbl}>Confirm New Password *</label><input required type="password" placeholder="Repeat new password" {...rPw('confirmPassword')} style={inp}/></div>
              <button type="submit" disabled={spPw} style={primaryBtn}>{spPw?'Updating...':'🔒 Change Password'}</button>
            </form>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

const fg = { marginBottom: '1.2rem' };
const lbl = { display: 'block', fontWeight: 700, fontSize: '0.82rem', color: '#1a2e1a', marginBottom: '0.35rem' };
const inp = { width: '100%', border: '1.5px solid #d0e8d0', borderRadius: 8, padding: '0.7rem 1rem', fontFamily: 'Nunito,sans-serif', fontSize: '0.9rem', color: '#1a2e1a', outline: 'none', boxSizing: 'border-box' };
const primaryBtn = { padding: '0.7rem 1.8rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '0.92rem', border: 'none', borderRadius: 25, cursor: 'pointer', fontFamily: 'Nunito,sans-serif' };
