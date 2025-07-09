import { useNavigate } from "react-router-dom";
import domNavigation from "@/models/DomNavigation";
import { useEffect } from "react";

export const useRegistrationScene = () => {

  const navigate = useNavigate();
  useEffect(() => {
    domNavigation.navigate = navigate;
  });
  return {};
};
