import Timeline from "./Timeline"; // Import the reusable Timeline component
import './Main.css';
const Experience = () => {
  const experiences = [
    {
      isActive: true,
      content: (
        <div className="experience-content">
          <div className="experience-header">
            <h3 className="experience-title">AI Engineer Co-Op</h3>
            <span className="present-tag">Present</span>
          </div>
          <a
            href="https://easybee.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-company"
          >
            EasyBee AI
          </a>
          <p className="experience-description">
            Developed advanced chat and voice agents, implemented semantic search, and optimized cloud infrastructure with AWS and CI/CD pipelines.
          </p>
        </div>
      ),
    },
    {
      isActive: false,
      content: (
        <div className="experience-content">
          <div className="experience-header">
            <h3 className="experience-title">Web Development Intern</h3>
          </div>
          <a
            href="https://alsagrinsurance.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-company"
          >
            Al Sagr National Insurance Company
          </a>
          <p className="experience-description">
            Led the deployment of a web application, streamlined report distribution, and improved UI efficiency using React and Angular.
          </p>
        </div>
      ),
    },
    {
      isActive: false,
      content: (
        <div className="experience-content">
          <div className="experience-header">
            <h3 className="experience-title">Data Analyst Intern</h3>
          </div>
          <a
            href="https://verudix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-company"
          >
            Verudix Software Solutions Pvt Ltd
          </a>
          <p className="experience-description">
            Implemented sentiment analysis for election predictions using Twitter API and developed real-time visualizations of tweet trends.
          </p>
        </div>
      ),
    },
  ];

  return <Timeline items={experiences} />;
};

export default Experience;
