import React from "react";

import "./project.css";

const Project = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={project.img} alt={project.title} />
      </div>
      <div className="card-details">
        <h3>{project.title}</h3>
        <hr></hr>
        <p>{project.description}</p>

        <div className="card-links">
          <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
