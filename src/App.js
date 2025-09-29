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
    if (location.pathname === '/') {
      if (typeof location.state?.scrollY === 'number') {
        window.scrollTo(0, location.state.scrollY);
      } else if (location.state?.scrollTo) {
        // This delay gives the IntersectionObserver time to run and make the sections visible.
        setTimeout(() => {
          const element = document.getElementById(location.state.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (location.state.scrollTo === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 150); 
      }
    }
  }, [location.pathname, location.state]);

  useEffect(() => {
    const sections = [heroRef, aboutRef, projectsRef];
    
    // Do not set up the observer if we are not on the main page.
    if (location.pathname !== '/') {
      return;
    }

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
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(ref.current);
        }
      });
    };
    // This is the key change: we re-run this effect when the pathname changes.
  }, [location.pathname]);

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