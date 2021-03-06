import React, { Component, Fragment } from "react";

//redux
import { connect } from "react-redux";
import { me } from "./store";
import { loadProducts } from "./store/products";
import { loadCategories } from "./store/categories";
import { loadOrCreate } from "./store/order";
import { loadCart, transformGuestCartToUserCart } from "./store/cart";

//router
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

// child components
import { Login, Signup } from "./components/pages/AuthForm";
import Home from "./components/pages/Home";
import Account from "./components/pages/Account";
import Addresses from "./components/pages/Addresses";
import PersonalInfo from "./components/pages/PersonalInfo";
import OrderHistory from "./components/pages/OrderHistory";
import ContactUs from "./components/pages/ContactUs";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import ReviewOrder from "./components/pages/ReviewOrder";
import SingleProduct from "./components/pages/SingleProduct";
import SignOut from "./components/pages/SignOut";
import AdminDashboard from "./components/pages/AdminDashboard";
import Unauthorized from "./components/pages/Unauthorized";
import OrderPlaced from "./components/pages/OrderPlaced";
import Products from "./components/Products";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.fetchCategories();
    // this.props.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    // guest -> login
    if (prevProps.auth !== this.props.auth) {
      if (this.props.auth.id) {
        this.props.fetchOrder(this.props.auth);
      }
    }

    // empty order to user order
    // open order to closed order
    if (prevProps.order !== this.props.order) {
      if (this.props.order.final) {
        this.props.fetchOrder(this.props.auth);
        this.props.fetchCart(this.props.order);
      } else {
        this.props.fetchCart(this.props.order);
        this.props.transformGuestCartToUserCart(this.props.order);
      }
    }
  }

  render() {
    const { isLoggedIn, auth } = this.props;
    console.log("this.props.auth: ", this.props.auth, "this.props.order: ", this.props.order, this.props);
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/order_history" component={OrderHistory} />
            <Route path="/account" component={Account} />
            <Route path="/contact_us" component={ContactUs} />
            <Route path="/cart" component={Cart} />
            <Route path="/shop/:category/:productName" component={SingleProduct} />
            <Route path="/shop/:category" component={Products} />
            <Route path="/checkout" render={(routeProps) => <Checkout routeProps={routeProps} />} />
            <Route exact path="/order_placed" component={OrderPlaced} />
            <Route path="/review_order" component={ReviewOrder} />
            <Route path="/adminDashboard" component={auth.isAdmin ? AdminDashboard : Unauthorized} />
            <Redirect to={this.props.location.state && this.props.location.state.prevPath === "/cart" ? "/cart" : "/home"} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" render={(routeProps) => <Login routeProps={routeProps} />} />
            <Route path="/signup" render={(routeProps) => <Signup routeProps={routeProps} />} />
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/cart" render={(routeProps) => <Cart routeProps={routeProps} />} />
            <Route path="/shop/:category/:productName" component={SingleProduct} />
            <Route path="/shop/:category" component={Products} />
            <Route path="/checkout" render={(routeProps) => <Checkout routeProps={routeProps} />} />
            <Route path="/logout" component={SignOut} />
            <Route path="/adminDashboard" component={Unauthorized} />
          </Switch>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    auth: state.auth,
    order: state.order,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    fetchProducts() {
      dispatch(loadProducts());
    },
    fetchCategories() {
      dispatch(loadCategories());
    },
    fetchOrder(auth) {
      dispatch(loadOrCreate(auth));
    },
    fetchCart(order) {
      dispatch(loadCart(order));
    },
    transformGuestCartToUserCart(order) {
      dispatch(transformGuestCartToUserCart(order));
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
