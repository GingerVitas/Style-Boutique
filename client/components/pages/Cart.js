import * as React from "react";

// redux
import { connect } from "react-redux";

// child components
import WishList from "../WishList";
import CartList from "../CartList";

// react-router
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

//MUI
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const Cart = (props) => {
  const { cartlist, wishlist, username, routeProps } = props;
  // const [alignment, setAlignment] = React.useState < string | null > ('left');

  // const handleAlignment = (
  //     event: React.MouseEvent<HTMLElement>,
  //     newAlignment: string | null,
  // ) => {
  //     setAlignment(newAlignment);
  // };

  return (
    <div>
      <p style={{ fontWeight: "bold", marginBottom: "20px" }}>
        Hello, {username ? username : "guest"}
      </p>
      <div style={{ display: "flex" }}>
        <ToggleButtonGroup>
          {/* value={alignment}
                onChange={handleAlignment}> */}
          <Link to={`/cart`}>
            <ToggleButton>Cart({cartlist.length})</ToggleButton>
          </Link>
          <Link to={`/cart/wishlist`}>
            <ToggleButton>Wishlist({wishlist.length})</ToggleButton>
          </Link>
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
