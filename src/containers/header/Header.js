import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Resume from "../../stuff/JohnResume.pdf";
import headerImg from "../../images/programmer.png";
import "./header.css";

const Header = () => {
  const header = useRef();
  const statement = useRef();
  const contactInfo = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .fromTo(
          statement.current,
          { autoAlpha: 0 },
          {
            duration: 0.8,
            autoAlpha: 1,
            onComplete: () => {
              console.log("complete");
            },
          },
          "+=0.2"
        )
        .fromTo(
          contactInfo.current,
          { autoAlpha: 0, y: 50 },
          { duration: 0.55, autoAlpha: 1, y: 0 }
        );
    }, header);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={header} className="header-section" id="header">
      <div className="header-content">
        <div className="header-statement" ref={statement}>
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
        </div>

        <div className="contact-info" ref={contactInfo}>
          <ul>
            <li>
              <h5>Email</h5>
              <span>almazanjohn20@gmail.com</span>
            </li>
            <li>
              <h5>Username</h5>
              <span>almazankaze</span>
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
