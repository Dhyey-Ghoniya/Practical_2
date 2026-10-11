import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-card">
      <div className="page-header">
        <span className="page-badge">Practical 2: React State & Routing</span>
        <h1 className="page-title">Welcome to Multi-Page React Architecture</h1>
        <p className="page-subtitle">
          Designed and implemented by <strong>Ghoniya Dhyey (24CS024)</strong> - ITUE301 AWDF
        </p>
      </div>

      <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7' }}>
        This application demonstrates reactive state management with React's <code>useState</code> hook along with multi-page client-side routing via <code>react-router-dom</code>. Explore the interactive Task Manager and Contact Form below.
      </p>

      <div className="overview-grid">
        <div className="feature-box">
          <h3>⚡ Reactive State Management</h3>
          <p>
            Implements dynamic CRUD workflows with atomic state updates, instant UI reactivity, and derived state filtering.
          </p>
        </div>
        <div className="feature-box">
          <h3>🛣️ Client-Side Routing</h3>
          <p>
            Smooth page navigation without browser reloads using <code>BrowserRouter</code>, <code>Routes</code>, and <code>Route</code> components.
          </p>
        </div>
        <div className="feature-box">
          <h3>🛡️ Robust 404 Fallback</h3>
          <p>
            Gracefully captures undefined URL paths with a dedicated Not Found wildcard route and recovery navigation.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
        <Link to="/tasks" className="btn-primary" style={{ textDecoration: 'none' }}>
          Open Task Manager →
        </Link>
        <Link to="/contact" className="nav-link" style={{ padding: '0.75rem 1.5rem', border: '1px solid #334155' }}>
          Go to Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;