import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "I build production-ready web apps.",
    "I engineer scalable backends.",
    "I design AI-assisted workflows.",
    "I create seamless user experiences."
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="hero section">
      <div className="hero-container container">
        <div className="hero-content">
          <p className="hero-greeting animate-fade-in delay-100">Hi, my name is</p>
          <h1 className="hero-name text-gradient animate-fade-in delay-200">Shashank Mahariya.</h1>
          <h1 className="hero-subtitle animate-fade-in delay-300">
            {text}<span className="cursor">|</span>
          </h1>
          
          <p className="hero-description animate-fade-in delay-400">
            I'm a Software Developer focused on building scalable products using React, Next.js, Node.js and AI-assisted workflows. I'm passionate about backend engineering, automation, and creating clean architectures with great user experiences.
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
        <div className="noise-overlay"></div>
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
    </section>
  );
};

export default Hero;
