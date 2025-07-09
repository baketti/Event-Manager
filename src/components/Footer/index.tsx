import { memo } from 'react';
import { Stack, Typography } from '@mui/material';


export const Footer = memo(() => {
  return (
    <Stack 
      width="100%" 
      height="32px" 
      alignItems="space-around" 
      justifyContent="flex-end"
      zIndex={1000}
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        backgroundColor: "primary.main",
        boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.5)",
        p:"6px 0",
      }}
    >
      <Typography sx={{m:"0 auto", fontSize:{xs: '0.7rem', sm: 'unset'}}} color='text.secondary'>
        © 2025 Event Manager – University project for the Frontend Development course
      </Typography>
    </Stack>
  );
});

Footer.displayName = 'Footer';