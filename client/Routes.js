import React, { Component, Fragment } from "react";

//redux
import { connect } from "react-redux";
import { me } from "./store";
import { loadProducts } from "./store/products";

//router
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

// child components
import { Login, Signup } from "./components/pages/AuthForm";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Checkout from "./components/Checkout";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.fetchProducts();
  }

  render() {
    const {isLoggedIn} = this.props
    //console.log('auth', this.props.auth, this.props, history)
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route
              path="/checkout"
              render={(routeProps) => <Checkout routeProps={routeProps} />}
            />
            <Redirect
              to={
                this.props.location.state &&
                this.props.location.state.prevPath === "/cart"
                  ? "/checkout"
                  : "/home"
              }
            />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route
              path="/cart"
              render={(routeProps) => <Cart routeProps={routeProps} />}
            />
            <Route
              path="/checkout"
              render={(routeProps) => <Checkout routeProps={routeProps} />}
            />
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
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
