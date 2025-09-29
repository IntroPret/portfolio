import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';

function App() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof location.state?.scrollY === 'number') {
      window.scrollTo(0, location.state.scrollY);
    }
    else if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);


  useEffect(() => {
    const sections = [heroRef, aboutRef, projectsRef];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.15,
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
    <div className="App">
      <Header activeSection={activeSection} />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero ref={heroRef} />
            <About ref={aboutRef} />
            <Projects ref={projectsRef} />
          </main>
        } />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;