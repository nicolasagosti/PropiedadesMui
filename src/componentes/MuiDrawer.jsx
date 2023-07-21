import { Drawer, Box, Typography, IconButton } from "@mui/material";
import  MenuIcon  from "@mui/icons-material/Menu";
import { useState } from "react";

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
    <IconButton
    size="large"
    edge='start'
    color="inherit"
    aria-label="logo"
    onClick={()=>setIsDrawerOpen(true)}
    >
      <MenuIcon></MenuIcon>
    </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation"></Box>
        <Typography variant="h4" component="div" textAlign='center'>
          Side Panel
        </Typography>
      </Drawer>
    </>
  );
};
