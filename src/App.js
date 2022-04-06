import React from "react";

import { Header, Projects, Technologies, About } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Projects />
        <Technologies />
        <About />
      </div>
    </div>
  );
};

export default App;
