import './About.css';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'React', 'Node.js', 
    'Express', 'MongoDB', 'HTML & CSS', 
    'Tailwind CSS', 'Git & GitHub'
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">
          <span>01.</span> About Me
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! My name is John and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2020 when I decided to try editing 
              custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about 
              the web!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of building projects as part of the 
              <strong> Future Interns</strong> program. My main focus these days is building accessible, 
              inclusive products and digital experiences for a variety of clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="about-image-wrapper">
            <div className="about-image">
              {/* Placeholder for Profile Picture */}
              <div className="image-placeholder">
                <span className="placeholder-text">Your Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
