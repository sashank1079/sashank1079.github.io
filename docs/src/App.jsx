import React, { useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import FloatingResume from './components/FloatingResume';

function App() {
  const [theme, setTheme] = useState('dark'); // Default theme is dark

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('light-mode'); // Toggles CSS class for light mode
  };

  // Cursor color set to purple
  const cursorColor = '179, 136, 255'; // Purple color for the cursor

  return (
    <div className={`container-fluid ${theme}-theme`}>
      {/* Theme Toggle Button */}
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <FloatingResume/>
      <AnimatedCursor
  innerSize={8}
  outerSize={25}
  color={cursorColor}
  outerAlpha={0.5}  // Set your desired opacity
  innerScale={0.5}
  outerScale={1.5}
  hasBlendMode={true}
  showSystemCursor={false}
  style={{
    zIndex: 2100,
    transition: 'opacity 0.3s ease-in-out', // Smooth opacity transition
  }}
/>

      {/* Header */}
      <Hero />
      <div className="content">
        <Header />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
