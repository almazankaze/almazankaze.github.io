import React from "react";

import { Header, Projects, Technologies, About } from "./containers";
import { Navbar } from "./components";

import { useGlobalContext } from "./context";

import "./App.css";

const App = () => {
  const { showMenu } = useGlobalContext();

  return (
    <div className="app">
      <div className={showMenu ? "show-overlay" : ""}></div>
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
