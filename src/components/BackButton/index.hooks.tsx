import { useNavigate } from "react-router-dom";

export const useBackButton = () => {
    const navigate = useNavigate();
    
    return {
        navigate
    };
}