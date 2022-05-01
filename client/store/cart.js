import axios from 'axios';
import history from '../history';

// ACTION TYPES
const LOAD_CART = 'LOAD_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';
const HIDE_LIST_ITEM = 'HIDE_LIST_ITEM';
const ADD_BACK_TO_CART = 'ADD_BACK_TO_CART';
const UPDATE_CART = 'UPDATE_CART';
const EMPTY_CART = 'EMPTY_CART';

// ACTION CREATORS
const _loadCart = lineItems => ({ type: LOAD_CART, lineItems });
const _addToCart = lineItem => ({ type: ADD_TO_CART, lineItem });
const _updateCart = lineItem => ({ type: UPDATE_CART, lineItem });
const _removeListItem = lineItem => ({ type: REMOVE_LIST_ITEM, lineItem });
const _hideListItem = lineItem => ({ type: HIDE_LIST_ITEM, lineItem });
const _addBackToCart = lineItem => ({ type: ADD_BACK_TO_CART, lineItem });
const _emptyCart = () => ({ type: EMPTY_CART});

// THUNK CREATORS
export const loadCart = (order) =>  async dispatch => {
    try {
        const line_items = (await axios.get(`/api/lineitems/${order.id}`)).data
        dispatch(_loadCart(line_items));
    } catch (err){
        console.log(err)
    }
}

let cart = [];
export const transformGuestCartToUserCart = (order) => async dispatch => {
    try {
        let guestCart = JSON.parse(window.localStorage.getItem('cart'));
        if(guestCart) {
            await Promise.all(
                guestCart.map(async (lineitem) => {
                    const line_item = (await axios.put(`/api/lineitems/${lineitem.id}`, { lineitem, orderId: order.id })).data;
                    console.log('RETURNED UPDATED line_item', line_item);
                    dispatch(_updateCart(line_item));
                })
            );
            window.localStorage.removeItem('cart');
            cart = [];
        }     
    } catch (err) {
        console.log(err)
    }
}

export const addToCart = ( lineitem, order ) => async dispatch => {
    try {
        const token = window.localStorage.getItem('token');
        if (token) {
            const line_item = (await axios.post('/api/lineitems', { lineitem, orderId: order.id})).data;
            console.log('CREATED LINEITEM', line_item)
            dispatch(_addToCart(line_item));

            //decrement SKU available quantity, so product detail pg's drop down updates automatically.
            const sku = (await axios.put(`/api/skus/${lineitem.productSKUId}`, { lineitem })).data;
            console.log('RETURNED UPDATED SKU', sku);
        } else {
            const line_item = (await axios.post(`/api/lineitems/`, { lineitem })).data;
            cart.push(line_item);
            window.localStorage.setItem("cart", JSON.stringify(cart));
            console.log('CREATED LINEITEM', JSON.parse(window.localStorage.getItem('cart')))
            dispatch(_addToCart(line_item));
        }
    } catch(err) {
        console.log(err)
    }
}

export const emptyCart = () => async dispatch => {
    try {
        dispatch(_emptyCart());
    } catch(err) {
        console.log(err)
    }
}

export const removeListItem = (listitemId) => async dispatch => {
    try {
        const data = (await axios.delete(`/api/lineitems/${listitemId}`)).data;
        dispatch(_removeListItem(data));
    } catch(err) {
        console.log(err)
    }
}

export const hideListItem = (listItem) => dispatch => {
    try {
        dispatch(_hideListItem(listItem));
    } catch(err) {
        console.log(err)
    }
}

export const addBackToCart = (listItem) => dispatch => {
    try {
        dispatch(_addBackToCart(listItem))
    } catch(err) {
        console.log(err)
    }
}

export default (state = [], action) => {
    switch (action.type) {
        case LOAD_CART:
            return state = [...state, ...action.lineItems];
        case ADD_TO_CART:
            return state = [action.lineItem, ...state];
        case UPDATE_CART:
            console.log('Before Mapping thru', action.lineItem);
            return state.map( item => item.id ===  action.lineItem.id ? action.lineItem : item )
        case REMOVE_LIST_ITEM:
            return state.filter( item => item.id !== action.lineItem.id );
        case HIDE_LIST_ITEM:
            return state.filter(item => item.id !== action.lineItem.id);
        case ADD_BACK_TO_CART:
            return state = [action.lineItem, ...state];
        case EMPTY_CART:
            return [];
        default:
            return state
    }
}


// let guest;
// let user;

// export const addListItem = (product, auth) => async dispatch => {
//     try {
//         console.log('Auth', auth);
//         let data;
//         if (!auth.id && !guest && !user) {
//             // first add by a guest
//             console.log('entered')
//             guest = (await axios.post('/api/guests')).data;
//             const order = (await axios.post('/api/orders', { guest })).data;
//             data = (await axios.post('/api/lineitems', { product, order })).data;
//         } else if (!auth.id && guest) { //auth: x, 
//             // more adds by a guest
//             // after sign out, guest add/s items //guest:o, user:o, auth:x
//             console.log('entered');
//             const order = (await axios.get(`/api/orders/${guest.id}`)).data;
//             data = (await axios.post('/api/lineitems', { product, order })).data;
//         } else if (!user && !guest){
//             // first add by a user
//             console.log('entered');
//             user = auth;
//             const order = (await axios.post('/api/orders', {auth})).data;
//             data = (await axios.post('/api/lineitems', { product, order })).data;
//         } else {
//             console.log('entered')
//             let order;
//             if (guest) {
//                 // below 2 cases: order created as a guest initially, so have to find order w guest id. period
//                 // second loggin by other user
//                 // add items as a guest then sign in add more items
//                 order = (await axios.get(`/api/orders/${guest.id}`)).data;
//             } else {
//                 // login first, user adds more 
//                 // first item added by a user, after sign out, guest add/s items //guest:x, user:o, auth:x
//                 order = (await axios.get(`/api/orders/${user.id}_user`)).data;
//             }
//             data = (await axios.post('/api/lineitems', { product, order })).data;
//         }
//         dispatch(_addListItem(data));
//     } catch (err) {
//         console.log(err)
//     }
// }