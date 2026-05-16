import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Web Database Course Project</span>
          <h1>Welcome to My Project</h1>
          <p>
            This web application is part of my <strong>Web Database Course Project</strong>.
            It showcases skills in React, routing, and modern web development practices.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/services" className="btn btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="about-section page-section">
        <div className="section-inner">
          <h2>About This Project</h2>
          <p>
            This project demonstrates the integration of modern web technologies such as:
          </p>
          <ul className="feature-list">
            <li>React.js for frontend development</li>
            <li>React Router for navigation</li>
            <li>Custom CSS for styling</li>
            <li>Responsive design for all devices</li>
          </ul>
          <p>
            It is designed to provide a dynamic and user-friendly experience, showcasing how
            multiple pages and components work seamlessly together.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-inner">
          <h2>Get Started</h2>
          <p>Use the navigation above to explore About, Services, Contact, and the Project page.</p>
          <Link to="/contact" className="btn btn-accent">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
