import React, { useState } from "react";

import classes from "./MenuMobile.module.css";
import Menu from "../Menu/Menu";

function MenuMobile({ menuItem }) {
  const [itemType, setItemType] = useState(null);

  if (!menuItem) {
    return null;
  }

  const isActive = (type) => {
    if (type === itemType) {
      return classes.active;
    }
  };

  let mainClass = classes.MenuMobile + " " + classes.black;

  if (itemType) {
    mainClass = classes.MenuMobile + " " + classes.white;
  }

  return (
    <div className={mainClass}>
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
