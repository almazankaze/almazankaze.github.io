import React from "react";
import Resume from "../../stuff/JohnResume.pdf";
import "./header.css";

const Header = () => {
  return (
    <section className="header-section" id="header">
      <div className="header-content">
        <h2>Hi There!</h2>
        <h1>I am John Almazan</h1>
        <h2>Thanks for taking the time to review what I can do.</h2>
        <a
          className="btn"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Resume
        </a>

        <div className="contact-info">
          <ul>
            <li>
              <h5>Email</h5>
              <span>almazanjohn20@gmail.com</span>
            </li>
            <li>
              <h5>Phone</h5>
              <span>555-555-5555</span>
            </li>
            <li>
              <h5>Location</h5>
              <span>Illinois, USA</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-img"></div>
    </section>
  );
};

export default Header;
