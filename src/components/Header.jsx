import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, User, Briefcase, Sun } from 'lucide-react';

const navLinks = [
  { id: 'about', icon: User, text: 'About' },
  { id: 'projects', icon: Briefcase, text: 'Projects' },
];

export default function Header({ activeSection }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        if (sectionId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const getLinkClass = (section) => {
    // If we're on the All Projects page, force the 'projects' link to be active.
    if (location.pathname === '/projects' && section === 'projects') {
      return 'nav-link active';
    }
    // Otherwise, base it on the scroll position on the main page.
    return activeSection === section ? 'nav-link active' : 'nav-link';
  };

  const getIconLinkClass = (section) => {
    // Only make the home icon active if we are on the main page and at the top.
    if (location.pathname === '/' && activeSection === section) {
      return 'nav-icon-link active';
    }
    return 'nav-icon-link';
  };

  return (
    <header className="floating-header">
      <nav className="header-nav">
        <button onClick={() => handleNavClick('hero')} className={getIconLinkClass('hero')} aria-label="Home">
          <Home size={20} />
        </button>
        <div className="separator"></div>
        {navLinks.map(({ id, icon: Icon, text }) => (
          <button key={id} onClick={() => handleNavClick(id)} className={getLinkClass(id)}>
            <Icon size={18} />
            <span>{text}</span>
          </button>
        ))}
        <div className="separator"></div>
        <button className="nav-icon-link" aria-label="Toggle theme">
          <Sun size={20} />
        </button>
      </nav>
    </header>
  );
}