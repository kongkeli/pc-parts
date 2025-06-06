import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Shop
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Αρχική
        </Button>
        <Button color="inherit" component={Link} to="/products">
          Προϊόντα
        </Button>
        <Button color="inherit" component={Link} to="/categories">
          Κατηγορίες
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
