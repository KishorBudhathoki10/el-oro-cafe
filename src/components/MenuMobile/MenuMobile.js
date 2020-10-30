import React, { useState } from "react";

import classes from "./MenuMobile.module.css";
import Menu from "../Menu/Menu";

function MenuMobile() {
  const [itemType, setItemType] = useState("Coffee");

  const isActive = (type) => {
    if (type === itemType) {
      return classes.active;
    }
  };

  return (
    <div className={classes.MenuMobile} id="Menu">
      <div className={classes.subNav}>
        <ul>
          <li
            onClick={() => setItemType("Coffee")}
            className={isActive("Coffee")}
          >
            Coffee
          </li>
          <li
            onClick={() => {
              setItemType("Tea");
            }}
            className={isActive("Tea")}
          >
            Tea / Drinks
          </li>
          <li
            onClick={() => setItemType("Breakfast")}
            className={isActive("Breakfast")}
          >
            Breakfast / Brunch
          </li>
        </ul>
      </div>

      <div>
        <Menu menuItem={itemType} />
      </div>
    </div>
  );
}

export default MenuMobile;
