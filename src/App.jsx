import React from "react";

import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import SectionContext from "./contexts/SectionContext";
import ProjectsContext from "./contexts/ProjectsContext";

import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <SectionContext>
        <ProjectsContext>
          <Hero />
          <Projects />
          <Contact />
        </ProjectsContext>
      </SectionContext>
    </div>
  );
}

export default App;