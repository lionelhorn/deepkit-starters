import { createRoot } from "react-dom/client";
import * as React from "react";
import {DeepkitReflection} from "./DeepkitReflection";

const rootEl = document.getElementById("react-root");
if (!rootEl) throw new Error("No react-root element found in the DOM");

(async () => {
  const root = createRoot(rootEl);
  root.render(<div>
    <h1>React CSR + Deepkit + Vite</h1>
    <DeepkitReflection/>
  </div>);
})();
