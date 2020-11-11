import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

import "./index.css";
import App from "./App";

WebFont.load({
  google: {
    families: ["Montserrat Web:300,400,600,700", "sans-serif"],
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
