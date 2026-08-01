import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="noise-overlay"></div>
      <div className="container footer-container">
        <div className="footer-top">
          <h2 className="footer-cta">Let's build something <span className="text-gradient">epic.</span></h2>
          <p className="footer-sub-cta">Currently open for new opportunities.</p>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <h1 className="footer-logo">SHASHANK.</h1>
            <p className="footer-copyright">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div className="footer-social-pills">
            <a href="https://github.com/errorplayzz" target="_blank" rel="noreferrer" className="social-pill" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shashank-mahariya/" target="_blank" rel="noreferrer" className="social-pill" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:shashankmahariya.tech@gmail.com" className="social-pill" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
