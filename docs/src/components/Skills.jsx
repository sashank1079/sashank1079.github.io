import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaGit,
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
  import "./Main.css";
const Skills = () => {
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
