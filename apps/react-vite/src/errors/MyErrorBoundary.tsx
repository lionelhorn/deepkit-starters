import React, {FC, PropsWithChildren} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorFallback} from "./ErrorFallback.js";

export const MyErrorBoundary: FC<PropsWithChildren> = props => {
  const {children} = props;
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};
