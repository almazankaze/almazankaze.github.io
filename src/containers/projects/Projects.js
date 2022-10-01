import React from "react";
import myProjects from "../../stuff/myProjects";
import { Project } from "../../components";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2 className="section-title">Projects</h2>
      <hr className="section-divider"></hr>
      <div className="cards-container">
        <div className="cards">
          {myProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
