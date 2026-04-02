// src/components/AppointmentForm.jsx — Reusable appointment form
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createLead } from '../utils/api';

const SERVICES = [
  'Dental Cleaning','Root Canal','Teeth Whitening','Dental Implants',
  'Cosmetic Dentistry','Orthodontics','Paediatric Dentistry','Oral Surgery','Other',
];

export default function AppointmentForm({ onSuccess }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      await createLead({ ...data, source: 'form' });
      reset();
      setSuccess(true);
      toast.success('Appointment request sent! We\'ll call you shortly. 😊');
      onSuccess?.();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  if (success) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ fontFamily: "'Playfair Display',serif", color: '#2a7aad', marginBottom: '0.5rem' }}>Appointment Requested!</h3>
        <p style={{ color: '#3a5a3a', marginBottom: '1.5rem' }}>Our team will call you within 2 hours to confirm your slot at Srivenkateshwara Dental Hospital, Kamareddy.</p>
        <button onClick={() => setSuccess(false)} style={btnStyle}>Book Another →</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={fgStyle}>
          <label style={lblStyle}>Full Name *</label>
          <input {...register('name', { required: 'Name is required' })} placeholder="Your name" style={inputStyle(!!errors.name)} />
          {errors.name && <span style={errStyle}>{errors.name.message}</span>}
        </div>
        <div style={fgStyle}>
          <label style={lblStyle}>Phone *</label>
          <input {...register('phone', {
            required: 'Phone is required',
            pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid 10-digit mobile number' }
          })} placeholder="10-digit mobile" type="tel" style={inputStyle(!!errors.phone)} />
          {errors.phone && <span style={errStyle}>{errors.phone.message}</span>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={fgStyle}>
          <label style={lblStyle}>Email</label>
          <input {...register('email', { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} placeholder="your@email.com" type="email" style={inputStyle(!!errors.email)} />
          {errors.email && <span style={errStyle}>{errors.email.message}</span>}
        </div>
        <div style={fgStyle}>
          <label style={lblStyle}>Preferred Date</label>
          <input {...register('preferred_date')} type="date" min={new Date().toISOString().split('T')[0]} style={inputStyle(false)} />
        </div>
      </div>

      <div style={fgStyle}>
        <label style={lblStyle}>Service Needed</label>
        <select {...register('service')} style={inputStyle(false)}>
          <option value="">Select a service</option>
          {SERVICES.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div style={fgStyle}>
        <label style={lblStyle}>Message / Concern</label>
        <textarea {...register('message')} placeholder="Briefly describe your dental concern..." rows={4} style={{ ...inputStyle(false), resize: 'vertical' }} />
      </div>

      <button type="submit" disabled={isSubmitting} style={{ ...btnStyle, width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}>
        {isSubmitting ? 'Submitting...' : '📅 Request Appointment'}
      </button>
      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#6b8a6b', marginTop: '0.7rem' }}>
        🔒 Your data is safe with us. No spam, ever.
      </p>
    </form>
  );
}

const inputStyle = (hasErr) => ({
  width: '100%', border: `1.5px solid ${hasErr ? '#e74c3c' : '#d0e8d0'}`, borderRadius: 8,
  padding: '0.65rem 1rem', fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem',
  color: '#1a2e1a', outline: 'none', background: '#fff', boxSizing: 'border-box',
});
const fgStyle  = { marginBottom: '1rem' };
const lblStyle = { display: 'block', fontWeight: 700, fontSize: '0.82rem', color: '#1a2e1a', marginBottom: '0.35rem' };
const errStyle = { fontSize: '0.75rem', color: '#e74c3c', marginTop: '0.2rem', display: 'block' };
const btnStyle = {
  display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.75rem 1.8rem',
  background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '0.95rem',
  border: 'none', borderRadius: 25, cursor: 'pointer', fontFamily: 'Nunito, sans-serif', transition: 'all 0.2s',
};
