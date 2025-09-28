import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../App.css';


const projects = [
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
];

const Projects = React.forwardRef((props, ref) => {
  return (
    <section id="projects" className="projects-section" ref={ref}>
      <h2 className="section-title">My Recent Work</h2>
        <div className="projects-grid">
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
    </section>
  );
});

export default Projects;