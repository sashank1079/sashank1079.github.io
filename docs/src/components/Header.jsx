import React from 'react';

const Header = () => {
  return (
    <header className="text-center mb-5">
      <h1 className="display-4 text-dark-blue">Sashank Machiraju - Portfolio</h1>
      <p className="lead text-muted">A passionate software developer and AI enthusiast</p>
      <nav className="nav justify-content-center">
        <a className="nav-link" href="#about">
          About Me
        </a>
        <a className="nav-link" href="#education">
          Education
        </a>
        <a className="nav-link" href="#skills">
          Skills
        </a>
        <a className="nav-link" href="#experience">
          Experience
        </a>
        <a className="nav-link" href="#projects">
          Projects
        </a>
      </nav>
    </header>
  );
};

export default Header;