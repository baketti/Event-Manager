import { memo } from "react";
import { Avatar, Paper, Stack, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoginForm } from "@/components/LoginForm";


export const LoginScene = memo(() => {

  return (
    <Stack
      spacing={1}
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh" }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Paper sx={{ p: 4, minWidth: {xs:"unset",sm:"480px"}}}>
        <LoginForm />
      </Paper>
    </Stack>
  );
});

LoginScene.displayName = "LoginScene";
