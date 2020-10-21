import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

import classes from "./NavMobile.module.css";
import Modal from "../Modal/Modal";

function NavMobile() {
  const [navIconClicked, setNavIconClicked] = useState(false);

  const navIconRef = useRef();
  const navClosedRef = useRef();
  const closeMenuButtonRef = useRef();

  const tl = new gsap.timeline({ paused: true, reversed: true });

  useEffect(() => {
    tl.fromTo(navIconRef.current, { rotation: 0 }, { rotation: 90 }).fromTo(
      navClosedRef.current,
      1,
      {
        opacity: 0,
        scale: 0,
        ease: "Power2.easeOut",
        transformOrigin: "left top",
      },
      {
        opacity: 1,
        scale: 1,
        ease: "back",
        onComplete: function () {
          navClosedRef.current.style.pointerEvents = "auto";
        },
      }
    );
    navIconRef.current.addEventListener("click", (e) => {
      if (tl.isActive()) {
        e.preventDefault();
        return false;
      }
      tl.play();
    });
  }, [tl]);

  const showModalAccordingly = () => {
    if (navIconClicked) {
      return <Modal />;
    }
  };

  const onCloseMenuButtonClick = () => {
    const tl = gsap.timeline();

    tl.to(closeMenuButtonRef.current, {
      rotation: 360,
      scale: 2,
      padding: 0,
      backgroundColor: "#846155",
      opacity: 0,
      onComplete: () => {
        setNavIconClicked(false);
        tl.reverse();
      },
    });
  };

  return (
    <div className={classes.NavMobile}>
      <div className={classes.NavMobile__Open}>
        <div
          className={classes.NavIcon}
          ref={navIconRef}
          onClick={() => setNavIconClicked(true)}
        >
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </div>

        <div className={classes.logo}>
          <h1>La Masala Cafe</h1>
        </div>
      </div>

      <div className={classes.NavMobile__Closed} ref={navClosedRef}>
        <ul className={classes.navLinks}>
          <li onClick={() => setNavIconClicked(false)}>Home</li>
          <li onClick={() => setNavIconClicked(false)}>Menu</li>
          <li onClick={() => setNavIconClicked(false)}>About</li>
          <li onClick={() => setNavIconClicked(false)}>Contact</li>
        </ul>

        <div
          className={classes.closeMenuButton}
          onClick={onCloseMenuButtonClick}
          ref={closeMenuButtonRef}
        >
          <img src="./images/close.svg" alt="Close" />
        </div>
      </div>

      {showModalAccordingly()}
    </div>
  );
}

export default NavMobile;