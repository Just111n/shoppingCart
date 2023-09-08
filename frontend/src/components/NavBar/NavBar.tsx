import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          color="inherit"
          component={Link}
          to="/"
          style={{ backgroundColor: location.pathname === "/" ? "rgba(0, 0, 0, 0.1)" : undefined }}
        >
          Home
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/products"
          style={{ backgroundColor: location.pathname === "/products" ? "rgba(0, 0, 0, 0.1)" : undefined }}
        >
          Products
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/reviews"
          style={{ backgroundColor: location.pathname === "/reviews" ? "rgba(0, 0, 0, 0.1)" : undefined }}
        >
          Reviews
        </Button>

        <Typography variant="h5" style={{ flexGrow: 1, textAlign: "center" }}>
          Beauty.bd
        </Typography>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          component={Link}
          to="/checkout"
          style={{ backgroundColor: location.pathname === "/checkout" ? "rgba(0, 0, 0, 0.1)" : undefined }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
