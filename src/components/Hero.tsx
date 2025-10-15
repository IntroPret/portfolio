import React from 'react';
import { Download } from 'lucide-react';
import '../App.css';

type HeroProps = {};

const Hero = React.forwardRef<HTMLElement, HeroProps>((props, ref) => {
  return (
    <section id="hero" className="hero-section animated-section" ref={ref}>
      <div className="hero-content">
        <h1 className="hero-title">Hi, I’m Alfred — Software Developer & AI Enthusiast</h1>
        <p className="hero-subtitle">
          Bridging Web Development, AI, and IoT into real-world solutions.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-button">
            View My Work
          </a>
          <a href="/alfred-dexter-cv.pdf" download className="hero-button hero-button-secondary">
            <Download size={20} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
});

export default Hero;