import React from "react";
import "./technologies.css";

const Technologies = () => {
  return (
    <section className="tech-container" id="technology">
      <hr className="section-divider"></hr>
      <h2 className="section-title">Technologies</h2>
      <p className="section-desc">
        I've worked with a range a technologies in the web development world.
        From Back-end To Design
      </p>
      <div className="tech-cols">
        <div>
          <h2>Front-End</h2>
          <p>
            Experience with React.js, Bootstrap, npm, Unity(C#), and
            Android(Java)
          </p>
        </div>
        <div>
          <h2>Back-End</h2>
          <p>Experience with MongoDB, Express, Node, and MySQL</p>
        </div>
        <div>
          <h2>UI/UX</h2>
          <p>Experience with Gimp</p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
