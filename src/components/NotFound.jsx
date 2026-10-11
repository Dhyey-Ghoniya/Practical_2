import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="page-card not-found-card">
      <div className="err-code">404</div>
      <h1 className="page-title">Page Not Found</h1>
      <p className="page-subtitle" style={{ marginTop: '0.5rem' }}>
        No matching route found for path: <code style={{ color: '#f87171' }}>{location.pathname}</code>
      </p>
      <p style={{ color: '#94a3b8', marginTop: '1rem', maxWidth: '480px', margin: '1rem auto 0' }}>
        This custom 404 handler demonstrates catch-all routing (*) in React Router to prevent broken application states.
      </p>
      <Link to="/" className="btn-return">
        ← Return to Safe Homepage
      </Link>
    </div>
  );
};

export default NotFound;