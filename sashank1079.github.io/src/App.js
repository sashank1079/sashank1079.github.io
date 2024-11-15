import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Sashank Machiraju</h1>
        <p>857-424-8002 | <a href="mailto:machiraju.s@northeastern.edu">machiraju.s@northeastern.edu</a> | <a href="https://linkedin.com/in/sashank-machiraju/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Northeastern University, Boston, MA</strong><br/>
            Master of Science in Information Systems (Dec 2024)<br/>
            Relevant Coursework: Application Engineering, Data Management, Web Development
          </li>
          <li>
            <strong>BITS Pilani, Dubai Campus</strong><br/>
            Bachelor of Engineering in Computer Science (Jul 2022)<br/>
            Relevant Coursework: Data Science, Data Mining, Algorithm Analysis
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <ul>
          <li>Programming Languages: Java, Python, SQL, JavaScript</li>
          <li>Web Technologies: HTML, CSS, Angular, ReactJS, NodeJS</li>
          <li>Databases: MongoDB, PostgreSQL, MySQL, Microsoft SQL Server, Amazon S3</li>
          <li>Data Tools: Power BI, Tableau, Alteryx, Talend Studio, Azure Data Factory, Snowflake, Apache Spark</li>
          <li>Cloud & DevOps: AWS (EC2, RDS, Lambda), GitHub Actions, CI/CD, Gunicorn</li>
          <li>Frameworks & Libraries: Pandas, SciPy, Scikit-Learn, TensorFlow, OpenCV</li>
        </ul>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <div>
          <h3>EasyBee AI, Boston, MA</h3>
          <p>AI Engineer Co-Op (Aug 2024 - Present)</p>
          <ul>
            <li>Developed advanced chat and voice agents using Python and OpenAI SDK</li>
            <li>Built a CI/CD pipeline with GitHub Actions and deployed applications on AWS using Gunicorn</li>
            <li>Implemented a vector database for semantic image retrieval, enhancing search precision</li>
            <li>Configured AWS services like EC2, RDS, Lambda, and EventBridge for scalable infrastructure</li>
          </ul>
        </div>

        <div>
          <h3>Al Sagr National Insurance Company, Dubai, UAE</h3>
          <p>Web Development Intern (Jan 2022 - Jul 2022)</p>
          <ul>
            <li>Led the deployment of a web application, improving operational efficiency by 30%</li>
            <li>Developed Crystal Reports for insurance claims, streamlining the reporting process</li>
            <li>Enhanced UI using JavaScript, React, and Angular, improving data handling efficiency</li>
          </ul>
        </div>

        <div>
          <h3>Verudix Software Solutions Pvt Ltd, Hyderabad, India</h3>
          <p>Data Analyst Intern (Jun 2020 - Aug 2020)</p>
          <ul>
            <li>Implemented sentiment analysis using Twitter API for election result prediction</li>
            <li>Visualized real-time tweet trends using sentiment data for analysis</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Academic Projects</h2>
        <div>
          <h3>IMDB Movies Data ETL & BI Reporting</h3>
          <p>Northeastern University (Dec 2023)</p>
          <ul>
            <li>Built an end-to-end ETL pipeline using Talend Studio and Apache Spark</li>
            <li>Utilized MySQL and Microsoft Azure to stage and load data</li>
            <li>Visualized data using PowerBI and Tableau for essential BI analytics</li>
          </ul>
        </div>

        <div>
          <h3>Face Mask Detection Using Keras, OpenCV, and TensorFlow</h3>
          <p>IEEE (Sept 2021 - Dec 2021)</p>
          <ul>
            <li>Pre-processed a dataset of 10,000+ labeled images for mask detection</li>
            <li>Implemented MobileNetV2 for feature extraction and classification</li>
            <li>Published results in IEEE Xplore</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
