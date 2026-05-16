import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import MSS from './MSS';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="app-nav">
          <Link to="/" className="nav-brand">
            My Static Site
          </Link>
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Services
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Contact
            </NavLink>
            <NavLink to="/mss" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Project
            </NavLink>
          </div>
          <div className="nav-actions">
            <Link to="/contact" className="nav-cta">
              Get in Touch
            </Link>
          </div>
        </nav>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mss" element={<MSS />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <div className="footer-inner">
            <p>&copy; 2026 My Static Website. All rights reserved.</p>
            <p className="footer-social">
              Follow us:
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <span className="footer-divider">·</span>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <span className="footer-divider">·</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
