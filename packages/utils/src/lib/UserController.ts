import {rpc} from "@deepkit/rpc";
import { User } from "./User";
import {cast} from "@deepkit/type";

export const dummyUser = cast<User>({first: "John", last: "Do", age: 50});

@rpc.controller("UserController")
export class UserController {

  constructor() {
  }

  @rpc.action()
  async getDummyUser() {
    return dummyUser;
  }
}
