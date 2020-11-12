import React, { useState } from "react";
import { Link } from "react-scroll";

import classes from "./NavMobile.module.css";
import socialLinks from "../../constants/socialLinks";

function NavMobile() {
  const [navIconClicked, setNavIconClicked] = useState(false);

  let navClosedClass;

  if (navIconClicked) {
    navClosedClass = classes.NavMobile__Closed;
  } else {
    navClosedClass =
      classes.NavMobile__Closed + " " + classes.NavMovile_Closed_hide;
  }

  return (
    <div className={classes.NavMobile}>
      <div className={classes.NavMobile__Open}>
        <div
          className={classes.NavIcon}
          onClick={() => setNavIconClicked(true)}
        >
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </div>

        <div className={classes.logo}>
          <h1>EL ORO CAFE</h1>
        </div>
      </div>

      <div className={navClosedClass}>
        <ul className={classes.navLinks}>
          <Link
            activeClass={classes.active}
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
          >
            <li onClick={() => setNavIconClicked(false)}>Home</li>
          </Link>

          <Link
            activeClass={classes.active}
            to="Menu"
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
          >
            <li onClick={() => setNavIconClicked(false)}>Menu</li>
          </Link>

          <Link
            activeClass={classes.active}
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
          >
            <li onClick={() => setNavIconClicked(false)}>About</li>
          </Link>

          <Link
            activeClass={classes.active}
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
          >
            <li onClick={() => setNavIconClicked(false)}>Contact</li>
          </Link>
        </ul>

        <ul className={classes.socialMedia_links}>
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </li>
            );
          })}
        </ul>

        <div
          className={classes.closeMenuButton}
          onClick={() => setNavIconClicked(false)}
        >
          <img src="./images/close.svg" alt="Close" />
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
