import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import './Toggle.css'

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("light-mode", !isLightMode);
  };

  return (
    <div className="theme-toggle-container">
      <label className="theme-toggle">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={isLightMode}
        />
        <span className="slider">
          <FaMoon className={`icon moon ${isLightMode ? "hidden" : ""}`} />
          <FaSun className={`icon sun ${!isLightMode ? "hidden" : ""}`} />
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
