import { memo } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDashboardDrawer } from "./index.hooks";
import { DashboardDrawerHeader } from "@/components/DashboardDrawerHeader";
import CategoryIcon from "@mui/icons-material/Category";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { AppNavbar } from "../AppNavbar";

const drawerWidth = 240;
const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = ({ open, ...props }: DrawerProps & { open: boolean }) => {
  const theme = useTheme();

  return (
    <MuiDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme),
        }),
        ...(!open && {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        }),
      }}
      {...props}
    />
  );
};

export const DashboardDrawer = memo(() => {
  const {
    open,
    handleDrawerOpen,
    handleDrawerClose,
    navigate,
    handleLogout,
    menuItems,
  } = useDashboardDrawer();

  return (
    <>
      <AppNavbar open={open} onDrawerOpen={handleDrawerOpen} onDrawerClose={handleDrawerClose} isLandingPage={false}/>
      <Drawer variant="permanent" open={open}>
        <DashboardDrawerHeader/>
        <Divider />
        <List>
          {menuItems.map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() =>
                  index == 0
                    ? navigate("admin/users")
                    : navigate("events")
                }
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text === "Users" ? (
                    <AccountBoxIcon htmlColor="white" />
                  ) : text === "Events" ? (
                    <ApartmentIcon htmlColor="white" />
                  ) : (
                    <CategoryIcon htmlColor="white" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Esci"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={handleLogout}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LogoutIcon htmlColor="white" />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
});

DashboardDrawer.displayName = "DashboardDrawer";
