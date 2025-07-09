import {memo} from "react";
import { useBackButton } from "./index.hooks";
import { ChevronLeft } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";

type BackButtonProps = {
    label: string;
};

export const BackButton = memo(({label}: BackButtonProps) => {
    const {
        navigate
    } = useBackButton();

    return (
        <Box sx={{
            position:"absolute", 
            left:0,
        }}>
            <Box onClick={()=> navigate(-1)} sx={{cursor:"pointer",display:"flex",     alignItems:"center"}}>
                <ChevronLeft
                    sx={{
                    width: "24px",
                    height: "24px",
                    color: "#E39257",
                    }}
                />
                <Typography 
                    variant="h6" 
                    color="#E39257" 
                    sx={{
                        "&:hover":{
                            textDecoration:"underline",
                        }
                    }}
                >
                    Torna alla lista {label}
                </Typography>
            </Box>
        </Box>
    )
});

BackButton.displayName = "BackButton";