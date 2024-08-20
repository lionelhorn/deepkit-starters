import "./style.css"
import * as React from "react";
import {initApp} from "./App";
import {createRoot} from "react-dom/client";
import {RootApp} from "./RootApp";

(() => {
  initApp();

  const rootEl = document.getElementById("react-root");
  if (!rootEl) throw new Error("No react-root element found in the DOM");

  const root = createRoot(rootEl);
  root.render(<RootApp/>);
})()

