import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { allProjects } from '../data/project';
import '../App.css';

type projectsProps = {};

const projects = allProjects.slice(0, 2);

const Projects = React.forwardRef<HTMLElement, projectsProps>((props, ref) => {
  return (
    <section id="projects" className="projects-section animated-section" ref={ref}>
      <div className="projects-header">
        <h2 className="section-title">My Recent Work</h2>
        <div className="view-all-container">
            <Link
                to="/projects"
                state={{ scrollY: window.scrollY }}
                className="view-all-link"
            >
                <span>View All Projects</span>
                <ArrowRight size={20} className="arrow-icon" />
            </Link>
        </div>
      </div>
        <div className="projects-grid home-projects-grid">
            {projects.map((project) => (
                <div key={project.id} className="project-card">
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
    </section>
  );
});

export default Projects;