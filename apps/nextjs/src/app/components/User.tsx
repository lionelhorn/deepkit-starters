"use client";

import {FC} from "react";
import {User} from "@lionelhorn/utils";
import {getDummyUser} from "../actions/UserActions";

export const UserView: FC<{ user: User }> = ({user}) => {
  return (
    <div onClick={async () => {
      console.log(await getDummyUser())
    }}>
      {user.first} {user.last}👋
    </div>
  )
}
