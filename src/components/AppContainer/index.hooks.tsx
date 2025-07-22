import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import domNavigation from "@/models/DomNavigation";

export const useAppContainer = () => {
    const navigate = useNavigate();

    const location = useLocation(); 
    const isLandingPage = location.pathname === "/";
       

    useEffect(() => {
      domNavigation.navigate = navigate;
    }, [navigate]);

    return {
      isLandingPage,
    };
}