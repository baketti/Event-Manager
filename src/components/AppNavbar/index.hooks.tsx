import { selectors } from "@/app/redux-store";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

export const useAppNavbar = () => {
  const isLogged = useSelector(selectors.getIsLogged);
  
  const isSmallScreen = useMediaQuery('(max-width:1030px)');

  return {
    isLogged,
    isSmallScreen,
  };
};
