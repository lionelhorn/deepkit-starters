import {Config} from "../../services/Config";
import {Ticker, useTicker} from "../../misc/Ticker";
import {observer} from "mobx-react";
import {isObservable} from "mobx";
import {withDi} from "../../di/utils";

export function CmpAndDiArgs(props: any, config: Config) {
  if (!config.pg) {
    throw Error(`Config not injected properly: "${JSON.stringify(config)}"`)
  }

  return <div className="bg-gray-200 rounded p-2">
    <p>
      CmpAndDiArgs
    </p>
    {config.pg}
  </div>
}

export const CmpWithDiOnly = withDi(function (props: any, config: Config) {
  if (!config.pg) {
    throw Error(`Config not injected properly: "${JSON.stringify(config)}"`)
  }

  return <div className="bg-gray-200 rounded p-2">
    <p>
      CmpWithDiOnly
    </p>
    {config.pg}
  </div>
}, [Config])

export const TickerView = observer(() => {
  const ticker = useTicker();

  return <div className="flex flex-row rounded p-2">
    <p>{isObservable(ticker) ? "observable" : "not-observable"}</p>
    <p>{ticker.count}</p>
  </div>
})

export const CmpObsThenWithDi = observer(
 withDi(function ({ticker}: { ticker: Ticker }, config: Config) {
    if (!config.pg) {
      throw Error(`Config not injected properly: "${JSON.stringify(config)}"`)
    }

    return (<div className="flex flex-col bg-gray-200 rounded p-2">
       <p>
         CmpObsThenWithDi
       </p>

       <p>{isObservable(ticker) ? "observable" : "not-observable"} {ticker.count}</p>
       <p>{config.pg}</p>
     </div>
    )
  }, [Config]
 ));

export const CmpWithDiAndInsideObs = withDi(({ticker}: { ticker: Ticker }, config: Config) => {
  if (!config.pg) {
    throw Error(`Config not injected properly: "${JSON.stringify(config)}"`)
  }

  const Render = observer(() => <div className="bg-gray-200 rounded p-2">
     <p>
       CmpWithDiAndInsideObs
     </p>
     {ticker.count}
     {config.pg}
   </div>
  )

  return <Render/>
}, [Config])


