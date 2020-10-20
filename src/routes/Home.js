import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import classes from "./Home.module.css";
import MenuItemLink from "../components/MenuItemLink";
import CoffeeMenu from "../components/CoffeeMenu";

function Home() {
  const menuRef = useRef();
  const navOpenRef = useRef();
  const coverImageRef = useRef();
  const navRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const titleRef = useRef();

  const [menuItem, setMenuItem] = useState(null);

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

        tl.reverse();
      });
    });
  }, []);

  return (
    <div className={classes.Home}>
      <header>
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

        <img
          className={classes.coverImage}
          src="./images/coffee.jpg"
          alt="hello"
          ref={coverImageRef}
        />
      </header>

      <div>
        <CoffeeMenu menuItem={menuItem} />
      </div>
    </div>
  );
}

export default Home;
