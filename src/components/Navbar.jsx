import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="brand-link">
          24CS024 | React App
        </NavLink>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Task Manager (useState)
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact Form
            </NavLink>
          </li>
          <li>
            <NavLink to="/invalid-demo-route" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              404 Test
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;