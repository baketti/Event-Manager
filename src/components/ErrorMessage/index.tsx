import { memo } from "react";
import { 
    Typography, 
    Box, 
    Stack, 
    Paper,
  } from "@mui/material";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

type ErrorMessageProps = {
    color?: string;
    children?: React.ReactNode;
};

export const ErrorMessage = memo(({color, children}: ErrorMessageProps) => {

    return(
        <Stack alignItems='center' justifyContent='center' textAlign='center' width={1} height='50vh'>
            <Paper sx={{p:3}}>
                <Stack  color={color || "grey"}>
                <Box 
                    sx={{
                        display:"flex", 
                        flexDirection:"column", 
                        alignItems:"center", 
                        justifyContent:"center",
                        gap:1
                    }}
                >
                    <WarningAmberIcon color="error"/>
                    <Typography variant="h4">
                        Sorry,
                    </Typography> 
                </Box>
                    {children}
                </Stack> 
            </Paper>
        </Stack>
    )
});

ErrorMessage.displayName = "ErrorMessage";