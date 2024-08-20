import React, { FC } from "react";
import { FallbackProps } from "react-error-boundary";
import { ErrorMessage } from "./ErrorMessage.js";

export const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className={`flex flex-col w-xl bg-gray-200 z-[10000]`}>
      <ErrorMessage>
        <pre className="font-semibold text-wrap">{error.message}</pre>
        <pre className="text-[10px] break-words text-wrap">{error.stack.replace(error.message, "")}</pre>
      </ErrorMessage>
      <div className={"flex flex-row justify-center p-2 text-black"}>
        <button
          onClick={() => {
            console.log("Retry");
            resetErrorBoundary();
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
};
