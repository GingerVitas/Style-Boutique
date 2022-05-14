import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import products from "./products";
import cart from "./cart";
import wishlist from "./wishList";
import skus from "./skus";
import categories from "./categories";
import productColors from "./productColors";
import order from "./order";
import address from "./address";
import product from "./product";
import { adminUsers, adminProducts, adminOrders } from "./admin";

const reducer = combineReducers({
  auth,
  address,
  products,
  cart,
  wishlist,
  skus,
  categories,
  productColors,
  order,
  adminUsers,
  adminProducts,
  adminOrders,
  product
});

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })));
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
// export * from './products'
// export * from './cart'
// export * from './wishlist'
// export * from './skus'
// export * from './categories'
// export * from './productColors'
// export * from './order'
export * from "./admin";
