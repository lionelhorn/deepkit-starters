import {Config} from "../services/Config";
import {MyErrorBoundary} from "../errors/MyErrorBoundary";

import * as React from "react";
import {Ticker, TickerContext} from "../misc/Ticker";
import {CmpAndDiArgs, CmpObsThenWithDi, CmpWithDiAndInsideObs, CmpWithDiOnly} from "./di-examples/CmpAndDiArgs";
import {ServiceContainer} from "../di/ServiceContainer";
import {IdealApi} from "./di-examples/IdealApi";
import {TowardsIdealApi} from "./di-examples/TowardsIdealApi";
import {ReactAppModuleView} from "../di/ReactAppModuleView";

export function DiExamples() {
  return <MyErrorBoundary>

    <div className="flex flex-col bg-green-300 rounded p-2 gap-1 m-2">
      React Dependency Injection
      <TickerContext.Provider value={new Ticker()}>
        {/*<ServiceContainer providers={[Config]}>*/}
        {/*  <CmpAndDiArgs/>*/}
        {/*</ServiceContainer>*/}

        {/*<MyErrorBoundary>*/}
        {/*  <CmpWithDiOnly/>*/}
        {/*</MyErrorBoundary>*/}

        {/*<CmpObsThenWithDi ticker={new Ticker()}/>*/}

        {/*<MyErrorBoundary>*/}
        {/*  <CmpWithDiAndInsideObs ticker={new Ticker()}/>*/}
        {/*</MyErrorBoundary>*/}

        {/*<MyErrorBoundary>*/}
        {/*  <TowardsIdealApi ticker={new Ticker()}/>*/}
        {/*</MyErrorBoundary>*/}

        <IdealApi/>

        <ReactAppModuleView/>
      </TickerContext.Provider>
    </div>
  </MyErrorBoundary>
}