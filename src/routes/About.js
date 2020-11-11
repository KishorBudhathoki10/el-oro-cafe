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
    const tl = gsap.timeline({ paused: true });

    tl.from(imgRef.current, {
      x: -200,
      duration: 1,
      opacity: 0,
    })
      .from(
        titleRef.current,
        {
          opacity: 0,
          duration: 1.3,
          y: 40,
        },
        "-=1"
      )
      .from(
        contentRef.current,
        {
          x: 200,
          duration: 1,
          opacity: 0,
        },
        "-=1.3"
      );

    ScrollTrigger.create({
      trigger: imgRef.current,
      start: "top 200",
      onEnter: () => tl.play(),
    });
  }, []);

  return (
    <div
      className={classes.About}
      id="About"
      style={{
        backgroundImage: `url(./images/coffee_shop.webp)`,
      }}
    >
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img src="./images/team.webp" alt="" ref={imgRef} />
        </div>

        <div className={classes.content}>
          <h2 ref={titleRef}>About Us</h2>

          <p ref={contentRef}>
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
