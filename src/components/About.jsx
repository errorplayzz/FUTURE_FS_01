import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
  const revealRef = useScrollReveal();
  const skills = [
    'JavaScript / TypeScript', 'React & Next.js', 'Node.js', 
    'SQL & MongoDB', 'HTML / CSS', 'Python', 
    'Git & GitHub', 'AI Prompt Engineering'
  ];

  return (
    <section id="about" className="about section reveal" ref={revealRef}>
      <div className="container">
        <h2 className="section-title">
          <span>01.</span> About Me
        </h2>
        
        <div className="bento-grid">
          {/* Box 1: Text Intro */}
          <div className="bento-item text-box">
            <div className="noise-overlay"></div>
            <p className="bento-text-large">
              Hello! I'm Shashank, a developer currently pursuing BCA at St. Andrews Institute. 
            </p>
            <p className="bento-text-small">
              I'm passionate about building robust backend systems, automating complex workflows, and mastering AI-assisted application development.
            </p>
          </div>

          {/* Box 2: Terminal */}
          <div className="bento-item terminal-box">
            <div className="noise-overlay"></div>
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="close"></span>
                <span className="minimize"></span>
                <span className="maximize"></span>
              </div>
              <div className="terminal-title">profile.json</div>
            </div>
            <div className="terminal-body">
              <pre>
                <code>
<span className="keyword">const</span> <span className="variable">dev</span> = {'{'}
  <span className="property">role</span>: <span className="string">"Full Stack"</span>,
  <span className="property">focus</span>: [
    <span className="string">"Backend"</span>,
    <span className="string">"AI-Dev"</span>
  ]
{'}'};
                </code>
              </pre>
            </div>
          </div>

          {/* Box 3: Location */}
          <div className="bento-item location-box">
            <div className="noise-overlay"></div>
            <div className="location-dot"></div>
            <h3>Based in</h3>
            <p>Delhi-NCR, India</p>
            <div className="globe-abstract"></div>
          </div>

          {/* Box 4: Skills */}
          <div className="bento-item skills-box">
            <div className="noise-overlay"></div>
            <h3>Tech Arsenal</h3>
            <div className="skills-tags">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
