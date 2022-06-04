import React, { useState, useEffect, useRef, Fragment } from "react";
import { Link } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import { logout } from "../../store/auth";
import { emptyCart } from "../../store/cart";
import { clearOrder } from "../../store/order";

// MUI
import { AppBar, Toolbar, MenuItem, IconButton, Typography, Popover, Grid, Drawer } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { StyledBadge } from "../../../public/styles";
import MenuIcon from "@mui/icons-material/Menu";

// Child components
import ClothingMenu from "./ClothingMenu";
import AccessoriesMenu from "./AccessoriesMenu";
import NavDrawer from "./NavDrawer";

const Navbar = ({ handleClick, empty_cart, clearOrder, isLoggedIn, lineItems, auth, firstName }) => {
  // For Mobile view hamburger
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawer(open);
  };

  // For popover
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopover = (event) => {
    console.log("popover clicked");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const clothingLink = useRef(null);
  const footwearLink = useRef(null);
  const accessoriesLink = useRef(null);

  // For Clothing Dropdown
  const [clothingChecked, setClothingChecked] = useState(false);
  const handleClothingLinkClick = () => {
    setAccessoriesChecked(false);
    setClothingChecked(!clothingChecked);
    clothingLink.current.firstChild.style.color = "black";
    footwearLink.current.firstChild.style.color = "grey";
    accessoriesLink.current.firstChild.style.color = "grey";
  };

  //For Accessories Dropdown
  const [accessoriesChecked, setAccessoriesChecked] = useState(false);
  const handleAccessoriesLinkClick = () => {
    setClothingChecked(false);
    setAccessoriesChecked(!accessoriesChecked);
    accessoriesLink.current.firstChild.style.color = "black";
    clothingLink.current.firstChild.style.color = "grey";
    footwearLink.current.firstChild.style.color = "grey";
  };

  //For Footwear Dropdown
  const handleFootwearLinkClick = () => {
    setClothingChecked(false);
    setAccessoriesChecked(false);
    footwearLink.current.firstChild.style.color = "black";
    clothingLink.current.firstChild.style.color = "grey";
    accessoriesLink.current.firstChild.style.color = "grey";
  };

  const closeClothingMenu = () => {
    setClothingChecked(false);
  };

  const closeAccessoriesMenu = () => {
    setAccessoriesChecked(false);
  };

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div>
            <AppBar position="fixed" sx={{ bgcolor: "white" }}>
              <Toolbar
                sx={{
                  borderBottom: "solid 1px grey",
                  padding: {
                    xxs: "0",
                    xs: "0",
                    sm: "0 16px",
                  },
                  width: "100%",
                }}
              >
                <MenuItem
                  component={Link}
                  to={"/home"}
                  sx={{
                    "&:hover": { bgcolor: "transparent" },
                  }}
                >
                  <Typography
                    variant="logo"
                    sx={{
                      fontSize: {
                        xxs: "20px",
                        xs: "20px",
                        sm: "30px",
                      },
                    }}
                  >
                    STYLE BOUTIQUE
                  </Typography>
                </MenuItem>

                {auth.isAdmin ? (
                  <MenuItem component={Link} to={"/adminDashboard"} sx={{ "&:hover": { bgcolor: "transparent" }, marginLeft: "auto" }}>
                    <Typography variant="menuitem">Admin Dashboard</Typography>
                  </MenuItem>
                ) : (
                  ""
                )}
                <Fragment>
                  <MenuItem
                    onClick={toggleDrawer(true)}
                    sx={{
                      "&:hover": { bgcolor: "transparent" },
                      paddingTop: "13px",
                      display: {
                        xxs: "inline",
                        xs: "inline",
                        sm: "none",
                      },
                      marginLeft: "auto",
                    }}
                  >
                    <MenuIcon color="black" sx={{ fontSize: "30px" }} />
                  </MenuItem>
                  <Drawer anchor="right" open={drawer} onClose={toggleDrawer(false)}>
                    <NavDrawer
                      toggleDrawer={toggleDrawer}
                      user={firstName ? firstName : auth.username}
                      handleClick={handleClick}
                      emptyCart={empty_cart}
                      clearOrder={clearOrder}
                    />
                  </Drawer>
                </Fragment>
                <MenuItem
                  sx={{
                    "&:hover": { bgcolor: "transparent" },
                    "&.Mui-focusVisible": { bgcolor: "transparent" },
                    marginLeft: "auto",
                    display: {
                      xxs: "none",
                      xs: "none",
                      sm: "inline",
                    },
                  }}
                  aria-describedby={id}
                  onClick={handlePopover}
                >
                  <Typography variant="menuitem" aria-owns="mouse-over-popover" aria-haspopup="true">
                    Hello, {firstName ? firstName : auth.username}
                  </Typography>
                </MenuItem>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
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
                      <Link
                        onClick={() => {
                          handleClick();
                          empty_cart();
                          clearOrder();
                        }}
                        to={"/home"}
                        sx={{ textDecoration: "none" }}
                      >
                        <Typography sx={{ p: 1 }}>Log Out</Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Popover>
                <MenuItem
                  component={Link}
                  to={"/cart"}
                  sx={{
                    "&:hover": { bgcolor: "transparent" },
                    padding: {
                      xxs: "6px 6px",
                      xs: "6px 6px",
                      sm: "6px 16px",
                    },
                  }}
                >
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={lineItems && lineItems.length} color="secondary">
                      <ShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </MenuItem>
              </Toolbar>

              <Toolbar sx={{ ["@media(min-width: 600px)"]: { minHeight: 10 } }}>
                <MenuItem onClick={handleClothingLinkClick} className="clothingLink" ref={clothingLink} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <Typography variant="menuitem">Clothing</Typography>
                </MenuItem>
                <MenuItem onClick={handleAccessoriesLinkClick} className="accessoriesLink" ref={accessoriesLink} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <Typography variant="menuitem">Accessories</Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to={`/shop/shoes`}
                  onClick={handleFootwearLinkClick}
                  className="footwearLink"
                  ref={footwearLink}
                  sx={{ "&:hover": { bgcolor: "transparent" } }}
                >
                  <Typography variant="menuitem">Footwear</Typography>
                </MenuItem>
              </Toolbar>
              {clothingChecked ? (
                <ClothingMenu closeClothingMenu={closeClothingMenu} />
              ) : accessoriesChecked ? (
                <AccessoriesMenu closeAccessoriesMenu={closeAccessoriesMenu} />
              ) : (
                <></>
              )}
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
                <MenuItem onClick={handleClothingLinkClick} className="clothingLink" ref={clothingLink} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <Typography variant="menuitem">Clothing</Typography>
                </MenuItem>
                <MenuItem onClick={handleAccessoriesLinkClick} className="accessoriesLink" ref={accessoriesLink} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                  <Typography variant="menuitem">Accessories</Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to={`/shop/shoes`}
                  onClick={handleFootwearLinkClick}
                  className="footwearLink"
                  ref={footwearLink}
                  sx={{ "&:hover": { bgcolor: "transparent" } }}
                >
                  <Typography variant="menuitem">Footwear</Typography>
                </MenuItem>
              </Toolbar>
              {clothingChecked ? (
                <ClothingMenu closeClothingMenu={closeClothingMenu} />
              ) : accessoriesChecked ? (
                <AccessoriesMenu closeAccessoriesMenu={closeAccessoriesMenu} />
              ) : (
                <></>
              )}
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
    firstName: state.auth.firstName,
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
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
