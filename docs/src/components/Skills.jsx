import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="mb-5 skills-section">
      <h2 className="text-dark-blue">My Skills</h2>
      <div className="skills-category">
        <h3 className="category-title">Programming Languages</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="/path/to/bash-icon.png" alt="Bash" />
            <p>Bash</p>
          </div>
          <div className="skill-card">
            <img src="/path/to/java-icon.png" alt="Java" />
            <p>Java</p>
          </div>
          <div className="skill-card">
            <img src="/path/to/python-icon.png" alt="Python" />
            <p>Python</p>
          </div>
          <div className="skill-card">
            <img src="/path/to/javascript-icon.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
        </div>
      </div>
      <div className="skills-category">
        <h3 className="category-title">Front-End</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="/path/to/react-icon.png" alt="React" />
            <p>React</p>
          </div>
          <div className="skill-card">
            <img src="/path/to/html-icon.png" alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="skill-card">
            <img src="/path/to/css-icon.png" alt="CSS" />
            <p>CSS</p>
          </div>
        </div>
      </div>
      <div className="skills-category">
        <h3 className="category-title">Back-End and Databases</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="/path/to/nodejs-icon.png" alt="Node.js" />
            <p>Node.js</p>
          </div>
          <div className="skill-card">
            <img src="/path/to/mysql-icon.png" alt="MySQL" />
            <p>MySQL</p>
          </div>
          <div className="skill-card">
            <img src="/path/to/mongodb-icon.png" alt="MongoDB" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;