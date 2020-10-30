import React from "react";

import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import useWindowSize from "./hooks/useWidowSize";
import MenuMobile from "./components/MenuMobile/MenuMobile";

function App() {
  const size = useWindowSize();

  const showMenuMobileAccordingly = () => {
    if (size.width < 600) {
      return <MenuMobile />;
    }

    return null;
  };

  return (
    <div className="App">
      <Home />
      {showMenuMobileAccordingly()}
      <About />
      <Contact />
    </div>
  );
}

export default App;
