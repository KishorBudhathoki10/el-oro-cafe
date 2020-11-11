import React from "react";

import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import MenuMobile from "./components/MenuMobile/MenuMobile";

function App() {
  return (
    <div className="App">
      <Home />
      <MenuMobile />
      <About />
      <Contact />
    </div>
  );
}

export default App;
