import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { skills } from '../data/skills';
import '../App.css';

export default function AboutMe() {
  const introRef = React.useRef<HTMLElement>(null);
  const skillsRef = React.useRef<HTMLElement>(null);
  const connectRef = React.useRef<HTMLElement>(null);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const sections = [introRef, skillsRef, connectRef];
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      sections.forEach((ref) => {
        if (ref.current) {
          ref.current.classList.add('is-visible');
        }
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="about-me-page">
      <section ref={introRef} className="about-me-intro animated-section">
        <div className="about-me-image-container">
          <img
            src="https://placehold.co/400x400/1f2937/34d399?text=Your+Photo"
            alt="Alfred Dexter"
            className="about-me-image"
          />
        </div>
        <div className="about-me-text-container">
          <h1 className="about-me-title">Alfred Dexter</h1>
          <p className="about-me-subtitle">Software Developer & AI Enthusiast</p>
          <p className="about-me-description">
            I’m a passionate and results-driven Software Developer and Computer Science student at Binus University. My journey into tech started with a curiosity about how things work, and it has grown into a love for crafting intelligent, efficient, and user-focused applications.
          </p>
          <p className="about-me-description">
            I specialize in web development, AI, and IoT, with experience spanning machine learning, computer vision, and modern frameworks like React and ASP.NET. I enjoy bridging software with real-world impact—from developing smart systems to designing user-friendly platforms.
          </p>
        </div>
      </section>

      <section ref={skillsRef} className="skills-section animated-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-category">
              <h3 className="skill-category-title">{skill.category}</h3>
              <div className="skills-list">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="skill-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={connectRef} className="connect-section animated-section">
        <h2 className="section-title">Let's Connect!</h2>
        <p className="connect-description">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:alfred.dexter.2005@gmail.com" className="contact-link">
            <Mail size={24} />
            <span>alfred.dexter.2005@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/alfred-dexter/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/IntroPret" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Github size={24} />
            <span>GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}