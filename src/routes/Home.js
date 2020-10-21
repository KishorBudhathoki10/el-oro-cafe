import React, { useRef, useState } from "react";

import classes from "./Home.module.css";
import CoffeeMenu from "../components/Menu/Menu";
import useWindowSize from "../hooks/useWidowSize";
import NavBar from "../components/NavBar/NavBar";
import NavMobile from "../components/NavMobile/NavMobile";

function Home() {
  const coverImageRef = useRef();

  const [menuItem, setMenuItem] = useState(null);

  const size = useWindowSize();

  const showNavAccordingly = () => {
    if (size.width > 600) {
      return <NavBar setMenuItem={setMenuItem} coverImageRef={coverImageRef} />;
    } else {
      return <NavMobile />;
    }
  };

  return (
    <div className={classes.Home}>
      <header>
        {showNavAccordingly()}

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
