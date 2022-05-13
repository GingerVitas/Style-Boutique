import axios from 'axios';

// Action Types
const LOAD_USERS = 'LOAD_USERS';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';
const LOAD_ADMIN_PRODUCTS = 'LOAD_ADMIN_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const LOAD_ORDERS = 'LOAD_ORDERS';
const DELETE_ORDER = 'DELETE_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';

// Action Creators
const _loadUsers = users => ({type: LOAD_USERS, users});
const _deleteUser = user => ({type: DELETE_USER, user});
const _updateUser = user => ({type: UPDATE_USER, user})
const _loadAdminProducts = products => ({type: LOAD_ADMIN_PRODUCTS, products});
const _addProduct = product => ({type: ADD_PRODUCT, product})
const _deleteProduct = product => ({type: DELETE_PRODUCT, product});
const _updateProduct = product => ({type: UPDATE_PRODUCT, product});
const _loadOrders = orders => ({type: LOAD_ORDERS, orders});
const _deleteOrder = order => ({type: DELETE_ORDER, order});
const _updateOrder = order => ({type: UPDATE_ORDER, order});

const auth = { headers: {authorization: window.localStorage.getItem('token')}}


// User Thunks

export const loadAdminUsers = () => {
  return async(dispatch) => {
    const users = (await axios.get(`/api/admin/users/`, auth)).data;
    dispatch(_loadUsers(users))
  }
};

export const deleteUser = (user) => {
  return async(dispatch) => {
    await axios.delete(`/api/admin/users/${user.id}`, auth);
    dispatch(_deleteUser(user))
  }
};

export const adminUpdateUser = user => {
  return async(dispatch) => {
   const updatedUser = (await axios.put(`/api/admin/users/${user.id}`,  user, auth)).data;
   dispatch(_updateUser(updatedUser))
  }
}

//Product Thunks
export const loadAdminProducts = () => {
  return async(dispatch) => {
    const products = (await axios.get(`/api/admin/products/`, auth)).data;
    dispatch(_loadAdminProducts(products))
  }
};

export const adminAddProduct = (product, colorArray) => {
  return async(dispatch) => {
    const newProduct = (await axios.post('/api/admin/product', product, auth)).data;

    const assignProductToColors = colorArray.map(color => {
      return {...color, productId: newProduct.id}
    });

    const onlyColorArray = assignProductToColors.map(color => {
      const {productSKUs, ...newColor} = color;
      return {...newColor}
    });

    const onlySKUArray = colorArray.map(color => {
      const {skuArray, ...justColors} = color;
      return skuArray
    });

    const colorsWithId = (await  Promise.all(onlyColorArray.map(async(color)=>{
      return (await axios.post('/api/admin/color', color, auth)).data
    }))).flat();

    const colorsWithIdAndSKUs = colorsWithId.map((color, index) => {
      return {...color, productSKUs: onlySKUArray[index]}
    });

    const assignColorToSKUs = colorsWithIdAndSKUs.map(color => {
      return color.productSKUs.map(sku => {
        return {...sku, productColorId: color.id}
      })
    }).flat(2);

    assignColorToSKUs.forEach(async(sku) => await axios.post('/api/admin/sku', sku, auth));
    
    const finalProduct = (await axios.get(`/api/admin/products/${newProduct.id}`, auth)).data;

    dispatch(_addProduct(finalProduct))
  }
}

export const adminAddColor = (color, skuArray) => {
  return async(dispatch) => {
    const productColor = (await axios.post(`/api/admin/color`, color, auth)).data;
    const newSKUArray = skuArray.map(sku => {
      return {
        ...sku,
        productColorId: productColor.id
      }
    })
    newSKUArray.forEach(async(sku) => await axios.post('/api/admin/sku', sku, auth));
    const products = (await axios.get(`/api/admin/products/`, auth)).data;
    dispatch(_loadProducts(products))
  }
}

export const deleteProduct = (product) => async dispatch => {
  try{
    const colors = (await axios.get(`/api/colors/delete/${product.id}`)).data
    const skus = (await Promise.all(colors.map(async(color)=>{
      const colorSkus = (await axios.get(`/api/skus/delete/${color.id}`)).data
      return colorSkus
    }))).flat()
    
    skus.forEach(async(sku) => {
      await axios.delete(`/api/admin/productSKU/${sku.id}`, auth)
    });

    colors.forEach(async(color)=> {
      await axios.delete(`/api/admin/productColor/${color.id}`, auth);
    });

    await axios.delete(`/api/admin/products/${product.id}`, auth);
    dispatch(_deleteProduct(product));
  }
  catch(err) {
      console.log(err)
  }
};

export const adminUpdateProduct = (product) => {
  return async(dispatch) => {
    const updatedProduct = (await axios.put(`/api/admin/products/${product.id}`, product, auth)).data;
    dispatch(_updateProduct(updatedProduct))
  }
};

export const adminUpdateSKU = (sku, product) => {
  return async(dispatch) => {
    await axios.put(`/api/admin/sku/${sku.id}`, sku, auth);
    const updatedProduct = (await axios.get(`/api/admin/products/${product.id}`, auth)).data
    dispatch(_updateProduct(updatedProduct))
  }
}


//Order Thunks
export const loadAdminOrders = () => {
  return async(dispatch) => {
    const orders = (await axios.get(`/api/admin/orders/`, auth)).data;
    dispatch(_loadOrders(orders))
  }
};

export const deleteOrder = order => {
  return async(dispatch) => {
    await axios.delete(`/api/admin/orders/${order.id}`, auth);
    dispatch(_deleteOrder(order));
  }
};

export const updateAdminOrder = (order) => {
  return async(dispatch) => {
    const updatedOrder = (await axios.put(`/api/admin/orders/${order.id}`, order, auth));
    dispatch(_updateOrder(updatedOrder));
  }
};

export const deleteLineItem = (lineItem, order) => {
  return async(dispatch) => {
    await axios.delete(`/api/admin/orders/lineItems/delete/${lineItem.id}`, auth);
    const updatedOrder = (await axios.get(`/api/admin/orders/${order.id}`, auth)).data;
    dispatch(_updateOrder(updatedOrder))
  }
};

export const adminUpdateLineItem = (lineItem, order) => {
  return async(dispatch) => {
    await axios.put(`/api/admin/orders/lineItems/update/${lineItem.id}`, lineItem, auth);
    const updatedOrder = (await axios.get(`/api/admin/orders/${order.id}`, auth)).data;
    dispatch(_updateOrder(updatedOrder))
  }
};

export const adminAddLineItem = (lineItem, order) => {
  return async(dispatch) => {
    await axios.post(`/api/admin/orders/lineItem`, lineItem, auth)
    const updatedOrder = (await axios.get(`/api/admin/orders/${order.id}`, auth)).data;
    dispatch(_updateOrder(updatedOrder));
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
    case LOAD_ADMIN_PRODUCTS:
      return action.products;
    case DELETE_PRODUCT:
      return [...state.filter(product => product.id !== action.product.id)]
    case UPDATE_PRODUCT:
      return [...state.map(product => product.id !== action.product.id ? product : action.product)]
    case ADD_PRODUCT:
      return [...state, action.product]
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