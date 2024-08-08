import {RpcClient, RpcHttpClientAdapter} from "@deepkit/rpc";
import type {RpcController} from "@lionelhorn/utils";

export const DeepkitRpcHttp = () => {
  const client = new RpcClient(new RpcHttpClientAdapter('http://localhost:8080/rpc/v1'));
  const controller = client.controller<RpcController>('RpcController');

  return <div
    className={"bg-blue-200 p-1 rounded"}
    onClick={async () => {
      // rpc over http call
      const d = await controller.getDate();

      console.log("RPC over http", d)
    }}>
    Click to call RPC action over http
  </div>
}
