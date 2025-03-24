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
  SiTensorflow,
} from "react-icons/si";
import {
  DiSpark,
  DiJava,
} from "react-icons/di";
import "./Main.css";
import Airflow from "../assets/airflow.png";
import OpenAI from "../assets/OpenAI.png";
import Claude from "../assets/claude-ai-icon.webp";
import gemini from "../assets/gemini.png";
import Crewai from "../assets/crewai.png";
import ai from "../assets/ai.png";


const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Frameworks",
      skills: [
        { icon: <DiJava />, name: "Java", color: "#007396" },
        { icon: <FaPython />, name: "Python", color: "#3776ab" },
        { icon: <FaJs />, name: "JavaScript", color: "#f7df1e" },
        { icon: <FaReact />, name: "ReactJS", color: "#61dafb" },
        { icon: <FaNodeJs />, name: "NodeJS", color: "#339933" },
        { icon: <SiTensorflow />, name: "TensorFlow", color: "#FF6F00" },
        { icon: <FaPython />, name: "Keras", color: "#3776ab" },
        { icon: <FaHtml5 />, name: "HTML", color: "#e34c26" },
        { icon: <FaCss3Alt />, name: "CSS", color: "#264de4" },
      ],
    },
    {
      category: "Data Tools & Databases",
      skills: [
        { icon: <SiMongodb />, name: "MongoDB", color: "#47a248" },
        { icon: <SiMysql />, name: "MySQL", color: "#00758f" },
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
        { icon: <SiTableau />, name: "Tableau", color: "#e97627" },
        { icon: <SiPowerbi />, name: "Power BI", color: "#f2c811" },
        { icon: <DiSpark />, name: "Spark", color: "#e25a1c" },
        {
          icon: <img src={Airflow} alt="Airflow Logo" className="custom-icon" />,
          name: "Airflow",
        },
      ],
    },
    {
      category: "Cloud Platforms & LLMs",
      skills: [
        { icon: <FaAws />, name: "AWS", color: "#FF9900" },
        {
          icon: <img src={OpenAI} alt="OpenAI Logo" className="custom-icon" />,
          name: "OpenAI",
        },
        {
        icon: <img src={Claude} alt="Claude Logo" className="custom-icon" />,
        name: "Claude",
        },
        {
          icon: <img src={gemini} alt="Claude Logo" className="custom-icon" />,
          name: "Gemini",
        },
      ],
    },
    {
      category: "Tools & Version Control",
      skills: [
        { icon: <FaGit />, name: "Git", color: "#F05032" },

      ],
    },
    {
      category: "AI frameworks",
      skills: [
        {
          icon: <img src={Crewai} alt="Claude Logo" className="custom-icon" />,
          name: "CrewAI",
        },

      ],
    },
  ];

  return (
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
  );
};

export default Skills;
