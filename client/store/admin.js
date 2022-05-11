import axios from 'axios';

// Action Types
const LOAD_USERS = 'LOAD_USERS';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const LOAD_ORDERS = 'LOAD_ORDERS';
const DELETE_ORDER = 'DELETE_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';

// Action Creators
const _loadUsers = users => ({type: LOAD_USERS, users});
const _deleteUser = user => ({type: DELETE_USER, user});
const _updateUser = user => ({type: UPDATE_USER, user})
const _loadProducts = products => ({type: LOAD_PRODUCTS, products});
const _deleteProduct = product => ({type: DELETE_PRODUCT, product})
const _loadOrders = orders => ({type: LOAD_ORDERS, orders});
const _deleteOrder = order => ({type: DELETE_ORDER, order});
const _updateOrder = order => ({type: UPDATE_ORDER, order});

// User Thunks
const headers = {headers: {authorization: window.localStorage.getItem('token')}}

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

export const deleteUser = (user) => {
  return async(dispatch) => {
    await axios.delete(`/api/admin/users/${user.id}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch(_deleteUser(user))
  }
};

export const adminUpdateUser = user => {
  return async(dispatch) => {
   const updatedUser = (await axios.put(`/api/admin/users/${user.id}`,  user, {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  })).data;
   dispatch(_updateUser(updatedUser))
  }
}

//Product Thunks
export const loadAdminProducts = () => {
  return async(dispatch) => {
    const products = (await axios.get(`/api/admin/products/`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })).data;
    dispatch(_loadProducts(products))
  }
};

export const deleteProduct = (product) => async dispatch => {
  try{
    const colors = (await axios.get(`/api/colors/delete/${product.id}`)).data
    const skus = (await Promise.all(colors.map(async(color)=>{
      const colorSkus = (await axios.get(`/api/skus/delete/${color.id}`)).data
      return colorSkus
    }))).flat()
    
    skus.forEach(async(sku) => {
      await axios.delete(`/api/admin/productSKU/${sku.id}`, {
        headers: {
          authorization: window.localStorage.getItem('token')
        }
      })
    });

    colors.forEach(async(color)=> {
      await axios.delete(`/api/admin/productColor/${color.id}`, {
        headers: {
          authorization: window.localStorage.getItem('token')
        }
      });
    });

    await axios.delete(`/api/admin/products/${product.id}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch(_deleteProduct(product));
  }
  catch(err) {
      console.log(err)
  }
};


//Order Thunks
export const loadAdminOrders = () => {
  return async(dispatch) => {
    const orders = (await axios.get(`/api/admin/orders/`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })).data;
    dispatch(_loadOrders(orders))
  }
};

export const deleteOrder = order => {
  return async(dispatch) => {
    await axios.delete(`/api/admin/orders/${order.id}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch(_deleteOrder(order));
    loadAdminUsers();
  }
};

export const updateAdminOrder = (order) => {
  return async(dispatch) => {
    const updatedOrder = (await axios.put(`/api/admin/orders/${order.id}`, order, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    }));
    dispatch(_updateOrder(updatedOrder));
    loadAdminUsers();
  }
};

export const deleteLineItem = (lineItem, order) => {
  return async(dispatch) => {
    await axios.delete(`/api/admin/orders/lineItems/delete/${lineItem.id}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    const updatedOrder = (await axios.get(`/api/admin/orders/${order.id}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })).data;
    dispatch(_updateOrder(updatedOrder))
    loadAdminUsers();
  }
};

export const adminUpdateLineItem = (lineItem, order) => {
  return async(dispatch) => {
    await axios.put(`/api/admin/orders/lineItems/update/${lineItem.id}`, lineItem, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    const updatedOrder = (await axios.get(`/api/admin/orders/${order.id}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })).data;
    dispatch(_updateOrder(updatedOrder))
    loadAdminUsers();
  }
};

export const adminAddLineItem = (lineItem, order) => {
  return async(dispatch) => {
    await axios.post(`/api/admin/orders/lineItem`, lineItem, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    const updatedOrder = (await axios.get(`/api/admin/orders/${order.id}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })).data;
    dispatch(_updateOrder(updatedOrder));
    loadAdminUsers();
  }
}

// Store

export const adminUsers = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.users;
    case DELETE_USER:
      return [...state.filter(user => user.id !== action.user.id)]
    case UPDATE_USER:
      return [...state.map(user => user.id !== action.user.id ? user : action.user)]
    default:
      return state
  }
};

export const adminProducts = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.products;
    case DELETE_PRODUCT:
      return [...state.filter(product => product.id !== action.product.id)]
    default:
      return state
  }
};

export const adminOrders = (state = [], action) => {
  switch (action.type) {
    case LOAD_ORDERS:
      return action.orders;
    case DELETE_ORDER:
      return [...state.filter(order => order.id !== action.order.id)]  
    case UPDATE_ORDER:
      return [...state.map(order => order.id !== action.order.id ? order : action.order)]
    default:
      return state
  }
};