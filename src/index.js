import React from "react";
import ReactDOM from "react-dom/client";
import App from "../frontend/src/App";
import "./index.css"; // optional, if you have a stylesheet

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
