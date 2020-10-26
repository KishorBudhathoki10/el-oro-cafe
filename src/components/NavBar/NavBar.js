import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";

import MenuItemLink from "../MenuItemLink/MenuItemLink";
import classes from "./NavBar.module.css";

function NavBar({
  coverImageRef1,
  coverImageRef2,
  coverImageRef3,
  setMenuItem,
}) {
  const menuRef = useRef();
  const navOpenRef = useRef();
  const navRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const tl = new gsap.timeline({ paused: true, reversed: true });

    tl.to(
      [coverImageRef1.current, coverImageRef2.current, coverImageRef3.current],
      {
        duration: 1,
        width: "60%",
        ease: "Power2.easeOut",
      }
    )
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
  }, [coverImageRef1, coverImageRef2, coverImageRef3]);

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

          <Link
            activeClass={classes.active}
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
          >
            <li onClick={() => setMenuItem(null)} ref={aboutRef}>
              About
            </li>
          </Link>

          <Link
            activeClass={classes.active}
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
          >
            <li onClick={() => setMenuItem(null)} ref={contactRef}>
              Contact
            </li>
          </Link>
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
