import { createRoot } from "react-dom/client";
import * as React from "react";
import {DeepkitReflection} from "./DeepkitReflection";
import "./style.css"
import {App} from "./App";

const rootEl = document.getElementById("react-root");
if (!rootEl) throw new Error("No react-root element found in the DOM");

(async () => {
  const root = createRoot(rootEl);
  root.render(<App/>);
})();
