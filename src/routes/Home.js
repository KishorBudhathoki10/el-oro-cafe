import React, { useRef, useState, useEffect } from "react";

import classes from "./Home.module.css";
import Menu from "../components/Menu/Menu";
import NavBar from "../components/NavBar/NavBar";
import NavMobile from "../components/NavMobile/NavMobile";

function Home() {
  const coverImageRef1 = useRef();
  const coverImageRef2 = useRef();
  const coverImageRef3 = useRef();

  const slidesRef = useRef();
  const slide1Ref = useRef();
  const slide2Ref = useRef();
  const slide3Ref = useRef();

  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    let slideIndex = 0;

    showSlides();

    function showSlides() {
      let i;

      const slides = [slide1Ref.current, slide2Ref.current, slide3Ref.current];

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slideIndex++;

      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";

      setTimeout(showSlides, 3000); // Change image every 2 seconds
    }
  }, []);

  const classesSlide = classes.slide + " " + classes.fade;

  return (
    <div className={classes.Home} id="Home">
      <header>
        <NavBar
          setMenuItem={setMenuItem}
          coverImageRef1={coverImageRef1}
          coverImageRef2={coverImageRef2}
          coverImageRef3={coverImageRef3}
        />

        <NavMobile />

        <div className={classes.slides} ref={slidesRef}>
          <div className={classesSlide} ref={slide1Ref}>
            <img
              className={classes.coverImage}
              src="./images/coffeeshop.webp"
              alt="hello"
              ref={coverImageRef1}
            />
          </div>

          <div className={classesSlide} ref={slide2Ref}>
            <img
              className={classes.coverImage}
              src="./images/tea.webp"
              alt="hello"
              ref={coverImageRef2}
            />
          </div>

          <div className={classesSlide} ref={slide3Ref}>
            <img
              className={classes.coverImage}
              src="./images/coffee.webp"
              alt="hello"
              ref={coverImageRef3}
            />
          </div>
        </div>
      </header>

      <Menu menuItem={menuItem} />
    </div>
  );
}

export default Home;
