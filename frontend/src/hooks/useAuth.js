// src/hooks/useAuth.js — Auth state context + hook
import { createContext, useContext, useState, useCallback } from 'react';
import { login as apiLogin, logout as apiLogout } from '../utils/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    try {
      const stored = localStorage.getItem('svdh_admin');
      return stored ? JSON.parse(stored) : null;
    } catch { return null; }
  });

  const login = useCallback(async (email, password) => {
    const res = await apiLogin({ email, password });
    const { token, admin: adminData } = res.data;
    localStorage.setItem('svdh_token', token);
    localStorage.setItem('svdh_admin', JSON.stringify(adminData));
    setAdmin(adminData);
    return adminData;
  }, []);

  const logout = useCallback(async () => {
    try { await apiLogout(); } catch {}
    localStorage.removeItem('svdh_token');
    localStorage.removeItem('svdh_admin');
    setAdmin(null);
  }, []);

  return (
    <AuthContext.Provider value={{ admin, login, logout, isAuthenticated: !!admin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
}
