import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Buttons.js";
import "./button.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
