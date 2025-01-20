import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My Project</h1>
        <p>
          This web application is created as part of my <strong>Web Database Course Project</strong>. 
          It showcases my skills in React, routing, and modern web development practices.
        </p>
        <a href="#about" className="hero-button">Learn More</a>
      </div>
      
      <div id="about" className="about-section">
        <h2>About This Project</h2>
        <p>
          This project demonstrates the integration of modern web technologies such as:
          <ul>
            <li>React.js for frontend development</li>
            <li>React Router for navigation</li>
            <li>Custom CSS for styling</li>
            <li>Responsive design for all devices</li>
          </ul>
        </p>
        <p>
          It’s designed to provide a dynamic and user-friendly experience, showcasing how multiple pages 
          and components work seamlessly together.
        </p>
      </div>
      
      <div className="cta-section">
        <h2>Get Started</h2>
        <p>Click on the navigation links above to explore the website!</p>
      </div>
    </div>
  );
}

export default Home;
