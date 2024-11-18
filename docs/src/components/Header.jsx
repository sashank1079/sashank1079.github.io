import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTableau,
  SiPowerbi,
} from "react-icons/si";
import {
  DiSpark,
  DiAngularSimple,
  DiPhotoshop,
  DiIllustrator,
  DiJava,
} from "react-icons/di";
import "./Header.css";
import Timeline from "./Timeline";
import Experience from "./Experience";

const Header = () => {
  const [activeTab, setActiveTab] = useState("about");

  const educationData = [
    {
      school: "Northeastern University, Boston, MA",
      degree: "Master of Science in Information Systems",
      date: "(May 2025)",
      coursework:
        "Coursework: Application Engineering, Data Architecture and Business Intelligence, Data Management and Database Design, Web Development, User Experience Design",
    },
    {
      school: "BITS Pilani, Dubai Campus",
      degree: "Bachelor of Engineering in Computer Science",
      date: "(Jul 2022)",
      coursework: "Coursework: Data Science Fundamentals, Data Mining, Algorithm Analysis",
    },
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { icon: <DiJava />, name: "Java", color: "#007396" },
        { icon: <FaPython />, name: "Python", color: "#3776ab" },
        { icon: <SiMysql />, name: "SQL", color: "#00758f" },
        { icon: <FaJs />, name: "JavaScript", color: "#f7df1e" },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        { icon: <FaHtml5 />, name: "HTML", color: "#e34c26" },
        { icon: <FaCss3Alt />, name: "CSS", color: "#264de4" },
        { icon: <FaReact />, name: "ReactJS", color: "#61dafb" },
        { icon: <DiAngularSimple />, name: "Angular", color: "#dd1b16" },
        { icon: <FaNodeJs />, name: "NodeJS", color: "#339933" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { icon: <SiMongodb />, name: "MongoDB", color: "#47a248" },
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
        { icon: <SiMysql />, name: "MySQL", color: "#00758f" },
      ],
    },
    {
      category: "Data Tools & Visualization",
      skills: [
        { icon: <SiTableau />, name: "Tableau", color: "#e97627" },
        { icon: <SiPowerbi />, name: "Power BI", color: "#f2c811" },
        { icon: <DiSpark />, name: "Apache Spark", color: "#e25a1c" },
      ],
    },
  ];

  const experiences = [
    {
      title: "AI Engineer Co-Op",
      company: "EasyBee AI",
      dates: "Aug 2024 - Present",
      description: [
        "Developed advanced chat and voice agents, implemented semantic search, and optimized cloud infrastructure with AWS and CI/CD pipelines.",
      ],
      isActive: true,
      href: "https://easybee.ai"
    },
    {
      title: "Web Development Intern",
      company: "Al Sagr National Insurance Company",
      dates: "Jan 2022 - Jul 2022",
      description: [
        "Led the deployment of a web application, streamlined report distribution, and improved UI efficiency using React and Angular.",
      ],
      isActive: false,
      href: "https://alsagrinsurance.ae"
    },
    {
      title: "Data Analyst Intern",
      company: "Verudix Software Solutions Pvt Ltd",
      dates: "Jun 2020 - Aug 2020",
      description: [
        "Implemented sentiment analysis for election predictions using Twitter API and developed real-time visualizations of tweet trends.",
      ],
      isActive: false,
      href: "https://verudix.com"
    },
  ];
  
  
  const tabContent = {
    about: (
      <div>
        <p>
          Hey there! I’m Sashank Machiraju — a curious coder with a love for all things tech, sports, and suspenseful storytelling. 
          By day, I’m crafting data pipelines, building AI solutions, and optimizing cloud systems. By night, 
          I’m either sinking a three-pointer on the basketball court, blasting music, or unraveling the mysteries 
          of a gripping crime thriller.
        </p>
        <p>
          My tech journey has been a whirlwind of problem-solving and innovation. From creating advanced chatbots 
          to architecting data pipelines that make numbers dance, I thrive on turning complex ideas into impactful solutions. 
          With stops in Dubai’s buzzing tech scene and Northeastern University’s cutting-edge classrooms, I’ve gained a 
          global perspective and honed a diverse skill set.
        </p>
        <p>
          Fun fact? My approach to life mirrors my love for basketball—strategic, precise, and always aiming for the basket. 
          Whether I’m debugging a tricky code snippet or debating the best crime thriller of all time, I’m all in. 
          Collaboration, creativity, and a touch of curiosity are my secret weapons.
        </p>
        <p>
          Let’s team up to create something amazing—whether it’s writing code, brainstorming innovative ideas, or even 
          swapping playlists and movie recommendations. 🚀
        </p>
      </div>
    ),
    education: (
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h4 className="highlight">{edu.school}</h4>
            <p>
              {edu.degree} <span className="date">{edu.date}</span>
            </p>
            <p className="subtext">{edu.coursework}</p>
          </div>
        ))}
      </div>
    ),
    skills: (
      <div className="skills-container">
  {skillCategories.map((category, index) => (
    <div key={index} className="skill-section">
      <h3 className="category-title">{category.category}</h3>
      <div className="skills-row">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    ),
    experience: <Experience />,
    projects: (
      <div>
        <ul>
          <li>
            <strong className="highlight">IMDB Movies Data ETL & BI Reporting (Northeastern University)</strong>
            <span className="date">(Dec 2023)</span>
            <br />
            <span className="subtext">
              - Built an end-to-end data pipeline using Talend Studio and Apache Spark.
            </span>
          </li>
          <li>
            <strong className="highlight">Face Mask Detection using Keras and TensorFlow (IEEE)</strong>
            <span className="date">(Sep 2021 - Dec 2021)</span>
            <br />
            <span className="subtext">
              - Developed a real-time face mask detection system using OpenCV for video stream processing.
            </span>
          </li>
        </ul>
      </div>
    ),
  };

  return (
    <div>
      <header className="header">
        <div className="nav-container">
          <ul className="nav">
            {["about", "education", "skills", "experience", "projects"].map((tab) => (
              <li key={tab}>
                <button
                  className={`nav-link ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main>
        <div className="content-container">{tabContent[activeTab]}</div>
      </main>
    </div>
  );
};

export default Header;
