import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import HandGestureRecognition from "./assets/components/HandGestureRecognition.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    {/* <HandGestureRecognition /> */}
  </StrictMode>
);
