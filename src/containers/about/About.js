import React from "react";
import { Carousel } from "../../components";
import "./about.css";

const About = () => {
  return (
    <section className="about-container" id="about">
      <hr className="section-divider"></hr>
      <h2 className="section-title">About Me</h2>
      <p className="section-desc">
        Here are just a couple notable moments in my career
      </p>
      <Carousel />
    </section>
  );
};

export default About;
