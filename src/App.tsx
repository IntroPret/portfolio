import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';
import AboutMe from './pages/AboutMe';

interface LocationState {
  scrollY?: number;
  scrollTo?: string;
}

function App() {
  const location = useLocation();
  const state = location.state as LocationState | null;

  const [activeSection, setActiveSection] = React.useState<string>('');
  const [theme, setTheme] = React.useState<string>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  const heroRef = React.useRef<HTMLElement>(null);
  const aboutRef = React.useRef<HTMLElement>(null);
  const projectsRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme);
    window.scrollTo(0, 0);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  React.useLayoutEffect(() => {
    if (location.pathname === '/') {
      if (typeof state?.scrollY === 'number') {
        window.scrollTo(0, state.scrollY);
      } else if (state?.scrollTo) {
        setTimeout(() => {
          const element = document.getElementById(state.scrollTo as string);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (state.scrollTo === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 150);
      }
    }
  }, [location.pathname, state]);

  React.useEffect(() => {
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
        rootMargin: "-100px 0px -50% 0px",
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