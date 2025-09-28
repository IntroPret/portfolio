import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, BookOpen, GalleryHorizontal, Sun } from 'lucide-react';

export default function Header({ activeSection }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const getLinkClass = (section) => {
    return activeSection === section ? 'nav-link active' : 'nav-link';
  };

  const getIconLinkClass = (section) => {
    return activeSection === section ? 'nav-icon-link active' : 'nav-icon-link';
  };

  return (
    <header className="floating-header">
      <nav className="header-nav">
        {isHomePage ? (
          <a href="#hero" className={getIconLinkClass('hero')} aria-label="Home">
            <Home size={20} />
          </a>
        ) : (
          <Link to="/" className="nav-icon-link" aria-label="Home">
            <Home size={20} />
          </Link>
        )}
        <div className="separator"></div>
        <a href="#about" className={getLinkClass('about')}>
          <User size={18} />
          <span>About</span>
        </a>
        <a href="#projects" className={getLinkClass('projects')}>
          <Briefcase size={18} />
          <span>Projects</span>
        </a>
        <a href="#blog" className="nav-link">
          <BookOpen size={18} />
          <span>Blog</span>
        </a>
        <a href="#gallery" className="nav-link">
          <GalleryHorizontal size={18} />
          <span>Gallery</span>
        </a>
        <div className="separator"></div>
        <button className="nav-icon-link" aria-label="Toggle theme">
          <Sun size={20} />
        </button>
      </nav>
    </header>
  );
}