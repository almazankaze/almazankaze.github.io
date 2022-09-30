import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./reset.css";
import "./index.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App />);
