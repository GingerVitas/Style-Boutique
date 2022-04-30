import axios from 'axios';

// Action Types
const LOAD_ORDER = 'LOAD_ORDER';
const CREATE_ORDER = 'CREATE_ORDER';
const CLEAR_ORDER = 'CLEAR_ORDER';

// Action Creators
const _loadOrder = order => ({ type: LOAD_ORDER , order });
const _createOrder = order => ({ type: CREATE_ORDER, order  });
const _clearOrder = () => ({ type: CLEAR_ORDER });

// Thunks
export const loadOrCreate = auth => {
    return async (dispatch) => {
        try {
            if (auth.id) {
                let order = (await axios.get(`/api/orders/${auth.id}`)).data;
                // ^ could be null or order instance.
                if (!order) {
                    // if order returned is null, user has no cart, create a cart
                    order = (await axios.post(`/api/orders`, { auth })).data;
                    dispatch(_createOrder(order))
                } else {
                    // if order returned, set that order to redux store {}
                    dispatch(_loadOrder(order))
                }
            } 
        } catch (err) {
            console.log(err);
        }
    }
}

export const clearOrder = () => async dispatch => {
    try {
        dispatch(_clearOrder());
    } catch(err) {
        console.log(err);
    }
}

export default (state = {}, action) => {
    switch (action.type) {
        case LOAD_ORDER:
            return action.order;
        case CREATE_ORDER:
            return action.order;
        case CLEAR_ORDER:
            return {};
        default:
            return state
    }
}

// export const createOrder = auth => {
//     return async (dispatch) => {
//         const order = (await axios.post(`/api/orders`, {auth})).data
//         dispatch(_createOrder(order))
//     }
// }

// export const loadOrder = authId => {
//     return async (dispatch) => {
//         const order = (await axios.get(`/api/orders/${authId}`)).data;
//         dispatch(_loadOrder(order))
//     }
// }