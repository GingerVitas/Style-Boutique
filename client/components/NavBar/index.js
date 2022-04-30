import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store";
// import Search, { SearchIconWrapper, StyledInputBase } from "./NavBarElems";

import { AppBar, Toolbar, MenuItem, IconButton, Box, Typography } from "@mui/material";
// import { Button, Typography } from "@material-ui/core";
// import { styled, alpha } from "@mui/material/styles";
import { SearchIcon, ShoppingCart } from "@mui/icons-material";
import { StyledBadge } from "../../../public/styles";

const Navbar = ({ handleClick, isLoggedIn, lineItems }) => {
  return(
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          <AppBar position="fixed" sx={{ bgcolor: 'white'}} >
            <Toolbar sx={{ borderBottom: 'solid 1px grey'}}>
              <MenuItem component={Link} to={"/home"} sx={{ "&:hover": {bgcolor: "transparent"}}}>
                <Typography variant='logo'>STYLE BOUTIQUE</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/home"} onClick={handleClick} sx={{ "&:hover": { bgcolor: "transparent" }, marginLeft: "auto"}}>
                <Typography variant='menuitem'>Logout</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/account"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Typography variant='menuitem'>Account</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/cart"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <IconButton aria-label="cart" >
                  <StyledBadge badgeContent={lineItems.length} color="secondary">
                    <ShoppingCart />
                  </StyledBadge>
                </IconButton>
              </MenuItem>
            </Toolbar>

            <Toolbar sx={{ ["@media(min-width: 600px)"]: {minHeight: 10}}}>
              <MenuItem component={Link} to={"/clothing"} sx={{ "&:hover": { bgcolor: "transparent" }}}>
                <Typography variant='menuitem'>Clothing</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/footwear"} sx={{ "&:hover": { bgcolor: "transparent" }}}>
                <Typography variant='menuitem'>Footwear</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/accessories"} sx={{ "&:hover": { bgcolor: "transparent" }}}>
                <Typography variant='menuitem'>Accessories</Typography>
              </MenuItem>
            </Toolbar>
          </AppBar>
        </div>
      ) : (
        <div>
            <AppBar position="fixed" sx={{ bgcolor: 'white' }}>
              <Toolbar sx={{ borderBottom: 'solid 1px grey' }}>
                <MenuItem component={Link} to={"/home"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <Typography variant='logo'>STYLE BOUTIQUE</Typography>
                </MenuItem>
                  <MenuItem component={Link} to={"/login"} sx={{ "&:hover": { bgcolor: "transparent" }, marginLeft: 'auto'}}>
                  <Typography variant='menuitem'>Login</Typography>
                </MenuItem>
                  <MenuItem component={Link} to={"/signup"} sx={{ "&:hover": { bgcolor: "transparent" }}}>
                  <Typography variant='menuitem'>Sign Up</Typography>
                </MenuItem>
                  <MenuItem component={Link} to={"/cart"} sx={{ "&:hover": { bgcolor: "transparent" }}}>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={lineItems.length} color="secondary">
                      <ShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </MenuItem>
            </Toolbar>

            <Toolbar sx={{ ["@media(min-width: 600px)"]: { minHeight: 10 } }}>
              <MenuItem component={Link} to={"/clothing"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Typography variant='menuitem'>Clothing</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/footwear"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Typography variant='menuitem'>Footwear</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/accessories"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Typography variant='menuitem'>Accessories</Typography>
              </MenuItem>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </nav>
  </div>)
}
;

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
