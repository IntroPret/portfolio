import React from 'react';
import '../App.css'; // The styles will be in App.css

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Software Developer & Creative Thinker</h1>
        <p className="hero-subtitle">
          I build beautiful, responsive, and user-friendly web applications.
        </p>
        <a href="#projects" className="hero-button">
          View My Work
        </a>
      </div>
    </section>
  );
}
