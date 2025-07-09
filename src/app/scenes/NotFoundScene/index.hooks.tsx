import { selectors } from "@/app/redux-store";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useNotFoundScene = () => {
    const navigate = useNavigate();
    const isLogged = useSelector(selectors.getIsLogged);

    const handleGoBackHome = useCallback(() => {
        if (isLogged) {
            navigate("/app/events");
            return;
        }
        navigate("/");
    }, [navigate, isLogged]);

    return {
        handleGoBackHome,
    };
}