import React, {useState, useRef} from "react";
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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
  },
  popoverContent: {
    pointerEvents: 'auto',
    padding: theme.spacing(1)
  },
  
}));

const Navbar = ({ handleClick, empty_cart, clearOrder, isLoggedIn, lineItems, auth, firstName }) => {

  // For user account pop-over at hover
  const [openedPopover, setOpenedPopover] = useState(false)
  const popoverAnchor = useRef(null);
  const popoverEnter = ({ currentTarget }) => {
    setOpenedPopover(true)
  };
  const popoverLeave = ({ currentTarget }) => {
    setOpenedPopover(false)
  };
  const classes = useStyles();

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
              <MenuItem component={Link} to={"/home"} onClick={()=> {handleClick(); empty_cart(); clearOrder() }} sx={{ "&:hover": { bgcolor: "transparent" },  marginLeft: !auth.isAdmin ? "auto" : ''}}>
                <Typography variant='menuitem'>Logout</Typography>
              </MenuItem>
                <MenuItem component={Link} to={"/account"} sx={{ 
                  "&:hover": { bgcolor: "transparent" },
                  "&.Mui-focusVisible": { bgcolor: "transparent" }
                }} >
                <Typography 
                  variant='menuitem'
                    ref={popoverAnchor}
                    aria-owns="mouse-over-popover"
                    aria-haspopup="true"
                    onMouseEnter={popoverEnter}
                    onMouseLeave={popoverLeave}
                >
                    Hello, {firstName}
                </Typography>
                  <Popover
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
                  >
                    <Grid 
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    > 
                      <Grid item xs={4}><Link to={"/account"} sx={{ textDecoration: "none" }}><Typography sx={{ p: 1 }}>My Account</Typography></Link></Grid>
                      <Grid item xs={4}><Link to={"/account"} sx={{textDecoration: "none"}}><Typography sx={{ p: 1 }}>Orders</Typography></Link></Grid>
                      <Grid item xs={4}><Link to={"/account"} sx={{ textDecoration: "none" }}><Typography sx={{ p: 1 }}>Setting</Typography></Link></Grid>
                    </Grid>
                  </Popover>
              </MenuItem>
              <MenuItem component={Link} to={"/cart"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <IconButton aria-label="cart" >
                  <StyledBadge badgeContent={lineItems && lineItems.length} color="secondary">
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
                    <StyledBadge badgeContent={lineItems&& lineItems.length} color="secondary">
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
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);
