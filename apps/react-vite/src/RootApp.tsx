import * as React from "react";
import {DiExamples} from "./components/DiExamples";
import {DeepkitRpcHttp} from "./components/DeepkitRpcHttp";
import {DeepkitReflection} from "./components/DeepkitReflection";

export const RootApp = () => {
  return <div className={"flex flex-col items-center gap-2"}>
    <h1>A few features enabled by Deepkit</h1>

    <DeepkitReflection/>
    <DeepkitRpcHttp/>

    <DiExamples/>
  </div>
}
