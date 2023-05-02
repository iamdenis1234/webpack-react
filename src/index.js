import React from "react";
import { createRoot } from "react-dom/client";
import { Test } from "./components/Test/Test.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Test></Test>
  </React.StrictMode>
);
