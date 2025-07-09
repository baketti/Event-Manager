import { selectors } from "@/app/redux-store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import domNavigation from "@/models/DomNavigation";

export const useRoutesProtector = () => {
  const isLogged = useSelector(selectors.getIsLogged);
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log('isLogged:', isLogged);
    domNavigation.navigate = navigate;
  }, [isLogged, navigate]);

  return {
    isLogged,
  };
};
