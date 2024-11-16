import React from 'react';
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
      <Header />
      <Hero />
      <div className="content">
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
