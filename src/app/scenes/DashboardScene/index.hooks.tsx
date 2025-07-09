import { useNavigate } from "react-router-dom";
import domNavigation from "@/models/DomNavigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectors } from "../../redux-store";

export const useDashboardScene = () => {
  const navigate = useNavigate();
  const isLogged = useSelector(selectors.getIsLogged);

  useEffect(() => {
    if(!isLogged){
      navigate(`/authentication/login`)
    }
    domNavigation.navigate = navigate;
  }, [isLogged, navigate]);
  
  return {
    navigate,
  };
};
