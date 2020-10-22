import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import classes from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imgRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    gsap.from(imgRef.current, {
      x: -200,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 40%",
      },
    });
    gsap.from(contentRef.current, {
      x: 200,
      duration: 1,
      opacity: 0,
      scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
    });
  });

  return (
    <div className={classes.About} id="About">
      <div className={classes.imageContainer}>
        <img src="./images/coffee.jpg" alt="" ref={imgRef} />

        <div ref={contentRef}>
          <h1>About Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
