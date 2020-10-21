import React from "react";
import ReactDom from "react-dom";

import classes from "./Modal.module.css";

const Modal = () => {
  return ReactDom.createPortal(
    <div className={classes.Modal}></div>,
    document.getElementById("modal")
  );
};

export default Modal;
