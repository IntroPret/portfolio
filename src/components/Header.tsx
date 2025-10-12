import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, User, Briefcase, Sun, Moon, LucideProps } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  theme: string;
  toggleTheme: () => void;
}

const navLinks: { id: string; icon: React.FC<LucideProps>; text: string }[] = [
  { id: 'about', icon: User, text: 'About' },
  { id: 'projects', icon: Briefcase, text: 'Projects' },
];

export default function Header({ activeSection ,theme, toggleTheme} : HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
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

  const getLinkClass = (section: string) => {
    return activeSection === section ? 'nav-link active' : 'nav-link';
  };

  const getIconLinkClass = (section: string) => {
    return activeSection === section ? 'nav-icon-link active' : 'nav-icon-link';
  };

  return (
    <header className="floating-header">
      <nav className="header-nav">
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className={getIconLinkClass('hero')}
          aria-label="Scroll to hero section"
          aria-current={activeSection === 'hero' ? 'page' : undefined}
        >
          <Home size={20} />
        </button>
        <div className="separator"></div>
        {navLinks.map(({ id, icon: Icon, text }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleNavClick(id)}
            className={getLinkClass(id)}
            aria-label={`Scroll to ${text} section`}
            aria-current={activeSection === id ? 'page' : undefined}
          >
            <Icon size={18} />
            <span>{text}</span>
          </button>
        ))}
        <div className="separator"></div>
        <button
          type="button"
          className="nav-icon-link"
          aria-label="Toggle color theme"
          aria-pressed={theme === 'light'}
          onClick={toggleTheme}
        >
          {theme !== 'light' ? <Moon size={20} /> : <Sun size={20} />}
          <span className="sr-only">Switch to {theme === 'light' ? 'dark' : 'light'} mode</span>
        </button>
      </nav>
    </header>
  );
}