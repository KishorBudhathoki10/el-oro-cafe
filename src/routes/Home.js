import React, { useRef, useState } from "react";

import classes from "./Home.module.css";
import Menu from "../components/Menu/Menu";
import useWindowSize from "../hooks/useWidowSize";
import NavBar from "../components/NavBar/NavBar";
import NavMobile from "../components/NavMobile/NavMobile";
import MenuMobile from "../components/MenuMobile/MenuMobile";

function Home() {
  const coverImageRef = useRef();

  const [menuItem, setMenuItem] = useState(null);

  const size = useWindowSize();

  const showNavAccordingly = () => {
    if (size.width > 600) {
      return <NavBar setMenuItem={setMenuItem} coverImageRef={coverImageRef} />;
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

  return (
    <div className={classes.Home} id="Home">
      <header>
        {showNavAccordingly()}

        <img
          className={classes.coverImage}
          src="./images/coffee.jpg"
          alt="hello"
          ref={coverImageRef}
        />
      </header>

      {showMenuAccordingly()}
    </div>
  );
}

export default Home;
