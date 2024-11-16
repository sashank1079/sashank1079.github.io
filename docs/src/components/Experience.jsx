import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="experience" className="mb-5" data-aos="fade-up">
      <h2 className="text-dark-blue" data-aos="fade-up">Experience</h2>
      
      <div className="mb-3" data-aos="fade-up">
        <h5 data-aos="fade-up">AI Engineer Co-Op</h5>
        <p data-aos="fade-up">
          <strong>Easybee AI, Boston, MA</strong>
        </p>
        <ul>
          <li data-aos="fade-up">
            Developed chat and voice agents using Python and OpenAI SDK.
          </li>
          <li data-aos="fade-up">
            Built a CI/CD pipeline with GitHub Actions and deployed applications on AWS.
          </li>
        </ul>
      </div>
      
      <div data-aos="fade-up">
        <h5 data-aos="fade-up">Web Development Intern</h5>
        <p data-aos="fade-up">
          <strong>Al Sagr National Insurance Company, Dubai</strong>
        </p>
        <ul>
          <li data-aos="fade-up">
            Worked on web application development and optimization.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
