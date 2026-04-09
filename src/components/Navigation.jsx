import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navigation configuration
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/herbs', label: 'Herbs' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/register', label: 'Register' },
  { path: '/feedback', label: 'Feedback' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/about', label: 'About' }
];

/**
 * Navigation Component
 * Uses React Router's Link for navigation
 */
function Navigation() {
  const location = useLocation();

  return (
    <nav className="nav">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={location.pathname === link.path ? 'active' : ''}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
