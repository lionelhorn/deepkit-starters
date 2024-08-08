import {DeepkitReflection} from "./DeepkitReflection";
import * as React from "react";
import {DeepkitRpcHttp} from "./DeepkitRpcHttp";

export const App = () => {
  return  <div className={"flex flex-col items-center gap-2"}>
    <h1>React CSR + Deepkit + Vite</h1>
    <DeepkitReflection/>
    {/* Removed until related bug? fix */}
    <DeepkitRpcHttp/>
  </div>
}
