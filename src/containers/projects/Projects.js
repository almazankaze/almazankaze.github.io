import React from "react";
import { Project } from "../../components";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects-container">
      <hr className="section-divider"></hr>
      <h2 className="section-title">Projects</h2>
      <div className="cards-container">
        <div className="cards">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  );
};

export default Projects;
