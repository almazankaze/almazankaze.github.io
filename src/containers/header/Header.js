import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="header-section" id="header">
      <div className="header-content">
        <h1 className="gradient-text">Welcome to my personal portfolio</h1>
        <p>
          Hello! My name is John and thanks for taking the time to review what I
          can do. Some stuff to know about me is that I love technology,
          especially when I get to troubleshoot and potentially learn something
          new. I also enjoy playing video games, keeping up with the latest
          tech, and drinking coffee.
        </p>
        <button className="btn" type="button">
          Learn More
        </button>
      </div>
      <div className="header-img"></div>
    </section>
  );
};

export default Header;
