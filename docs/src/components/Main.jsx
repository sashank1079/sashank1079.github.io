import React, { useState } from "react";
import "./Main.css";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import About from "./About";

const Main = () => {
  const [activeTab, setActiveTab] = useState("about");

  
  const tabContent = {
    about: <About />,
    education: <Education />,
    skills: <Skills />,
    experience: <Experience />,
    projects: <Projects/>
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

export default Main;
