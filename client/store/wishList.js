import axios from 'axios';
import history from '../history';

// ACTION TYPES
const LOAD_WISH_LIST = 'LOAD_WISH_LIST';
const ADD_WISH_LIST = 'ADD_WISH_LIST';
const REMOVE_WISH_LIST = 'REMOVE_WISH_LIST';

// ACTION CREATORS
const _loadWishList = lineItems => ({ type: LOAD_WISH_LIST, lineItems });
const _addWishList = lineItem => ({ type: ADD_WISH_LIST, lineItem });
const _removeWishList = lineItem => ({ type: REMOVE_WISH_LIST, lineItem });

// THUNK CREATORS
export const loadWishList = () => async dispatch => {
    try {
        const data  = (await axios.get('/api/wishlists')).data;
        dispatch(_loadWishList(data));
    } catch (err) {
        console.log(err)
    }
}

export const removeWishList = (listitemId) => async dispatch => {
    try {
        const data = (await axios.delete(`/api/wishlists/${listitemId}`)).data;
        dispatch(_removeWishList(data));
    } catch (err) {
        console.log(err)
    }
}

export const addWishList = (listitem) => async dispatch => {
    try{
        dispatch(_addWishList(listitem));
    } catch (err) {
        console.log(err)
    }
}

export default (state = [], action) => {
    switch (action.type) {
        case LOAD_WISH_LIST:
            return action.lineItems;
        case ADD_WISH_LIST:
            return state = [action.lineItem, ...state];
        case REMOVE_WISH_LIST:
            return state.filter(item => item.id !== action.lineItem.id);
        default:
            return state
    }
}
