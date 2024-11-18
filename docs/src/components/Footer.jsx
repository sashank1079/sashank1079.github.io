import React from 'react';
import './Footer.css'; // Ensure proper styling
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "In order to be irreplaceable, one must always be different. – Coco Chanel",
  "Java is to JavaScript what car is to Carpet. – Chris Heilmann",
  "Knowledge is power. – Francis Bacon",
  "Simplicity is the soul of efficiency. – Austin Freeman",
];

const getDailyQuote = () => {
  const dayIndex = new Date().getDate() % quotes.length; // Rotate through quotes based on the day
  return quotes[dayIndex];
};

const Footer = () => {
  return (
    <footer className="footer text-center mt-5">
      <p className="quote mt-3">{getDailyQuote()}</p>
      <p className="text-muted-mt2">Get in touch with me!</p>
      <div className="social-icons">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="social-link"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/sashank-machiraju/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-link"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:machiraju.s@northeastern.edu"
          aria-label="Email"
          className="social-link"
        >
          <FaEnvelope />
        </a>
      </div>
      
      <p className="text-muted-mt3">&copy; 2024 Sashank Machiraju. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
