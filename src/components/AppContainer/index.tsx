import { memo } from "react";
import { PageContainer } from "@/components/PageContainer";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { useAppContainer } from "./index.hooks";

export const AppContainer = memo(() => {
  const {
    isLandingPage
  } = useAppContainer();

  return (
    <PageContainer>
      {isLandingPage ? (
        <Outlet />
      ) : (
        <Stack width={1} alignItems="center" id="app-container">
          <Outlet />
        </Stack>
      )}
    </PageContainer>
  );
});

AppContainer.displayName = "AppContainer";