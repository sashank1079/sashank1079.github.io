import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import about from '../assets/about.jpeg';
import resume from '../assets/resume_sashank.pdf'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="about" className="about-section mb-5" data-aos="fade-up">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Left Side: Text Content */}
        <div className="about-text" data-aos="fade-right">
          <h2 className="text-light-blue">About Me</h2>
          <p>
            Hi! My name is Sashank Machiraju. I'm currently pursuing a Master's in Information Systems at Northeastern University, 
            specializing in web development, data management, and user experience design. I graduated with a Bachelor's in Computer Science 
            from BITS Pilani, Dubai Campus.
          </p>
          <p>
            My professional journey includes roles such as an AI Engineer Co-op at EasyBee AI, where I developed advanced chat and voice agents, 
            and a Web Development Intern at Al Sagr National Insurance, where I enhanced operational efficiency by deploying a web application.
          </p>
          <p>
            I’m skilled in modern technologies like ReactJS, NodeJS, AWS, and Python, with experience building scalable cloud infrastructures 
            and creating visually engaging, interactive web designs.
          </p>
          <p>
            My passion lies in creating innovative web applications and bringing ideas to life on the browser. I strive to merge 
            functionality with creativity to deliver exceptional user experiences.
          </p>
          {/* Download Button */}
          <a
            href={resume} // Replace with the actual path to your resume
            className="btn btn-download"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            <i className="fas fa-file-download"></i> Download Resume
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="about-image" data-aos="fade-left">
          <img
            src={about} // Replace with the correct path to your image
            alt="About Me"
            className="rounded shadow"
          />
        </div>
        {/* Teal lines */}
        <div className="line line-horizontal"></div>
        <div className="line line-vertical"></div>

      </div>
    </section>
  );
};

export default About;
