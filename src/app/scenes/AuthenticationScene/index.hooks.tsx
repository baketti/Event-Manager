import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectors } from "../../redux-store";

export const useAuthenticationScene = () => {
  const navigate = useNavigate();
  const isLogged = useSelector(selectors.getIsLogged);

  useEffect(() => {
    if(isLogged){
      navigate(`/app/events`);
    }
  }, [isLogged, navigate]);

  return {};
};
