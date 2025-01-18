import React from 'react';
import './MSS.css';

function MSS() {
  return (
    <div className="mss-container">
     
      <section className="mss-details">
        <h2>Project Features</h2>
        <ul>
          <li>Static website design with multiple pages.</li>
          <li>Implemented navigation using React Router.</li>
          <li>Responsive design with modern CSS styling.</li>
          <li>Contact form for user interaction.</li>
        </ul>
      </section>
      <section className="mss-summary">
        <h2>Purpose</h2>
        <p>
          This project is a practice exercise to understand and implement core web development techniques. 
          It serves as a foundation for more complex web applications, focusing on:
        </p>
        <ul>
          <li>Frontend design using React and CSS.</li>
          <li>Static routing using React Router.</li>
          <li>Preparing for integration with a backend and database in future iterations.</li>
        </ul>
      </section>
      
    </div>
  );
}

export default MSS;
