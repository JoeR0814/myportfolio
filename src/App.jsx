import React from 'react';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import About from './Components/About';
// import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <About />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;

