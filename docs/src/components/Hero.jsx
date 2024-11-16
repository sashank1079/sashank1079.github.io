import React, { useState, useEffect } from 'react';
import './Hero.css';
import bitmoji from '../assets/bitmoji.png';

const greetings = ["Hi", "Hola", "नमस्ते","你好", "Bonjour", "Ciao", "Konnichiwa", "Hallo", "안녕", "olá"];

const Hero = () => {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    let greetingIndex = 0;
    const interval = setInterval(() => {
      greetingIndex = (greetingIndex + 1) % greetings.length; // Cycle through greetings
      setCurrentGreeting(greetings[greetingIndex]);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section id="hero" className="hero-section text-center">
      <h2 className="greeting">
        <span className="highlight">{currentGreeting}</span>, I'm
      </h2>
      <h1 className="name">
        {Array.from("Sashank Machiraju").map((letter, index) => (
          <span key={index} className={`letter ${letter === ' ' ? 'space' : ''}`}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>
      <h2 className="tagline">I design & code for web.</h2>
      <p className="description">
        Web Developer with experience in software development, AI, and digital design.
        I love fun web UI, collaboration, and creating impactful products.
      </p>
      <div className="avatar">
        <img src={bitmoji} alt="My Bitmoji" className="bitmoji-image" />
      </div>
    </section>
  );
};

export default Hero;
