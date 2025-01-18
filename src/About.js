import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Discover who we are and what we do.</p>
      </header>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality services and solutions tailored to our clients' unique needs. 
          We believe in innovation, integrity, and excellence.
        </p>
        <h2>Our Team</h2>
        <p>
          We are a group of passionate individuals dedicated to creating exceptional experiences. 
          With expertise in various domains, we aim to make a difference.
        </p>
      </section>
      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          To be a global leader in our industry by fostering creativity and embracing technology to meet 
          the ever-changing needs of our clients.
        </p>
      </section>
    </div>
  );
}

export default About;
