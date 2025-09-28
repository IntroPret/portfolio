import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css'; 

const allProjects = [
    {
        id: 1,
        title: 'Project One',
        description: 'A brief description of the first amazing project that showcases your skills in React and modern web development.',
        imageUrl: 'https://placehold.co/600x400/34d399/1f2937?text=Project+1',
        tags: ['React', 'Node.js', 'CSS Grid'],
      },
      {
        id: 2,
        title: 'Project Two',
        description: 'A brief description of the second amazing project, highlighting your ability to solve complex problems.',
        imageUrl: 'https://placehold.co/600x400/34d399/1f2937?text=Project+2',
        tags: ['JavaScript', 'API', 'SCSS'],
      },
      {
        id: 3,
        title: 'Project Three',
        description: 'A brief description of the third amazing project that showcases your skills in React and modern web development.',
        imageUrl: 'https://placehold.co/600x400/34d399/1f2937?text=Project+3',
        tags: ['React', 'Node.js', 'CSS Grid'],
      },
      {
        id: 4,
        title: 'Project Four',
        description: 'A brief description of the fourth amazing project, highlighting your ability to solve complex problems.',
        imageUrl: 'https://placehold.co/600x400/34d399/1f2937?text=Project+4',
        tags: ['JavaScript', 'API', 'SCSS'],
      },
      {
        id: 5,
        title: 'Project Five',
        description: 'A brief description of the fifth amazing project that showcases your skills in React and modern web development.',
        imageUrl: 'https://placehold.co/600x400/34d399/1f2937?text=Project+5',
        tags: ['React', 'Node.js', 'CSS Grid'],
      },
      {
        id: 6,
        title: 'Project Six',
        description: 'A brief description of the sixth amazing project, highlighting your ability to solve complex problems.',
        imageUrl: 'https://placehold.co/600x400/34d399/1f2937?text=Project+6',
        tags: ['JavaScript', 'API', 'SCSS'],
      },
];

export default function AllProjects() {
  const navigate = useNavigate();
  const projectCardRefs = useRef([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the item is visible
      }
    );

    projectCardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      projectCardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [allProjects]); // Rerun if projects array changes

  return (
    <>
      <Header />
      <div className="all-projects-page">
        <h1 className="section-title">All My Projects</h1>
        <div className="projects-grid">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card animated-item" // Add animated-item class
              ref={(el) => (projectCardRefs.current[index] = el)} // Assign ref
            >
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}