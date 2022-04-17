import axios from 'axios';
import history from '../history';

// ACTION TYPES
const LOAD_LIST_ITEMS = 'LOAD_LIST_ITEMS';
const ADD_LIST_ITEM = 'CREATE_LIST_ITEM';

// ACTION CREATORS
const _loadListItems = lineItems => ({ type: LOAD_LIST_ITEMS, lineItems });
const _addListItem = lineItem => ({ type: ADD_LIST_ITEM, lineItem });

// THUNK CREATORS
export const loadListItems = () =>  async dispatch => {
    try {
        const { data } = await axios.get('/api/lineitems');
        dispatch(_loadListItems(data));
    } catch (err){
        console.log(err)
    }
}

export const addListItem = (product, auth) => async dispatch => {
    try {
        console.log({ product: { ...product }, auth: { ...auth } })
        const { data } = await axios.post('/api/lineitems', {product:{...product, price: parseFloat(product.price)}, auth:{...auth}});
        dispatch(_addListItem(data));
    } catch (err) {
        console.log(err)
    }
}

export default (state = [], action) => {
    switch (action.type) {
        case LOAD_LIST_ITEMS:
            return action.lineItems
        case ADD_LIST_ITEM:
            return state = [action.lineItem, ...state]
        default:
            return state
    }
}