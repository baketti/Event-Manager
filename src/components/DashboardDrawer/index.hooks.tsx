import { useState, useCallback, useMemo } from "react";
import { actions, selectors } from "@/app/redux-store";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export const useDashboardDrawer = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const isSmallScreen = useMediaQuery('(max-width:1030px)');
    const [drawerOpen, setDrawerOpen] = useState(true);
    
    const open = useMemo(() => {
      return isSmallScreen ? false : drawerOpen;
    }, [drawerOpen, isSmallScreen]);

    const handleDrawerOpen = useCallback(() => {
      setDrawerOpen(true);
    },[]);

    const handleDrawerClose = useCallback(() => {
      setDrawerOpen(false);
    },[]);

    const handleLogout = useCallback(() => {
      dispatch(actions.deleteSessions());
    },[dispatch]);

    const isAdmin = useSelector(selectors.getIsAdmin);

    const menuItems = useMemo(() => {
      const items = ["Events"];
      if (isAdmin) {
        items.unshift("Users");
      }
      return items;
    }, [isAdmin]);

    return {
      theme,
      open,
      handleDrawerOpen,
      handleDrawerClose,
      navigate,
      handleLogout,
      menuItems,
    };
};
