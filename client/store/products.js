import axios from 'axios';
import history from '../history';

// ACTION TYPES
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT'

// ACTION CREATORS
const _loadProducts = products => ({ type: LOAD_PRODUCTS, products });
const _deleteProduct = product => ({type: DELETE_PRODUCT, product})

// THUNK CREATORS
export const loadProducts = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/products');
        dispatch(_loadProducts(data));
    } catch (err) {
        console.log(err)
    }
}

export const deleteProduct = (product) => async dispatch => {
    try{
        console.log('********* IN DELETE THUNK **********', product)
        await axios.delete(`/api/products/${product.id}`)
        dispatch(_deleteProduct(product))
    }
    catch(err) {
        console.log(err)
    }
}

export default (state = [], action) => {
    switch(action.type) {
        case LOAD_PRODUCTS:
            return action.products;
        case DELETE_PRODUCT:
            return [...state.filter(product => product.id !== action.product.id)]
        default:
            return state
    }
}