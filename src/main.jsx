import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import {  HashRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
 
      <HashRouter>
        <ScrollToTop />
        <App />
        <ScrollToTopButton />
      </HashRouter>
 
  </StrictMode>,
);
