import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <nav className="nav">
          <a className="nav-link" href="#home">&lt;/Home&gt;</a>
          <a className="nav-link" href="#about">&lt;/AboutMe&gt;</a>
          <a className="nav-link" href="#skills">&lt;/Skills&gt;</a>
          <a className="nav-link" href="#projects">&lt;/Projects&gt;</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
