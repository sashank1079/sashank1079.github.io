import './Main.css';
const Education = () => {
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
      return (
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
      );
};

export default Education;
