import { Box, Typography, Button } from "@mui/material";
import { useNotFoundScene } from "./index.hooks";
import { ErrorMessage } from "@/components/ErrorMessage";

export const NotFoundScene = () => {
  
    const {
        handleGoBackHome,
    } = useNotFoundScene();

    return (
        <Box 
            sx={{
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }} 
            textAlign="center" 
            mt={10}
        >
            <ErrorMessage color="error">
                <Typography variant="h3">
                    {"404 - Page not found"}
                </Typography>
                <Typography variant="body1" mt={2}>
                    {"The page you are looking for does not exist."}
                </Typography>
                <Button variant="contained" sx={{ mt: 3 }} onClick={handleGoBackHome}>
                    {"Back to Home"}
                </Button>
            </ErrorMessage>
        </Box>
    );
};
