import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import classes from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imgRef = useRef();
  const contentRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, {
      rotate: -90,
      opacity: 0,
      duration: 1,
      ease: "bounce.in",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 30%",
      },
    });

    gsap.from(imgRef.current, {
      x: -200,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 50%",
      },
    });

    gsap.from(contentRef.current, {
      x: 200,
      duration: 1,
      opacity: 0,
      scrollTrigger: { trigger: contentRef.current, start: "top 60%" },
    });
  }, []);

  return (
    <div
      className={classes.About}
      id="About"
      style={{
        backgroundImage: `url(./images/coffee_shop.jpg)`,
      }}
    >
      <div className={classes.overlay}></div>
      <div className={classes.title} ref={titleRef}>
        <h2>About Us</h2>
      </div>
      <div className={classes.imageContainer}>
        <img src="./images/team.jpg" alt="" ref={imgRef} />

        <div className={classes.content} ref={contentRef}>
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
