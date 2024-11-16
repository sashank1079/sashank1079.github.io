import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css'; // Make sure to create this CSS file

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="education" className="education-section mb-5" data-aos="fade-up">
      <h2 className="section-title" data-aos="fade-up">Education</h2>
      
      <div className="timeline">
        {/* Timeline Item 1 */}
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Northeastern University</h3>
            <p>Master of Science in Information Systems (Jan 2023 - May 2025)</p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Birla Institute of Technology and Science, Pilani</h3>
            <p>Bachelor of Engineering in Computer Science (Aug 2018 - Jul 2022)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
