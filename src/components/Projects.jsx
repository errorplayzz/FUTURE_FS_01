import { Github, ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Task Management App',
      description: 'A full-stack web application for managing tasks, featuring user authentication, real-time updates, and a responsive drag-and-drop interface.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: '#',
      external: '#'
    },
    {
      title: 'E-commerce Dashboard',
      description: 'An admin dashboard for e-commerce platforms to track sales, manage inventory, and analyze customer behavior with interactive charts.',
      tech: ['React', 'Chart.js', 'Firebase', 'Tailwind'],
      github: '#',
      external: '#'
    },
    {
      title: 'Weather Application',
      description: 'A beautiful, responsive weather app that provides real-time forecasts, location-based weather tracking, and interactive maps.',
      tech: ['JavaScript', 'OpenWeather API', 'CSS3', 'HTML5'],
      github: '#',
      external: '#'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">
          <span>02.</span> Some Things I've Built
        </h2>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <div className="project-top">
                  <div className="folder-icon">
                    <Folder size={40} color="var(--accent-color)" />
                  </div>
                  <div className="project-links">
                    <a href={project.github} aria-label="GitHub Link"><Github size={20} /></a>
                    <a href={project.external} aria-label="External Link"><ExternalLink size={20} /></a>
                  </div>
                </div>
                
                <h3 className="project-title">
                  <a href={project.external}>{project.title}</a>
                </h3>
                
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
              </div>
              
              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
