import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero'); // Default active section

  useEffect(() => {
    AOS.init({ duration: 600 });

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the current section is in view
        if (
          scrollY >= sectionTop - window.innerHeight / 3 &&
          scrollY < sectionTop + sectionHeight - window.innerHeight / 3
        ) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = window.innerHeight / 2 - target.offsetHeight / 2; // Center the section
      const targetPosition = target.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      setActiveSection(id); // Update the active section when clicked
    }
  };

  return (
    <header className="header">
      <div className="nav-container">
        <ul className="nav">
          {['hero', 'about', 'education', 'skills', 'experience', 'projects'].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
