import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type AboutProps = {};

const About = React.forwardRef<HTMLElement, AboutProps>((props, ref) => {
  return (
    <section id="about" className="about-section animated-section" ref={ref}>
      <div className="section-content-wrapper">
        <div className="about-image-container">
          <img
            src="fotoprof.JPG"
            alt="A professional headshot of Your Name"
            className="about-image"
          />
        </div>
        <div className="about-text-container">
          <h2 className="section-title">About Me</h2>
          <h3 className="about-paragraph">
            Hi, I’m Alfred Dexter :3
          </h3>
          <p className="about-paragraph">
            I’m a passionate and results-driven Software Developer and Computer Science student at
            Binus University. My journey into tech started with curiosity about how things work,
            and it has grown into a love for crafting intelligent, efficient,
            and user-focused applications.
          </p>
          <p className="about-paragraph">
            I specialize in web development, AI, and IoT, with experience spanning machine learning,
            computer vision, and modern frameworks like React and ASP.NET.
            I enjoy bridging software with real-world impact — from developing
            smart systems to designing user-friendly platforms.
          </p>
          <div className="about-me-link-container">
            <Link to="/aboutme" className="about-me-link">
              <span>Know Me Better</span>
              <ArrowRight size={20} className="arrow-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;