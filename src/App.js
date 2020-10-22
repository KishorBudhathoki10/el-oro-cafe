import React from "react";

import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <div className="App">
      <Home />
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;
