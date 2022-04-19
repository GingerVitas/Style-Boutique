import React from "react";
import { connect } from "react-redux";
import { logout } from "../store";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavBarElems";

const Navbar = ({ handleClick, isLoggedIn, lineItems }) => (
    <Nav>
        {isLoggedIn ? (
        {/* The navbar will show these links after you log in */}
        <Bars >
          <NavMenu>
          <NavLink to="/home" activeStyle>
            Logo here
          </NavLink>
          <NavLink to="/clothing" activeStyle>
            Clothing
          </NavLink>
          <NavLink to="/accessories" activeStyle>
            Accessories
          </NavLink>
          <NavLink to="/footwear" activeStyle>
            Footwear
          </NavLink>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <NavLink to="/cart" activeStyle>
            Cart ({lineItems.length})
                        </NavLink>
                       
        </NavMenu>
        ) : (
       
        <NavMenu>
        {/* The navbar will show these links before you log in */}
          <NavLink to="/home" activeStyle>
            Logo here
          </NavLink>
          <NavLink to="/clothing" activeStyle>
            Clothing
          </NavLink>
          <NavLink to="/accessories" activeStyle>
            Accessories
          </NavLink>
          <NavLink to="/footwear" activeStyle>
            Footwear
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/signup" activeStyle>
              Sign Up
            </NavBtnLink>{" "}
          </NavBtn>
          <NavLink to="/cart" activeStyle>
            Cart ({lineItems.length})
          </NavLink>
        </NavMenu>
      )}
    <hr />
  </Nav>
);

const mapState = (state) => {
  return {
    lineItems: state.lineItems,
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
