import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { LoadingBarContainer } from "react-top-loading-bar";
import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LoadingBarContainer>
      <StrictMode>
        <App />
      </StrictMode>
    </LoadingBarContainer>
  </BrowserRouter>
);
