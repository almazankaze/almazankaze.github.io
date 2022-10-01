import React from "react";
import { Carousel } from "../../components";
import "./about.css";

const About = () => {
  return (
    <section className="about-container" id="about">
      <h2 className="section-title">About Me</h2>
      <hr className="section-divider"></hr>
      <p className="section-desc">
        Here are just a couple notable moments in my career
      </p>
      <Carousel />
    </section>
  );
};

export default About;
