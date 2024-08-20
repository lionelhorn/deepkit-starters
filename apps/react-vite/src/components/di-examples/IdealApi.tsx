import {assertDi} from "../../di/utils";
import {Config} from "../../services/Config";
import {TickerView} from "./CmpAndDiArgs";
import {withDiObs} from "../../App";

export const IdealApi = withDiObs((props: any, config: Config) => {
  assertDi<Config>(config);

  return <div className="bg-green-950 rounded p-2 text-white">
    <p>
      IdealApi
    </p>
    <TickerView/>
    {config.pg}
  </div>
})