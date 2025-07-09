import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAdminRoutesProtector } from "./index.hooks";


export const AdminRoutesProtector = memo(() => {
  const { isAdmin } = useAdminRoutesProtector();

  if (!isAdmin) {
    return <Navigate replace to="/app/events" />;
  }
  return <Outlet />;
});

AdminRoutesProtector.displayName = "RoutesProtector";
