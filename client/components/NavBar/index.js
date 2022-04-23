import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store";
import Search, { SearchIconWrapper, StyledInputBase } from "./NavBarElems";

import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { Button, Typography } from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
import { SearchIcon } from "@mui/icons-material/";

const Navbar = ({ handleClick, isLoggedIn, lineItems }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          <AppBar position="static">
            <Toolbar>
              {/* The navbar will show these links after you log in */}

              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                OUR NAME HERE
              </Typography>

              <a href="#" onClick={handleClick}>
                Logout
              </a>
              <Link to="/cart" activeStyle>
                Cart ({lineItems.length})
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      ) : (
        <div>
          <AppBar position="static">
            <Toolbar>
              {/* The navbar will show these links before you log in */}

              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                OUR NAME HERE
              </Typography>

              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up </Link>
              <Link to="/cart">Cart ({lineItems.length})</Link>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </nav>
    <hr />
    <div>
      <Box>
        <Link to="/clothing">Clothing</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/footwear">Footwear</Link>
      </Box>
    </div>
  </div>
);

const mapState = (state) => {
  return {
    lineItems: state.cart,
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
