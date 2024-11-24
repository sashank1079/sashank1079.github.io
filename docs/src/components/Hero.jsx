import React, { useState, useEffect } from 'react';
import './Hero.css';
import bitmoji from '../assets/bitmoji.png'; // Default image
import bitmojiSmile from '../assets/bitmoji-smile.png'; // Hover image
import resume from '../assets/resume_sashank.pdf';
import bitmojExcited from '../assets/bitmoji-excited.png';

const greetings = [
  "Hi", // English
  "Hola", // Spanish
  "नमस्ते", // Hindi
  "你好", // Chinese (Mandarin)
  "నమస్కారం", // Telugu
  "Bonjour", // French
  "Ciao", // Italian
  "こんにちは", // Japanese
  "Hallo", // German
  "안녕하세요", // Korean
  "Olá", // Portuguese
  "مرحبا", // Arabic
  "שלום", // Hebrew
  "કેમ છો?", // Gujarati
  "வணக்கம்", // Tamil
];

const Hero = () => {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [currentImage, setCurrentImage] = useState(bitmoji); // Image state

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
        <span className="greeting">{currentGreeting}</span>, I'm
      </h2>
      <h1 className="name">
        {Array.from("Sashank Machiraju").map((letter, index) => (
          <span key={index} className={`letter ${letter === ' ' ? 'space' : ''}`}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>
      <h2 className="tagline">I'm an AI and Data enthusiast.</h2>
      <p className="description">
      Graduate student in Information Systems skilled in building web applications, developing data workflows, leveraging cloud technologies, and integrating AI. 
      Focused on crafting practical solutions that enhance functionality and usability.
      </p>
      <div className="avatar">
        {/* Bitmoji with hover effect */}
        <a
          href={resume} // Replace with your resume URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={currentImage}
            alt="My Bitmoji"
            className="bitmoji-image"
            onMouseEnter={() => setCurrentImage(bitmojExcited)} // Change to smile on hover
            onMouseLeave={() => setCurrentImage(bitmoji)} // Revert back on leave
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
