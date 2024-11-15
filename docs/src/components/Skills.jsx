const Skills = () => {
    const skills = [
      "Java", "Python", "SQL", "JavaScript", "ReactJS", "AWS", "Power BI", "TensorFlow",
    ];
    
    return (
      <section>
        <h2>Technical Skills</h2>
        <ul>
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </section>
    );
  };
  
export default Skills;
  