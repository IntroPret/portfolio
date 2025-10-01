import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';
import AboutMe from './pages/AboutMe';

function App() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useLayoutEffect(() => {
    if (location.pathname === '/') {
      if (typeof location.state?.scrollY === 'number') {
        window.scrollTo(0, location.state.scrollY);
      } else if (location.state?.scrollTo) {
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
          observer.unobserve(ref.current);
        }
      });
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <Header activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero ref={heroRef} />
            <About ref={aboutRef} />
            <Projects ref={projectsRef} />
          </main>
        } />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;