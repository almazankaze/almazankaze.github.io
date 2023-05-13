import React from "react";
import "./technologies.css";

const Technologies = () => {
  return (
    <section className="tech-container" id="technology">
      <h2 className="section-title">Technologies</h2>
      <hr className="section-divider"></hr>
      <p className="section-desc">
        I've worked with a range of technologies in the web development world.
        From Back-end To Design
      </p>
      <div className="tech-cols">
        <div>
          <h3>Front-End</h3>
          <p>
            Experience with Bootstrap, SCSS, Material UI, React.js, Unity(C#),
            and Android(Java)
          </p>
        </div>
        <div>
          <h3>Back-End</h3>
          <p>
            Experience with MongoDB, Firebase, Heroku, Express, Node, and MySQL
          </p>
        </div>
        <div>
          <h3>UI/UX</h3>
          <p>Experience with Gimp</p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
