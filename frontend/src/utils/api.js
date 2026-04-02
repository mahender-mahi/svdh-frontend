// src/utils/api.js — Axios instance with auth interceptor
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request
api.interceptors.request.use(config => {
  const token = localStorage.getItem('svdh_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auto-logout on 401
api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      localStorage.removeItem('svdh_token');
      localStorage.removeItem('svdh_admin');
      window.location.href = '/admin/login';
    }
    return Promise.reject(err);
  }
);

// ─── Auth ──────────────────────────────────────────────────────────────────────
export const login    = (data)        => api.post('/login', data);
export const logout   = ()            => api.post('/logout');
export const getProfile = ()          => api.get('/admin/profile');
export const updateProfile = (data)   => api.put('/admin/profile', data);
export const updatePassword = (data)  => api.put('/admin/password', data);

// ─── Leads ────────────────────────────────────────────────────────────────────
export const getLeads      = (params) => api.get('/leads', { params });
export const getLead       = (id)     => api.get(`/leads/${id}`);
export const createLead    = (data)   => api.post('/leads', data);
export const updateLead    = (id, d)  => api.put(`/leads/${id}`, d);
export const deleteLead    = (id)     => api.delete(`/leads/${id}`);
export const getLeadStats  = ()       => api.get('/leads/stats/summary');

export default api;
