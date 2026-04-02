// src/App.jsx — Main app with React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './hooks/useAuth';

// Public pages
import HomePage        from './pages/HomePage';
import ServicesPage    from './pages/ServicesPage';
import ServiceDetail   from './pages/ServiceDetail';
import AboutPage       from './pages/AboutPage';
import BlogPage        from './pages/BlogPage';
import BlogPost        from './pages/BlogPost';
import ContactPage     from './pages/ContactPage';
import LocationPage    from './pages/LocationPage';

// Admin pages
import AdminLogin      from './pages/admin/AdminLogin';
import AdminDashboard  from './pages/admin/AdminDashboard';
import AdminLeads      from './pages/admin/AdminLeads';
import AdminProfile    from './pages/admin/AdminProfile';

// Components
import Chatbot         from './components/Chatbot';
import ScrollToTop     from './components/ScrollToTop';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public */}
          <Route path="/"                              element={<HomePage />} />
          <Route path="/services"                      element={<ServicesPage />} />
          <Route path="/services/:slug"                element={<ServiceDetail />} />
          <Route path="/about"                         element={<AboutPage />} />
          <Route path="/blog"                          element={<BlogPage />} />
          <Route path="/blog/:slug"                    element={<BlogPost />} />
          <Route path="/contact"                       element={<ContactPage />} />
          <Route path="/dentist-kamareddy"             element={<LocationPage />} />

          {/* Admin */}
          <Route path="/admin/login"                   element={<AdminLogin />} />
          <Route path="/admin"                         element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/leads"                   element={<ProtectedRoute><AdminLeads /></ProtectedRoute>} />
          <Route path="/admin/profile"                 element={<ProtectedRoute><AdminProfile /></ProtectedRoute>} />

          {/* Fallback */}
          <Route path="*"                              element={<Navigate to="/" replace />} />
        </Routes>

        {/* Global floating chatbot — shown only on public pages */}
        <Chatbot />

        {/* Toast notifications */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: { fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem' },
            success: { iconTheme: { primary: '#5cb85c', secondary: '#fff' } },
          }}
        />
      </BrowserRouter>
    </AuthProvider>
  );
}
