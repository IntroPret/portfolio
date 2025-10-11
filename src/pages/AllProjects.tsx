import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { allProjects } from '../data/project';
import '../App.css';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export default function AllProjects() {
  const projectCardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const currentRefs = projectCardRefs.current; // Capture the refs

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.addEventListener('animationend', function handler() {
              entry.target.classList.remove('animate-slide-in');
              entry.target.removeEventListener('animationend', handler);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    currentRefs.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Use the captured variable in the cleanup function
    return () => {
      currentRefs.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="all-projects-page">
        <h1 className="section-title">All My Projects</h1>
        <div className="projects-grid">
          {allProjects.map((project: Project, index) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="project-card animate-slide-in"
              ref={(el) => {
                projectCardRefs.current[index] = el;
              }}
              style={{textDecoration: 'none'}}
            >
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}