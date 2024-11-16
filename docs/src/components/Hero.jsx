import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const cursorInner = document.getElementById('cursor-inner');
    const cursorOuter = document.getElementById('cursor-outer');
    const links = document.querySelectorAll('a, label, button');

    document.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorInner.style.left = `${posX}px`;
      cursorInner.style.top = `${posY}px`;

      cursorOuter.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: 'forwards' }
      );
    });

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        cursorInner.classList.add('hover');
        cursorOuter.classList.add('hover');
      });
      link.addEventListener('mouseleave', () => {
        cursorInner.classList.remove('hover');
        cursorOuter.classList.remove('hover');
      });
    });
  }, []);

  return (
    <section className="hero-section text-center">
      <div className="avatar">
        <img src="/path/to/your/avatar.png" alt="Avatar" />
      </div>
      <h2 className="greeting">Namaste(); I'm</h2>
      <h1 className="name">Sashank Machiraju.</h1>
      <h2 className="tagline">I design & code for web.</h2>
      <p className="description">
        Web Developer with experience in software development, AI, and digital design.
        I love fun web UI, collaboration, and creating impactful products.
      </p>
      <button className="hero-button">Let's Talk!</button>
      <div id="cursor-inner" className="cursor-inner"></div>
      <div id="cursor-outer" className="cursor-outer"></div>
    </section>
  );
};

export default Hero;