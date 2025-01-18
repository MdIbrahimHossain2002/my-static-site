import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Static Website</h1>
        <p>Your one-stop destination for quality services and solutions.</p>
      </header>
      <section className="features">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>High-quality services tailored to your needs.</li>
          <li>Dedicated support and customer satisfaction.</li>
          <li>Affordable solutions with no compromise on quality.</li>
        </ul>
      </section>
     
    </div>
  );
}

export default Home;
