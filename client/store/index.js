import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import products from './products'
import cart from './cart'
import wishlist from './wishList';
import skus from './skus';
import categories from './categories';
import productColors from './productColors';
import order from './order';

const reducer = combineReducers({ 
  auth,
  products,
  cart,
  wishlist,
  skus,
  categories,
  productColors,
  order});
  
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
