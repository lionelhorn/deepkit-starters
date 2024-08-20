import { FC } from "react";


export const AnErrorHappened: FC = () => {
  return (
    <div className={"inline-flex items-center bg-red-200 p-1 rounded gap-1 text-black"}>
      Une erreur est survenue.
    </div>
  );
};
