import axios from 'axios';
import history from '../history';

// ACTION TYPES
const LOAD_CART = 'LOAD_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';
const HIDE_LIST_ITEM = 'HIDE_LIST_ITEM';
const ADD_BACK_TO_CART = 'ADD_BACK_TO_CART';

// ACTION CREATORS
const _loadCart = lineItems => ({ type: LOAD_CART, lineItems });
const _addToCart = lineItem => ({ type: ADD_TO_CART, lineItem });
const _removeListItem = lineItem => ({ type: REMOVE_LIST_ITEM, lineItem });
const _hideListItem = lineItem => ({ type: HIDE_LIST_ITEM, lineItem });
const _addBackToCart = lineItem => ({ type: ADD_BACK_TO_CART, lineItem });

// THUNK CREATORS
export const loadCart = () =>  async dispatch => {
    try {
        const { data } = await axios.get('/api/lineitems');
        dispatch(_loadCart(data));
    } catch (err){
        console.log(err)
    }
}

let cart = [];

export const addToCart = ( lineitem, order ) => async dispatch => {
    try {
        const token = window.localStorage.getItem('token');
        if (token) {
            const line_item = (await axios.post('/api/lineitems', { lineitem, orderId: order.id})).data;
            console.log('CREATED LINEITEM', line_item)
            dispatch(_addToCart(line_item));

            //update guest cart w/order id
            const cart = JSON.parse(window.localStorage.getItem('cart'));

            await Promise.all(
                cart.map(async(line_item) => {
                    (await axios.put('/api/lineitems', { line_item, orderId: order.id })).data
                })  
            )
                    
        } else {
            const line_item = (await axios.post(`/api/lineitems/`, { lineitem })).data;
            cart.push(line_item);
            window.localStorage.setItem("cart", JSON.stringify(cart));
            console.log('CREATED LINEITEM', JSON.parse(window.localStorage.getItem('cart')))
            //returns cart: [{lineitem}, {lineitem}]
            dispatch(_addToCart(line_item));
        }
    } catch(err) {
        console.log(err)
    }
}

// export const loadListItems = () =>  async dispatch => {
//     try {
//         const { data } = await axios.get('/api/lineitems');
//         dispatch(_loadListItems(data));
//     } catch (err){
//         console.log(err)
//     }
// }


//add quantity @ cart.
// .put(/api/lineitems/:lineitem)
// fine the lineitem, add quantity, decrease quantity of the sku

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
            return action.lineItems;
        case ADD_TO_CART:
            return state = [action.lineItem, ...state];
        case REMOVE_LIST_ITEM:
            return state.filter( item => item.id !== action.lineItem.id );
        case HIDE_LIST_ITEM:
            return state.filter(item => item.id !== action.lineItem.id);
        case ADD_BACK_TO_CART:
            return state = [action.lineItem, ...state];
        default:
            return state
    }
}
