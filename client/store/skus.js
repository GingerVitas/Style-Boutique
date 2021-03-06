import axios from 'axios';

// Action Types
const LOAD_SKUs = 'LOAD_SKUs';

// Action Creators
const _loadSKUs = skus => ({type: LOAD_SKUs, skus});

// Thunks
export const loadSKUs = productName => {
  return async(dispatch) => {
    let name;
    if(productName.includes('%')){
      name = decodeURIComponent(productName)
    } else {
      name = productName;
    }
    const skus = (await axios.get(`/api/skus/${name}`)).data
    dispatch(_loadSKUs(skus))
  }
}

// Store

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_SKUs:
      return action.skus;
    default:
      return state
  }
}