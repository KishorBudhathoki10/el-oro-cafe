import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";

import classes from "./NavBar.module.css";
import socialLinks from "../../constants/socialLinks";

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
          e.stopPropagation();
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
        <h1 onClick={() => setMenuItem(null)} ref={titleRef}>
          EL ORO CAFE
        </h1>

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
        <div className={classes.navOpenContainer}>
          <div className={classes.navOpenImage}>
            <img src="./images/contact.webp" alt="menu" />
          </div>

          <div className={classes.menuLinks}>
            <h2 onClick={() => setMenuItem("Coffee")}>Coffee Menu</h2>

            <h2 onClick={() => setMenuItem("Tea")}>Tea Menu</h2>

            <h2 onClick={() => setMenuItem("Breakfast")}>Breakfast Menu</h2>
          </div>
        </div>

        <div className={classes.socialMedia_links_Container}>
          <h3>Follow Us!</h3>

          <div className={classes.socialMedia_links}>
            {socialLinks.map((link) => {
              return (
                <a
                  href={link.url}
                  key={link.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
