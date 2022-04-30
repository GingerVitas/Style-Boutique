import React, { useState } from 'react';

// redux
import { connect } from "react-redux";

// child components
import WishList from "../WishList";
import CartList from "../CartList";

// react-router
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

//MUI
import {ToggleButton }from "@mui/material";
import {ToggleButtonGroup} from "@mui/material";

const Cart = (props) => {
  const { cartlist, wishlist, username } = props;

  const [newToggle, setToggle] = useState('cart');
  const handleToggle = (e, newToggle) => {
    setToggle(newToggle);
  };
  console.log(cartlist);
  return (
    <div className='content'>
      {/* <h4>Hello, {username ? username : "guest"}</h4> */}
      <div style={{ display: "flex", padding:'30px 0' }}>
        <ToggleButtonGroup
          value={newToggle}
          exclusive
          onChange={handleToggle}
          aria-label="text alignment"
        >
        <ToggleButton value="cart" component={Link} to={'/cart'}>Shopping Bag ({cartlist.length})</ToggleButton>
          <ToggleButton value="wishlist" component={Link} to={'/cart/wishlist'}>Wishlist ({wishlist.length})</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <Route
          exact
          path="/cart"
          render={(routeProps) => <CartList routeProps={routeProps} />}
        />
        <Route
          exact
          path="/cart/wishlist"
          render={(routeProps) => <WishList routeProps={routeProps} />}
        />
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    cartlist: state.cart,
    wishlist: state.wishlist,
    username: state.auth.username,
  };
};

export default connect(mapState)(Cart);
