import axios from 'axios';

// Action Types
const LOAD_ORDER = 'LOAD_ORDER';
const CREATE_ORDER = 'CREATE_ORDER';

// Action Creators
const _loadOrder = order => ({ type: LOAD_ORDER , order });
const _createOrder = order => ({ type: CREATE_ORDER, order  });

// Thunks
// export const loadOrder = authId => {
//     return async (dispatch) => {
//         const order = (await axios.get(`/api/orders/${authId}`)).data;
//         dispatch(_loadOrder(order))
//     }
// }

export const loadOrCreate = auth => {
    return async (dispatch) => {
        try {
            if (auth.id) {
                let order = (await axios.get(`/api/orders/${auth.id}`)).data;
                // ^ could be null or order instance.
                // 4.30.22 this thunk call is only made during component did amount. change to update.
                if (!order) {
                    // if order returned is null, user has no cart, create a cart
                    order = (await axios.post(`/api/orders`, { auth })).data;
                    dispatch(_createOrder(order))
                } else {
                    // if order returned, set that order to redux store {}
                    dispatch(_loadOrder(order))
                }
            } else {
                // if guest, create cart, store the returned cart {} to redux store
                const order = (await axios.post(`/api/orders`, { auth })).data
                dispatch(_createOrder(order))
            }
        } catch (err) {
            console.log(err)
        }
    }
}

// export const createOrder = auth => {
//     return async (dispatch) => {
//         const order = (await axios.post(`/api/orders`, {auth})).data
//         dispatch(_createOrder(order))
//     }
// }

export default (state = {}, action) => {
    switch (action.type) {
        case LOAD_ORDER:
            return action.order;
        case CREATE_ORDER:
            return action.order;
        default:
            return state
    }
}