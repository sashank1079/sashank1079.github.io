import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid">
      {/* Animated Cursor */}
      <AnimatedCursor
        innerSize={10} // Slightly larger inner dot
        outerSize={40} // Larger outer circle for better glow effect
        color="255, 255, 255" // Red RGB color
        outerAlpha={0.5} // Increased outer circle opacity
        innerScale={0.9} // Inner dot shrinks slightly on hover
        outerScale={1.5} // Outer circle grows on hover
        hasBlendMode={true} // Enables blending for the glowing effect
        showSystemCursor={false} // Hides the default cursor
        style={{
          zIndex: 2100, // Ensure the cursor appears above all elements
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <Hero />
      <div className="content">
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
