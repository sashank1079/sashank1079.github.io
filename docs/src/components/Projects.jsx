import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="projects" className="mb-5" data-aos="fade-up">
      <h2 className="text-dark-blue">Projects</h2>
      <div className="card" data-aos="fade-up">
        <h3>IMDB Movies Data ETL & BI Reporting</h3>
        <p>Built a data pipeline using Talend Studio, Apache Spark, and Power BI to analyze and visualize movie data.</p>
      </div>
      <div className="card" data-aos="fade-up">
        <h3>Face Mask Detection</h3>
        <p>Developed a real-time face mask detection system using TensorFlow and OpenCV.</p>
      </div>
    </section>
  );
};

export default Projects;