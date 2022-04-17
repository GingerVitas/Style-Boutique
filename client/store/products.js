import axios from 'axios';
import history from '../history';

// ACTION TYPES
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

// ACTION CREATORS
const _loadProducts = products => ({ type: LOAD_PRODUCTS, products });

// THUNK CREATORS
export const loadProducts = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/products');
        dispatch(_loadProducts(data));
    } catch (err) {
        console.log(err)
    }
}

export default (state = [], action) => {
    switch(action.type) {
        case LOAD_PRODUCTS:
            return action.products;
        default:
            return state
    }
}