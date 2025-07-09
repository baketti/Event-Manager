import { memo } from "react";
import { useRoutesProtector } from "./index.hooks";
import { Outlet, Navigate } from "react-router-dom";

//type RoutesProtectorProps = {};

export const RoutesProtector = memo(() => {
  const { isLogged } = useRoutesProtector();

  return (
    <>
      {isLogged ? (
        <Outlet />
      ) : (
        <Navigate replace to={`/authentication/login`} />
      )}
    </>
  );
});
RoutesProtector.displayName = "RoutesProtector";
