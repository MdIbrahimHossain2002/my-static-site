import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <header className="services-header">
        <h1>My Services</h1>
        <p>Crafting exceptional web experiences with cutting-edge technologies.</p>
      </header>

      <div className="services-list">
        <div className="service-item">
          <h2>Web Development</h2>
          <p>
            I specialize in building dynamic, responsive, and user-friendly websites using 
            <strong> PHP, JavaScript, and React</strong>. From backend logic to frontend interactivity, I handle it all.
          </p>
        </div>

        <div className="service-item">
          <h2>Web Design</h2>
          <p>
            Creating visually appealing and intuitive designs with <strong>HTML, CSS, and JavaScript</strong>. 
            I focus on delivering clean, modern, and accessible designs for all devices.
          </p>
        </div>

        <div className="service-item">
          <h2>React Applications</h2>
          <p>
            Developing fast and scalable single-page applications (SPAs) with <strong>React.js</strong>. 
            I ensure seamless performance and a great user experience.
          </p>
        </div>

        <div className="service-item">
          <h2>Full-Stack Solutions</h2>
          <p>
            Combining frontend and backend technologies to deliver robust and fully-functional solutions. 
            My expertise in <strong>PHP</strong> and <strong>React</strong> ensures seamless integration of all components.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
