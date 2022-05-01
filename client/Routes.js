import React, { Component, Fragment } from "react";

//redux
import { connect } from "react-redux";
import { me } from "./store";
import { loadProducts } from "./store/products";
import { loadCategories } from './store/categories';
import { loadOrCreate, clearOrder } from "./store/order";
import { loadCart, transformGuestCartToUserCart } from "./store/cart";

//router
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

// child components
import { Login, Signup } from "./components/pages/AuthForm";
import Home from "./components/pages/Home";
import Account from "./components/pages/Account";
import Cart from "./components/pages/Cart";
import Checkout from "./components/Checkout";
import SingleProduct from './components/pages/SingleProduct';
import SignOut from "./components/pages/SignOut";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth !== this.props.auth) {
      console.log('COMPONENT DID UPDATE ENTERED');
      if (this.props.auth.id) {
        this.props.fetchOrder(this.props.auth);
      } else {
        this.props.clearOrder();
      }
    } else if (prevProps.order !== this.props.order) {
      if (this.props.order.id) {
        this.props.fetchCart(this.props.order);
        this.props.transformGuestCartToUserCart(this.props.order);
      }
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    console.log('this.props.auth: ', this.props.auth,'this.props.order: ', this.props.order);
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/account" component={Account} />
            <Route path="/cart" component={Cart} />
            <Route path='/:categoryName/:productName' component={SingleProduct} />
            <Route path="/checkout" render={(routeProps) => <Checkout routeProps={routeProps} />} />
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
            <Route path="/login" render={(routeProps) => <Login routeProps={routeProps} />}/>
            <Route path="/signup" render={(routeProps) => <Signup routeProps={routeProps}/>}/>
            <Route path="/cart" render={(routeProps) => <Cart routeProps={routeProps} />}/>
            <Route path='/:categoryName/:productName' component={SingleProduct} />
            <Route path="/checkout" render={(routeProps) => <Checkout routeProps={routeProps} />}/>
            <Route path="/logout" component={SignOut}/>
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
    order: state.order
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
    fetchOrder(auth){
      dispatch(loadOrCreate(auth));
    },
    clearOrder(){
      dispatch(clearOrder());
    },
    fetchCart(order){
      dispatch(loadCart(order));
    },
    transformGuestCartToUserCart(order){
      dispatch(transformGuestCartToUserCart(order))
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
