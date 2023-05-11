import React from "react";
import Resume from "../../stuff/JohnResume.pdf";
import "./header.css";

const Header = () => {
  return (
    <section className="header-section" id="header">
      <div className="header-content">
        <h2>Hi There!</h2>
        <h1 className="gradient-text">I am John Almazan</h1>
        <h5>Thanks for taking the time to review what I can do.</h5>
        <a
          className="btn"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Resume
        </a>
      </div>
      <div className="header-img"></div>
    </section>
  );
};

export default Header;
