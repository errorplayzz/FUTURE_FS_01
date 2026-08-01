import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="noise-overlay"></div>
      <div className="navbar-container container">
        <a href="#home" className="logo">
          Portfolio<span>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
          
          <div className="social-links">
            <a href="https://github.com/errorplayzz" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/shashank-mahariya/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-social-links">
          <a href="https://github.com/errorplayzz" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/shashank-mahariya/" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
          <a href="mailto:shashankmahariya.tech@gmail.com"><Mail size={24} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
