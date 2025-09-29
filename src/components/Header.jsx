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
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getLinkClass = (section) => {
    return activeSection === section ? 'nav-link active' : 'nav-link';
  };

  const getIconLinkClass = (section) => {
    return activeSection === section ? 'nav-icon-link active' : 'nav-icon-link';
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