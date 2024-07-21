import React from 'react';
import Contact from '../Components/Contact';
import About from '../Components/About';
import NavBar from '../Components/NavBar';
import Projects from '../Components/Projects';
import Work from '../Components/Work';

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

