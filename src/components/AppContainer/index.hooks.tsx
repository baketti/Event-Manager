import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import domNavigation from "@/models/DomNavigation";

export const useAppContainer = () => {
    const navigate = useNavigate();
    const isLandingPage = useMemo(() => {
      return location.pathname === "/";
    }, []);
       

    useEffect(() => {
      domNavigation.navigate = navigate;
    }, [navigate]);

    return {
      isLandingPage,
    };
}