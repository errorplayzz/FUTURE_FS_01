import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-container container">
        <div className="hero-content">
          <p className="hero-greeting animate-fade-in delay-100">Hi, my name is</p>
          <h1 className="hero-name animate-fade-in delay-200">John Doe.</h1>
          <h1 className="hero-subtitle animate-fade-in delay-300">I build things for the web.</h1>
          
          <p className="hero-description animate-fade-in delay-400">
            I'm a Full Stack Web Developer specializing in building (and occasionally designing) 
            exceptional digital experiences. Currently, I'm focused on building accessible, 
            human-centered products as an intern at Future Interns.
          </p>
          
          <div className="hero-cta animate-fade-in delay-500">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn-outline">
              About Me <Download size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
    </section>
  );
};

export default Hero;
