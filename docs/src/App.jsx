import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container py-5">
      <Header />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;