import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const Projects = () => {
  const revealRef = useScrollReveal();

  const featuredProjects = [
    {
      title: 'Medimade – Premium Medical Clinic',
      description: 'A modern, high-performance landing page for a real local business featuring Awwwards-style UI, scroll-triggered Framer Motion animations, and a responsive Bento Box layout.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      external: '#'
    },
    {
      title: 'TaskFlow – Full Stack Kanban Board',
      description: 'A comprehensive task management application with real-time drag-and-drop functionality, RESTful API integration, and MongoDB database for persistent storage.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      external: '#'
    },
    {
      title: 'VINGOO – Financial Crime Platform',
      description: 'An AI-powered platform for analysing financial transaction patterns and suspicious account activity, featuring custom dashboards for investigation workflows.',
      tech: ['React', 'Node.js', 'AI Workflows'],
      github: '#',
      external: '#'
    },
    {
      title: 'Rider Saathi – Road Safety',
      description: 'A full-stack road safety platform for riders featuring authentication, accident reporting, emergency alerts, and location-based APIs.',
      tech: ['React', 'Node.js', 'MySQL'],
      github: '#',
      external: '#'
    },
    {
      title: 'VIKASSS – Cooperative Farming',
      description: 'An AI-powered full-stack platform connecting farmers, buyers, and transport providers with a modular architecture for efficient operations.',
      tech: ['React', 'FastAPI', 'Python'],
      github: '#',
      external: '#'
    }
  ];

  return (
    <section id="projects" className="projects section reveal" ref={revealRef}>
      <div className="container">
        <h2 className="section-title">
          <span>02.</span> Some Things I've Built
        </h2>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-content-inner">
                <div className="project-top">
                  <div className="folder-icon">
                    <Folder size={40} color="var(--accent-color)" strokeWidth={1} />
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="project-title">
                  <a href={project.external || project.github} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                
                <ul className="project-tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
