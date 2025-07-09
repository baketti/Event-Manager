import { memo } from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import homeImage from "@/assets/home.jpg";

export const LandingPageScene = memo(() => {
  return (
      <Box sx={{
        width: { xs: "100%", md: "30%" },
        height: "45%",
        flexFlow: "wrap",
        marginTop: "170px"
      }}>
        <Stack spacing={2} sx={{
          position: { xs: "absolute", sm: "relative" },
        }}>
            <Stack spacing={3} sx={{
              width: { xs: "100%", sm: "auto" },
            }}>
              <Typography variant="h1" sx={{
                '@media (min-width: 520px) and (max-width: 599px)': {
                  width: "60%",
                }
              }}>
                Sei pronto a scoprire il tuo prossimo evento?
              </Typography>
              
              <Link 
                component={RouterLink} 
                to="/authentication/login"
                sx={{ textDecoration: "none" }}
              >
                <Typography variant="h3" color="#0000FF" sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}>
                  Accedi <ArrowOutwardIcon />
                </Typography>
              </Link>
            </Stack>
        </Stack>
        <Box 
          position="absolute" 
          sx={{
            top: { sm: 'unset', md: 30 },
            bottom: { xs: 200, sm: "unset" },
            right: 0,
            zIndex: { xs: 0, md: -1 },
            //display: { sm: "none", md: "block" },
            width: { md: "60%" },
          }}
        >
          <Box
            id="home-image"
            component="img"
            src={homeImage}
            alt="Home Illustration"
            sx={{
              width: { xs: "100%", sm: "80%", md: "100%" },
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Box>

  );
});

LandingPageScene.displayName = "LandingPageScene";