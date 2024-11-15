import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="mb-5">
      <h2 className="text-dark-blue">Experience</h2>
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
  );
};

export default Experience;