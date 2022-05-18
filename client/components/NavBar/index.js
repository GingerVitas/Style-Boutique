import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import { logout } from "../../store/auth";
import { emptyCart } from "../../store/cart";
import { clearOrder } from "../../store/order";

// MUI
import { AppBar, Toolbar, MenuItem, IconButton, Typography, Popover, Grid } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { StyledBadge } from "../../../public/styles";
// import { makeStyles } from "@mui/styles";

// Child components
import ClothingMenu from "./ClothingMenu";
import AccessoriesMenu from "./AccessoriesMenu";

// const useStyles = makeStyles(theme => ({
//   popover: {
//     pointerEvents: 'none',
//   },
//   popoverContent: {
//     pointerEvents: 'auto',
//     padding: theme.spacing(1)
//   },
// }));

const Navbar = ({ handleClick, empty_cart, clearOrder, isLoggedIn, lineItems, auth, firstName }) => {
  const clothingLink = useRef(null);
  const footwearLink = useRef(null);
  const accessoriesLink = useRef(null);

  // For Clothing Dropdown
  const [clothingChecked, setClothingChecked] = useState(false);
  const handleClothingLinkClick = () => {
    setAccessoriesChecked(false);
    setClothingChecked(!clothingChecked);
    clothingLink.current.firstChild.style.color = 'black';
    footwearLink.current.firstChild.style.color = 'grey';
    accessoriesLink.current.firstChild.style.color = 'grey';
  }

  //For Accessories Dropdown
  const [accessoriesChecked, setAccessoriesChecked] = useState(false);
  const handleAccessoriesLinkClick = () => {
    setClothingChecked(false);
    setAccessoriesChecked(!accessoriesChecked);
    accessoriesLink.current.firstChild.style.color = 'black';
    clothingLink.current.firstChild.style.color = 'grey';
    footwearLink.current.firstChild.style.color = 'grey';
  }

  //For Footwear Dropdown
  const handleFootwearLinkClick = () => {
    setClothingChecked(false);
    setAccessoriesChecked(false);
    footwearLink.current.firstChild.style.color = 'black';
    clothingLink.current.firstChild.style.color = 'grey';
    accessoriesLink.current.firstChild.style.color = 'grey';
  }

  const closeClothingMenu = () => {
    setClothingChecked(false);
  }

  const closeAccessoriesMenu = () => {
    setAccessoriesChecked(false);
  }


  // const useStyles = makeStyles(theme => ({
  //   popover: {
  //     pointerEvents: 'none',
  //   },
  //   popoverContent: {
  //     pointerEvents: 'auto',
  //     padding: theme.spacing(1)
  //   },
  // }));


  // For user account pop-over at hover
  // const [openedPopover, setOpenedPopover] = useState(false)
  // const popoverAnchor = useRef(null);
  // const popoverEnter = () => {
  //   setOpenedPopover(true)
  // };
  // const popoverLeave = () => {
  //   setOpenedPopover(false)
  // };
  // // const classes = useStyles();

  // const appBar = useRef(null);
  // console.log(appBar.current)
  // useEffect(() => {
  //   popoverLeave();
  //   () => {
  //     appBar.current.ariaHidden = false;
  //     popoverLeave();
  //   }
  // }, []);


  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div>
            <AppBar position="fixed" sx={{ bgcolor: "white" }}>
              <Toolbar sx={{ borderBottom: "solid 1px grey" }}>
                <MenuItem component={Link} to={"/home"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <Typography variant="logo">STYLE BOUTIQUE</Typography>
                </MenuItem>

                {auth.isAdmin ? (
                  <MenuItem component={Link} to={"/adminDashboard"} sx={{ "&:hover": { bgcolor: "transparent" }, marginLeft: "auto" }}>
                    <Typography variant="menuitem">Admin Dashboard</Typography>
                  </MenuItem>
                ) : (
                  ""
                )}

                <MenuItem component={Link} to={"/account"} sx={{
                  "&:hover": { bgcolor: "transparent" },
                  "&.Mui-focusVisible": { bgcolor: "transparent" },
                  marginLeft: "auto" }}
                >
                  <Typography
                    variant='menuitem'
                    // aria-owns="mouse-over-popover"
                    // aria-haspopup="true"
                    // onMouseEnter={popoverEnter}
                    // onMouseLeave={popoverLeave}
                  >
                    Hello, {firstName ? firstName : auth.username}
                  </Typography>
                  {/* <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                      paper: classes.popoverContent,
                    }}
                    open={openedPopover}
                    anchorEl={popoverAnchor.current}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
                    disableRestoreFocus
                  > */}
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                      <Grid item xs={4}>
                        <Link to={"/account"} sx={{ textDecoration: "none" }}>
                          <Typography sx={{ p: 1 }}>Account</Typography>
                        </Link>
                      </Grid>
                      <Grid item xs={4}>
                        <Link to={"/order_history"} sx={{ textDecoration: "none" }}>
                          <Typography sx={{ p: 1 }}>Orders</Typography>
                        </Link>
                      </Grid>
                      <Grid item xs={4}>
                        <Link to={"/contact_us"} sx={{ textDecoration: "none" }}>
                          <Typography sx={{ p: 1 }}>Contact Us</Typography>
                        </Link>
                      </Grid>
                      <Grid item xs={4}>
                        <Link onClick={() => {
                          handleClick();
                          empty_cart();
                          clearOrder();
                        }} to={"/home"} sx={{ textDecoration: "none" }}>

                          <Typography sx={{ p: 1 }}>Log Out</Typography>
                        </Link>
                      </Grid>
                    </Grid>
                  {/* </Popover> */}
                </MenuItem>
                <MenuItem component={Link} to={"/cart"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={lineItems && lineItems.length} color="secondary">
                      <ShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </MenuItem>
              </Toolbar>

              <Toolbar sx={{ ["@media(min-width: 600px)"]: { minHeight: 10 } }}>
                <MenuItem onClick={ handleClothingLinkClick } className='clothingLink' ref={clothingLink} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <Typography variant="menuitem">Clothing</Typography>
                </MenuItem>
                <MenuItem onClick={handleAccessoriesLinkClick} className='accessoriesLink' ref={accessoriesLink} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <Typography variant="menuitem">Accessories</Typography>
                </MenuItem>
                <MenuItem component={Link} to={`/shop/shoes`} onClick={handleFootwearLinkClick} className='footwearLink' ref={footwearLink} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <Typography variant="menuitem">Footwear</Typography>
                </MenuItem>
              </Toolbar>
              {
                clothingChecked? 
                  <ClothingMenu closeClothingMenu={closeClothingMenu}/>
                : accessoriesChecked?
                <AccessoriesMenu closeAccessoriesMenu={closeAccessoriesMenu}/>
                : <></>
              }
            </AppBar>
          </div>
        ) : (
          <div>
            <AppBar position="fixed" sx={{ bgcolor: "white" }}>
              <Toolbar sx={{ borderBottom: "solid 1px grey" }}>
                <MenuItem component={Link} to={"/home"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <Typography variant="logo">STYLE BOUTIQUE</Typography>
                </MenuItem>
                <MenuItem component={Link} to={"/login"} sx={{ "&:hover": { bgcolor: "transparent" }, marginLeft: "auto" }}>
                  <Typography variant="menuitem">Login</Typography>
                </MenuItem>
                <Typography>|</Typography>
                <MenuItem component={Link} to={"/signup"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <Typography variant="menuitem">Sign Up</Typography>
                </MenuItem>
                <MenuItem component={Link} to={"/cart"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={lineItems && lineItems.length} color="secondary">
                      <ShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </MenuItem>
              </Toolbar>

                <Toolbar sx={{ ["@media(min-width: 600px)"]: { minHeight: 10 } }}>
                  <MenuItem onClick={handleClothingLinkClick} className='clothingLink' ref={clothingLink} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                    <Typography variant="menuitem">Clothing</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleAccessoriesLinkClick} className='accessoriesLink' ref={accessoriesLink} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                    <Typography variant="menuitem">Accessories</Typography>
                  </MenuItem>
                  <MenuItem component={Link} to={`/shop/shoes`} onClick={handleFootwearLinkClick} className='footwearLink' ref={footwearLink} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                    <Typography variant="menuitem">Footwear</Typography>
                  </MenuItem>
                </Toolbar>
                {
                  clothingChecked ?
                    <ClothingMenu closeClothingMenu={closeClothingMenu} />
                    : accessoriesChecked ?
                      <AccessoriesMenu closeAccessoriesMenu={closeAccessoriesMenu} />
                      : <></>
                }
            </AppBar>
          </div>
        )}
      </nav>
    </div>
  );
};
const mapState = (state) => {
  return {
    lineItems: state.cart,
    isLoggedIn: !!state.auth.id,
    auth: state.auth,
    firstName: state.auth.firstName
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
    empty_cart() {
      dispatch(emptyCart());
    },
    clearOrder() {
      dispatch(clearOrder());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);
