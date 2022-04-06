import React from "react";
import projectImg from "../../images/genshin.jpg";
import "./project.css";

const Project = () => {
  return (
    <div className="project-card">
      <div className="card-content">
        <img src={projectImg} alt="alt" />
        <h3>title</h3>
        <hr></hr>
        <p>info</p>
        <div className="tech-list">
          <p>1</p>
          <p>2</p>
        </div>
        <div className="card-links">
          <a href="#d">Code</a>
          <a href="#c">Live</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
