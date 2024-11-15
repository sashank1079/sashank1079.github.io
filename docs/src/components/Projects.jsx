import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="mb-5">
      <h2 className="text-dark-blue">Projects</h2>
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">IMDB Movies Data ETL & BI Reporting</h5>
          <p>
            Built a data pipeline using Talend Studio, Apache Spark, and Power BI to analyze and
            visualize movie data.
          </p>
        </div>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Face Mask Detection</h5>
          <p>
            Developed a real-time face mask detection system using TensorFlow and OpenCV, ensuring
            safety in public spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;