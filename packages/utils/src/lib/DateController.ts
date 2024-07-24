import {rpc} from "@deepkit/rpc";

@rpc.controller("DateController")
export class DateController {

  @rpc.action()
  async getDate(): Promise<{d: Date}> {
    return {d: new Date()}
  }
}
