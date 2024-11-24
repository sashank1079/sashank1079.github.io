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
  "Debugging is like being the detective in a crime movie where you are also the murderer.",
  "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",
  "To iterate is human, to recurse is divine. – L. Peter Deutsch",
  "Code never lies, comments sometimes do. – Ron Jeffries",
  "There are two ways to write error-free programs; only the third one works.",
  "A good programmer is someone who always looks both ways before crossing a one-way street.",
  "I have not failed. I’ve just found 10,000 ways that won’t work. – Thomas Edison",
  "Optimism is an occupational hazard of programming. Feedback is the treatment. – Kent Beck",
  "Give a man a program, and you’ll frustrate him for a day. Teach a man to program, and you’ll frustrate him for a lifetime.",
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
  "Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live. – John Woods",
  "Programming is thinking, not typing. – Casey Patton",
  "The best way to get a project done faster is to start sooner. – Jim Highsmith",
  "Code is like pizza: even when it’s bad, it’s still pretty good."
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
          href="https://github.com/sashank1079"
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
      
      <p className="text-muted-mt3"> &copy; Built with coffee ☕, code 💻, and a touch of magic ✨. All Bugs Reserved 🐛.</p>
    </footer>
  );
};

export default Footer;