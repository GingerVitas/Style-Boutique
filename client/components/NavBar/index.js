import React from "react";
import { Link } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import { logout } from "../../store/auth";
import { emptyCart } from "../../store/cart";

// MUI
import { AppBar, Toolbar, MenuItem, IconButton, Typography } from "@mui/material";
import { SearchIcon, ShoppingCart } from "@mui/icons-material";
import { StyledBadge } from "../../../public/styles";
// import { styled, alpha } from "@mui/material/styles";
// import Search, { SearchIconWrapper, StyledInputBase } from "./NavBarElems";

const Navbar = ({ handleClick, empty_cart, isLoggedIn, lineItems, auth }) => {
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
              {auth.isAdmin ? <MenuItem component={Link} to={"/adminDashboard"} sx={{ "&:hover": { bgcolor: "transparent" }, marginLeft: "auto"}}>
                <Typography variant='menuitem'>Admin Dashboard</Typography>
              </MenuItem> : '' }
              <MenuItem component={Link} to={"/home"} onClick={()=> {handleClick(); empty_cart()}} sx={{ "&:hover": { bgcolor: "transparent" },  marginLeft: !auth.isAdmin ? "auto" : ''}}>
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
    auth: state.auth
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
    empty_cart() {
      dispatch(emptyCart());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);
