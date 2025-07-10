import { memo } from "react";
import { useAppNavbar } from "./index.hooks";
import { useTheme } from "@mui/material/styles";
import { Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const AppBar = ({ open, ...props }: AppBarProps & { open: boolean }) => {
  const theme = useTheme();
  const drawerWidth = 240;

  return (
    <MuiAppBar
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
      {...props}
    />
  );
};

type AppNavbarProps = {
  open?: boolean;
  onDrawerOpen?: () => void;
  onDrawerClose?: () => void;
  isLandingPage?: boolean;
};

export const AppNavbar = memo(({ 
  open, 
  onDrawerOpen, 
  onDrawerClose, 
  isLandingPage=true, 
}: AppNavbarProps) => {

  const { 
    isLogged, 
    isSmallScreen, 
  } = useAppNavbar();

  return (
    <AppBar position="fixed" open={false} id="app-navbar">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {!isLandingPage && isLogged && !isSmallScreen && 
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={onDrawerOpen}
              edge="start"
              sx={{
                marginRight: 1,
                opacity: open ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              <MenuIcon />
            </IconButton>
          }
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            {"Event Manager"}
          </Typography>
          {open && !isSmallScreen &&
            <IconButton onClick={onDrawerClose}>
              <ChevronLeftIcon htmlColor="white" />
            </IconButton>
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
});
AppNavbar.displayName = "AppNavbar";
