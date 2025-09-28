import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';

function MainPage() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  useLayoutEffect(() => {
    // Case 1: Restore exact scroll position when coming back
    if (typeof location.state?.scrollY === 'number') {
      window.scrollTo(0, location.state.scrollY);
    } 
    // Case 2: Scroll to a specific section when navigating from another page
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
            // This part handles the active link highlighting
            setActiveSection(entry.target.id);
            
            // This new line adds the class to trigger the animation
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        // Triggers when the top of the section is 15% visible
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
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
      </main>
      <Footer/ >
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