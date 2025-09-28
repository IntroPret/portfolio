import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../App.css';

// Expanded list of projects for the dedicated page
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
];

export default function AllProjects() {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goBack = (e) => {
        e.preventDefault();
        navigate(-1); // Go back one step in history
    };
    
    return (
        <div className="all-projects-page">
            <nav className="all-projects-nav">
                <a href="/" onClick={goBack} className="back-home-link">
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </a>
            </nav>
            <h1 className="section-title">All My Projects</h1>
            <div className="projects-grid">
                {allProjects.map((project) => (
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
        </div>
    );
}