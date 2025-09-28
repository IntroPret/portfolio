import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-content-wrapper">
        <div className="about-image-container">
          <img 
            src="https://placehold.co/400x400/1f2937/34d399?text=Your+Photo" 
            alt="A professional headshot of Your Name"
            className="about-image"
          />
        </div>
        <div className="about-text-container">
          <h2 className="section-title">About Me</h2>
          <p className="about-paragraph">
            Hello! I'm a passionate and results-driven Software Developer based in [Your City]. My journey into the world of code began with a fascination for how things work, which quickly evolved into a love for building elegant, efficient, and user-centric web applications.
          </p>
          <p className="about-paragraph">
            I specialize in front-end development with a strong command of React, JavaScript, and modern CSS. I'm dedicated to writing clean, maintainable code and am always excited to learn new technologies and take on challenging projects. When I'm not coding, I enjoy [Your Hobby 1] and [Your Hobby 2].
          </p>
        </div>
      </div>
    </section>
  );
}
