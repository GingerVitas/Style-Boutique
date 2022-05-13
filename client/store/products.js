import axios from 'axios';
import history from '../history';

// ACTION TYPES
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';


// ACTION CREATORS
const _loadProducts = products => ({ type: LOAD_PRODUCTS, products });


// THUNK CREATORS
export const loadProducts = (category, query) => async dispatch => {
    try {
        const products = (await axios.get(`/api/products/shop/${category}${query}`)).data;
        dispatch(_loadProducts(products.content));
    } catch (err) {
        console.log(err)
    }
};



export default (state = [], action) => {
    switch(action.type) {
        case LOAD_PRODUCTS:
            return action.products;
        default:
            return state
    }
};