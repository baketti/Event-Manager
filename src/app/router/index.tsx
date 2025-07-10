import React, { memo } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { 
  AuthenticationScene,
  LandingPageScene,
  LoginScene,
  RegistrationScene,
  DashboardScene,
  UsersScene,
  EventsScene,
  EventDetailsScene,
  NotFoundScene,
} from "../scenes";
import { AppContainer } from "@/components/AppContainer";
import { RoutesProtector } from "@/components/RoutesProtector";
import { AppSnackbar } from "@/components/AppSnackbar";
import useAppHooks from "./index.hooks";
import { AdminRoutesProtector } from "@/components/AdminRoutesProtector";

const App: React.FC = () => {
  const { open, type, message, handleClose } = useAppHooks();

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="" element={<AppContainer />}>
          <Route path="" element={<LandingPageScene />} />
          <Route path="authentication" element={<AuthenticationScene />}>
            <Route
              path="login"
              element={<LoginScene />}
            />
            <Route
              path="registration"
              element={<RegistrationScene />}
            />
          </Route>
          <Route path="app" element={<RoutesProtector />}>
            <Route path="" element={<DashboardScene />}>
              <Route index element={<Navigate to="events" replace />} />
              <Route
                path="events"
                element={<EventsScene />}
              />
              <Route
                path="events/:eventId"
                element={<EventDetailsScene />}
              />
              <Route path="admin" element={<AdminRoutesProtector />}>
                <Route
                  path="users"
                  element={<UsersScene />}
                />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundScene />} />
        </Route>
      </Routes>
      <AppSnackbar
        open={open}
        message={message}
        severity={type}
        onClose={handleClose}
      />
    </BrowserRouter>
  );
};

export default memo(App);
