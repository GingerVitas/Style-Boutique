import React from "react";
import { connect } from "react-redux";

// router
import { Link } from "react-router-dom";

//MUI
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

const NavDrawer = ({ toggleDrawer, user, handleClick, emptyCart, clearOrder }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Hello, {user ? user : "Guest"}
          </ListSubheader>
        }
      >
        <ListItem disablePadding>
          <ListItemButton component={Link} to={"/account"}>
            <ListItemText primary={"My Account"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={"/order_history"}>
            <ListItemText primary={"My Orders"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={"/contact_us"}>
            <ListItemText primary={"Contact us"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to={"/home"}
            onClick={() => {
              handleClick();
              emptyCart();
              clearOrder();
            }}
          >
            <ListItemText primary={"Log out"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default NavDrawer;
