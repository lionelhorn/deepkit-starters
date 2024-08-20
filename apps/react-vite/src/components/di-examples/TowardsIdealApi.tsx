import {assertDi} from "../../di/utils";
import {Config} from "../../services/Config";
import {withDiObs} from "../../App";

export const TowardsIdealApi = withDiObs((props: any, config: Config) => {
  assertDi<Config>(config);

  return <div className="bg-gray-200 rounded p-2">
    <p>
      TowardsIdealApis
    </p>
    {props.ticker.count}
    {config.pg}
  </div>
})