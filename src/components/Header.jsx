import React from 'react';
import { Home, User, Briefcase, BookOpen, GalleryHorizontal, Sun } from 'lucide-react';

// The styles are now in the main App.css file, loaded by App.js
export default function Header() {
  return (
    <header className="floating-header">
      <nav className="header-nav">
        <a href="#hero" className="nav-icon-link" aria-label="Home">
          <Home size={20} />
        </a>
        <div className="separator"></div>
        <a href="#about" className="nav-link">
          <User size={18} />
          <span>About</span>
        </a>
        <a href="#projects" className="nav-link">
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

