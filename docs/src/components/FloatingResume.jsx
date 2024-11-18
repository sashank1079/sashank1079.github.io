import React from 'react';
import { FiFileText } from 'react-icons/fi'; // Import a resume/document icon
import pointingBitmoji from '../assets/pointing.png'; // Import the Bitmoji
import resume from '../assets/resume_sashank.pdf';
import './FloatingResume.css'; // CSS for floating elements

const FloatingResume = () => {
  return (
    <div className="floating-container">
      {/* Bitmoji with Resume Icon */}
      <div className="bitmoji-container">
        <img
          src={pointingBitmoji}
          alt="Pointing Bitmoji"
          className="bitmoji"
        />
        <a
          href={resume} // Replace with your actual resume URL
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          <FiFileText className="resume-icon" />
        </a>
      </div>
    </div>
  );
};

export default FloatingResume;
