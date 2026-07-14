import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={20} /></a>
          <a href="mailto:contact@example.com" aria-label="Email"><Mail size={20} /></a>
        </div>
        
        <div className="footer-credits">
          <a href="https://github.com/FUTURE_FS_01" target="_blank" rel="noreferrer">
            <p>Built by John Doe</p>
            <p className="task-credit">Future Interns • Task 01 • Full Stack Web Development</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
