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
                    404 - Pagina non trovata
                </Typography>
                <Typography variant="body1" mt={2}>
                    La pagina che stai cercando non esiste.
                </Typography>
                <Button variant="contained" sx={{ mt: 3 }} onClick={handleGoBackHome}>
                    Torna alla Home
                </Button>
            </ErrorMessage>
        </Box>
    );
};
