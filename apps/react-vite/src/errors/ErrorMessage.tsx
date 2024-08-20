import { AnErrorHappened } from "./AnErrorHappened.js";
import { FC, PropsWithChildren } from "react";

export const ErrorMessage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={"w-full"}>
      <div
        className={"flex flex-col bg-red-400 p-2 space-y-2 max-w-full items-center justify-center content-center m-auto text-black"}>
        <AnErrorHappened />
        <div className={"p-2 border bg-red-300 border-red-800 text-sm"}>{children}</div>
      </div>
    </div>
  );
};
