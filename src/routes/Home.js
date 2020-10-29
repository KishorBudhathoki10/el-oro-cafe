import React, { useRef, useState, useEffect } from "react";

import classes from "./Home.module.css";
import Menu from "../components/Menu/Menu";
import useWindowSize from "../hooks/useWidowSize";
import NavBar from "../components/NavBar/NavBar";
import NavMobile from "../components/NavMobile/NavMobile";
import MenuMobile from "../components/MenuMobile/MenuMobile";

function Home() {
  const coverImageRef1 = useRef();
  const coverImageRef2 = useRef();
  const coverImageRef3 = useRef();

  const slidesRef = useRef();
  const slide1Ref = useRef();
  const slide2Ref = useRef();
  const slide3Ref = useRef();

  const [menuItem, setMenuItem] = useState(null);

  const size = useWindowSize();

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

  const showNavAccordingly = () => {
    if (size.width > 600) {
      return (
        <NavBar
          setMenuItem={setMenuItem}
          coverImageRef1={coverImageRef1}
          coverImageRef2={coverImageRef2}
          coverImageRef3={coverImageRef3}
        />
      );
    } else {
      return <NavMobile setMenuItem={setMenuItem} />;
    }
  };

  const showMenuAccordingly = () => {
    if (size.width > 600) {
      return <Menu menuItem={menuItem} />;
    } else {
      return <MenuMobile menuItem={menuItem} />;
    }
  };

  const classesSlide = classes.slide + " " + classes.fade;

  return (
    <div className={classes.Home} id="Home">
      <header>
        {showNavAccordingly()}

        <div className={classes.slides} ref={slidesRef}>
          <div className={classesSlide} ref={slide1Ref}>
            <img
              className={classes.coverImage}
              src="./images/coffeeshop.jpg"
              alt="hello"
              ref={coverImageRef1}
            />
          </div>

          <div className={classesSlide} ref={slide2Ref}>
            <img
              className={classes.coverImage}
              src="./images/tea.jpg"
              alt="hello"
              ref={coverImageRef2}
            />
          </div>

          <div className={classesSlide} ref={slide3Ref}>
            <img
              className={classes.coverImage}
              src="./images/coffee.jpg"
              alt="hello"
              ref={coverImageRef3}
            />
          </div>
        </div>
      </header>

      {showMenuAccordingly()}
    </div>
  );
}

export default Home;
