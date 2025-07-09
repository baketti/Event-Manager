import React, { memo } from "react";
import {
  Box,
  BoxProps,
  Container,
  Stack,
  ThemeProvider,
} from "@mui/material";
import  theme from "@/themes";
import { AppNavbar } from "@/components/AppNavbar";
import { Footer } from "../Footer";

type PageContainerProps = {
  background?: string;
  sx?: BoxProps["sx"];
  children: React.ReactNode;
};

export const PageContainer = memo(
  ({
    children,
    sx,
    ...props
  }: PageContainerProps) => {
    
    return (
    <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            background: { 
              sm: "unset" 
            },
          }}
          {...props}
        >
          <Stack
            sx={{
              minHeight: "100vh",
            }}
          >
              <AppNavbar /> 
              <Container id="lgcontainer" maxWidth="xl" sx={{ minHeight: "100vh" }}>
                <Stack
                  sx={{
                    width: "100%",
                    ...sx,
                  }}
                >
                  {children}
                </Stack>
              </Container>
            </Stack>
          <Footer />
        </Box>
      </ThemeProvider>
    );
  },
);

PageContainer.displayName = "PageContainer";