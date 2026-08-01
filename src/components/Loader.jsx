import { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ finishLoading }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  
  const words = ["Hello.", "Namaste.", "Hola.", "Bonjour.", "Welcome."];

  useEffect(() => {
    // Flash through words at a readable pace
    const flashInterval = 450; // ms per word (increased from 300 to 450)
    
    let wordIndex = 0;
    const timer = setInterval(() => {
      wordIndex++;
      if (wordIndex >= words.length) {
        clearInterval(timer);
        
        // Trigger exit animations
        setTimeout(() => {
          setIsExiting(true);
          
          // Wait for the staggered columns to finish sliding up (max delay 0.4s + duration 0.8s = 1.2s)
          setTimeout(() => {
            finishLoading();
          }, 1200);
        }, 800); // Hold the final word "Welcome." longer (increased from 400 to 800)
      } else {
        setCurrentWord(wordIndex);
      }
    }, flashInterval);

    return () => clearInterval(timer);
  }, [finishLoading, words.length]);

  return (
    <div className={`loader-wrapper ${isExiting ? 'exiting' : ''}`}>
      {/* 5 Staggered Background Columns */}
      <div className="loader-columns">
        <div className="loader-col"></div>
        <div className="loader-col"></div>
        <div className="loader-col"></div>
        <div className="loader-col"></div>
        <div className="loader-col"></div>
      </div>
      
      {/* Flashing Typography */}
      <div className={`loader-content ${isExiting ? 'fade-out' : ''}`}>
        <h1 className="flash-text text-gradient">
          {words[currentWord]}
        </h1>
        <div className="loader-glow"></div>
      </div>
    </div>
  );
};

export default Loader;
