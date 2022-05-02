import axios from 'axios';

// Action Types
const LOAD_USERS = 'LOAD_USERS';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const LOAD_ORDERS = 'LOAD_ORDERS';

// Action Creators
const _loadUsers = users => ({type: LOAD_USERS, users});
const _loadProducts = products => ({type: LOAD_PRODUCTS, products});
const _loadOrders = orders => ({type: LOAD_ORDERS, orders});

// Thunks
export const loadAdminUsers = () => {
  return async(dispatch) => {
    const users = (await axios.get(`/api/admin/users/`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })).data;
    dispatch(_loadUsers(users))
  }
};

export const loadAdminProducts = () => {
  return async(dispatch) => {
    const products = (await axios.get(`/api/admin/products/`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })).data;
    dispatch(_loadProducts(products))
  }
}

export const loadAdminOrders = () => {
  return async(dispatch) => {
    const orders = (await axios.get(`/api/admin/orders/`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })).data;
    dispatch(_loadOrders(orders))
  }
}

// Store

export const adminUsers = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.users;
    default:
      return state
  }
}

export const adminProducts = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.products;
    default:
      return state
  }
}

export const adminOrders = (state = [], action) => {
  switch (action.type) {
    case LOAD_ORDERS:
      return action.orders;
    default:
      return state
  }
}