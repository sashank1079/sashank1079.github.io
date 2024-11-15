import React from 'react';

function App() {
  return (
    <div className="container py-5">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="display-4 text-primary">My Portfolio</h1>
        <p className="lead">Welcome to my personal website!</p>
        <nav className="nav justify-content-center">
          <a className="nav-link text-secondary" href="#about">
            About Me
          </a>
          <a className="nav-link text-secondary" href="#education">
            Education
          </a>
          <a className="nav-link text-secondary" href="#skills">
            Skills
          </a>
          <a className="nav-link text-secondary" href="#experience">
            Experience
          </a>
          <a className="nav-link text-secondary" href="#projects">
            Projects
          </a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="mb-5">
        <h2 className="text-secondary">About Me</h2>
        <p>
          Hello! I'm Sashank Machiraju, a Master's student in Information Systems at Northeastern
          University, with a passion for software development and AI.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-5">
        <h2 className="text-secondary">Education</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Northeastern University</h5>
            <p className="card-text">Master of Science in Information Systems (Dec 2024)</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">BITS Pilani</h5>
            <p className="card-text">Bachelor of Engineering in Computer Science (Jul 2022)</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-5">
        <h2 className="text-secondary">Skills</h2>
        <ul className="list-group">
          <li className="list-group-item">Java</li>
          <li className="list-group-item">Python</li>
          <li className="list-group-item">SQL</li>
          <li className="list-group-item">ReactJS</li>
          <li className="list-group-item">AWS</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-5">
        <h2 className="text-secondary">Experience</h2>
        <div className="mb-3">
          <h5>AI Engineer Co-Op</h5>
          <p>
            <strong>Easybee AI, Boston, MA</strong>
          </p>
          <ul>
            <li>Developed chat and voice agents using Python and OpenAI SDK.</li>
            <li>Built a CI/CD pipeline with GitHub Actions and deployed applications on AWS.</li>
          </ul>
        </div>
        <div>
          <h5>Web Development Intern</h5>
          <p>
            <strong>Al Sagr National Insurance Company, Dubai</strong>
          </p>
          <ul>
            <li>Worked on web application development and optimization.</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-5">
        <h2 className="text-secondary">Projects</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">IMDB Movies Data ETL & BI Reporting</h5>
            <p>
              Built a data pipeline using Talend Studio, Apache Spark, and Power BI to analyze and
              visualize movie data.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Face Mask Detection</h5>
            <p>
              Developed a real-time face mask detection system using TensorFlow and OpenCV, ensuring
              safety in public spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-5">
        <p className="text-muted">&copy; 2024 Sashank Machiraju. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
