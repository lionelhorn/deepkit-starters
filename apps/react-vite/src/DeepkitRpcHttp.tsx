import {RpcClient, RpcHttpClientAdapter} from "@deepkit/rpc";
import {DateController} from "@lionelhorn/utils";

export const DeepkitRpcHttp = () => {
  const client = new RpcClient(new RpcHttpClientAdapter('http://localhost:8080/rpc/v1'));
  const controller = client.controller<DateController>('DateController');

  return <div
    className={"bg-blue-200 p-1 rounded"}
    onClick={async () => {
      // rpc over http call
      // fails for now. See https://discord.com/channels/759513055117180999/956485272789458984/1265698617327489054
      const d = await controller.getDate();

      console.log("RPC over http", d)
    }}>
    Click to call RPC action over http
  </div>
}
