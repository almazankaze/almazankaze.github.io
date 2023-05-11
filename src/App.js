import React from "react";

import { Header, Projects, Technologies, About } from "./containers";
import { Navbar } from "./components";
import { ScrollUp } from "./components";

import { useGlobalContext } from "./context";

import "./App.css";

const App = () => {
  const { showMenu } = useGlobalContext();

  return (
    <div className="app">
      <div className={showMenu ? "show-overlay" : ""}></div>
      <Navbar />
      <div className="container">
        <Header />
        <Projects />
        <Technologies />
        <About />
        <ScrollUp />
      </div>
    </div>
  );
};

export default App;
