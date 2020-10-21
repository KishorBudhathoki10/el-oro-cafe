import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import MenuItemLink from "../MenuItemLink/MenuItemLink";
import classes from "./NavBar.module.css";

function NavBar({ coverImageRef, setMenuItem }) {
  const menuRef = useRef();
  const navOpenRef = useRef();
  const navRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const tl = new gsap.timeline({ paused: true, reversed: true });

    tl.to(coverImageRef.current, {
      duration: 1,
      width: "60%",
      ease: "Power2.easeOut",
    })
      .to(
        navRef.current,
        {
          duration: 1,
          height: "100%",
          ease: "Power2.easeOut",
        },
        "-=0.7"
      )
      .fromTo(
        navOpenRef.current,
        1,
        {
          opacity: 0,
          x: 50,
          ease: "Power2.easeOut",
        },
        {
          opacity: 1,
          x: 0,
          onComplete: function () {
            navOpenRef.current.style.pointerEvents = "auto";
          },
        }
      );

    function toggleTimeline(tween) {
      tween.reversed() ? tween.play() : tween.reverse();
    }

    menuRef.current.addEventListener("click", (e) => {
      if (tl.isActive()) {
        e.preventDefault();
        return false;
      }

      toggleTimeline(tl);
    });

    [aboutRef, contactRef, titleRef].forEach((ref) => {
      ref.current.addEventListener("click", (e) => {
        if (tl.isActive()) {
          e.preventDefault();
          return false;
        }

        navOpenRef.current.style.pointerEvents = "none";
        tl.reverse();
      });
    });
  }, [coverImageRef]);

  return (
    <nav ref={navRef}>
      <div className={classes.navClosed}>
        <h3 onClick={() => setMenuItem(null)} ref={titleRef}>
          La Masala Cafe
        </h3>
        <ul className={classes.navLinks}>
          <li onClick={() => setMenuItem(null)} ref={menuRef}>
            Menu
          </li>
          <li onClick={() => setMenuItem(null)} ref={aboutRef}>
            About
          </li>
          <li onClick={() => setMenuItem(null)} ref={contactRef}>
            Contact
          </li>
        </ul>
      </div>

      <div className={classes.navOpen} ref={navOpenRef}>
        <MenuItemLink
          title="Coffee"
          backgroundImageUrl="./images/coffee2.jpg"
          setMenuItem={setMenuItem}
        />

        <MenuItemLink
          title="Tea"
          backgroundImageUrl="./images/tea.jpg"
          setMenuItem={setMenuItem}
        />

        <MenuItemLink
          title="Breakfast"
          backgroundImageUrl="./images/breakfast.jpg"
          setMenuItem={setMenuItem}
        />
      </div>
    </nav>
  );
}

export default NavBar;
