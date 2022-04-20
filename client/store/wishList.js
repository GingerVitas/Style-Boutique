import axios from 'axios';
import history from '../history';

// ACTION TYPES
const LOAD_WISH_LIST = 'LOAD_WISH_LIST';
const ADD_WISH_LIST = 'ADD_WISH_LIST';
const REMOVE_WISH_LIST = 'REMOVE_WISH_LIST';

// ACTION CREATORS
const _loadWishList = () => ({ type: LOAD_WISH_LIST });
const _addWishList = lineItem => ({ type: ADD_WISH_LIST, lineItem });
const _removeWishList = lineItem => ({ type: REMOVE_WISH_LIST, lineItem });

// THUNK CREATORS
export const loadWishList = () => async dispatch => {
    try {
        dispatch(_loadWishList());
    } catch (err) {
        console.log(err)
    }
}

export const removeWishList = (listitem) => async dispatch => {
    try {
        dispatch(_removeWishList(listitem));
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
            return state;
        case ADD_WISH_LIST:
            return state = [action.lineItem, ...state];
        case REMOVE_WISH_LIST:
            return state.filter(item => item.id !== action.lineItem.id);
        default:
            return state
    }
}
