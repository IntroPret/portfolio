import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AllProjects from './pages/AllProjects';

function MainPage() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  // Define refs individually at the top level
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof location.state?.scrollY === 'number') {
      window.scrollTo(0, location.state.scrollY);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  useEffect(() => {
    const sections = [heroRef, aboutRef, projectsRef];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
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
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Alfred Dexter. All Rights Reserved.</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default App;