import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, User, Briefcase, BookOpen, GalleryHorizontal, Sun } from 'lucide-react';

export default function Header({ activeSection }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    // If we are not on the main page, navigate there first and pass the section to scroll to
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If we are already on the main page, just scroll smoothly
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
        <button onClick={() => handleNavClick('about')} className={getLinkClass('about')}>
          <User size={18} />
          <span>About</span>
        </button>
        <button onClick={() => handleNavClick('projects')} className={getLinkClass('projects')}>
          <Briefcase size={18} />
          <span>Projects</span>
        </button>
        <button onClick={() => handleNavClick('blog')} className="nav-link">
          <BookOpen size={18} />
          <span>Blog</span>
        </button>
        <button onClick={() => handleNavClick('gallery')} className="nav-link">
          <GalleryHorizontal size={18} />
          <span>Gallery</span>
        </button>
        <div className="separator"></div>
        <button className="nav-icon-link" aria-label="Toggle theme">
          <Sun size={20} />
        </button>
      </nav>
    </header>
  );
}