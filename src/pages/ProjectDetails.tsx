import React, { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProjects } from '../data/project';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import './ProjectDetails.css';

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = allProjects.find((p) => p.id === Number(projectId));

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="project-not-found">Project not found.</div>;
  }

  const renderSection = (title: string, items: string[] | undefined) => {
    if (!items || items.length === 0) return null;
    return (
      <section className="detail-section" aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}>
        <h3 id={title.replace(/\s+/g, '-').toLowerCase()} className="detail-section-title">{title}</h3>
        <ul className="detail-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    );
  };

  return (
    <div className="project-detail-page">
      <nav className="project-detail-nav" aria-label="breadcrumb">
        <Link to="/projects" className="back-home-link">
          <ArrowLeft size={16} />
          <span className="back-text">Back to Projects</span>
        </Link>
      </nav>

      <header className="project-detail-header">
        <div className="project-header-left">
          <h1 className="project-detail-title">{project.title}</h1>
        </div>

        <div className="project-links">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-details btn-primary repo-link"
              aria-label={`Open ${project.title} repository in new tab`}
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </a>
          )}

          {((project as any).demoUrl) && (
            <a
              href={(project as any).demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-details btn-ghost demo-link"
              aria-label={`Open ${project.title} demo in new tab`}
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </header>

      <main className="project-detail-main-grid">
        <div className="project-detail-sidebar" aria-labelledby="tech-stack-title">
          <div className="project-detail-image-wrapper">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-detail-image"
              loading="lazy"
            />
          </div>

          <div className="detail-section tech-section">
            <h3 id="tech-stack-title" className="detail-section-title">Tech Stack</h3>
            <div className="project-detail-tags" role="list">
              {project.techStack.map((tag) => (
                <span key={tag} className="project-tag" role="listitem">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-detail-content">
          <p className="project-overview">{project.overview}</p>
          {renderSection('Key Features', project.features)}
          {renderSection('Challenges', project.challenges)}
          {renderSection('What I Learned', project.learnings)}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;