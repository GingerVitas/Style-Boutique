import axios from 'axios';

// Action Types
const LOAD_PRODUCT = 'LOAD_PRODUCT';

// Action Creators
const _loadProduct = product => ({type: LOAD_PRODUCT, product});

// Thunks
export const loadProduct = product => {
  return async(dispatch) => {
    const product = (await axios.get(`/api/products/${product.id}`)).data
    dispatch(_loadProduct(product))
  }
}

// Store

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return action.product;
    default:
      return state
  }
}