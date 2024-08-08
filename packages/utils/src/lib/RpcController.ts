import {rpc} from "@deepkit/rpc";

@rpc.controller("RpcController")
export class RpcController {
  @rpc.action()
  getDate(): Date {
    return new Date()
  }

  @rpc.action()
  hello(): string {
    return "world"
  }
}
