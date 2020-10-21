import React from "react";

import classes from "./MenuItemLink.module.css";

function MenuItemLink({ title, backgroundImageUrl, setMenuItem }) {
  return (
    <div className={classes.MenuItemLink} onClick={() => setMenuItem(title)}>
      <div
        className={classes.container}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>
      <h2>{title}</h2>
    </div>
  );
}

export default MenuItemLink;
