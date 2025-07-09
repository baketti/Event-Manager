import { memo } from "react";
import { Stack } from "@mui/material";
import { DashboardDrawer } from "@/components/DashboardDrawer";
import { DashboardDrawerHeader } from "@/components/DashboardDrawerHeader";
import { Outlet } from "react-router";

export const DashboardScene = memo(() => {
  return (
    <Stack
      direction="row"
      width={1}
      sx={{
        minHeight: "100vh",
      }}
    >
      <DashboardDrawer />
      <Stack sx={{ flexGrow: 1, p: {xs: 'unset', sm: 3} }}> 
        <DashboardDrawerHeader />
        <Outlet />
      </Stack>
    </Stack>
  );
});

DashboardScene.displayName = "DashboardScene";
