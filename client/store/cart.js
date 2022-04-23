import axios from 'axios';
import history from '../history';

// ACTION TYPES
const LOAD_LIST_ITEMS = 'LOAD_LIST_ITEMS';
const ADD_LIST_ITEM = 'CREATE_LIST_ITEM';
const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';
const HIDE_LIST_ITEM = 'HIDE_LIST_ITEM';
const ADD_BACK_TO_CART = 'ADD_BACK_TO_CART';

// ACTION CREATORS
const _loadListItems = lineItems => ({ type: LOAD_LIST_ITEMS, lineItems });
const _addListItem = lineItem => ({ type: ADD_LIST_ITEM, lineItem });
const _removeListItem = lineItem => ({ type: REMOVE_LIST_ITEM, lineItem });
const _hideListItem = lineItem => ({ type: HIDE_LIST_ITEM, lineItem });
const _addBackToCart = lineItem => ({ type: ADD_BACK_TO_CART, lineItem });

// THUNK CREATORS
export const loadListItems = () =>  async dispatch => {
    try {
        const { data } = await axios.get('/api/lineitems');
        dispatch(_loadListItems(data));
    } catch (err){
        console.log(err)
    }
}

let guest;
let user;

export const addListItem = (product, auth) => async dispatch => {
    try {
        console.log('Auth', auth);
        let data;
        if (!auth.id && !guest && !user) {
            // first add by a guest
            console.log('entered')
            guest = (await axios.post('/api/guests')).data;
            const order = (await axios.post('/api/orders', { guest })).data;
            data = (await axios.post('/api/lineitems', { product, order })).data;
        } else if (!auth.id && guest) { //auth: x, 
            // more adds by a guest
            // after sign out, guest add/s items //guest:o, user:o, auth:x
            console.log('entered');
            const order = (await axios.get(`/api/orders/${guest.id}`)).data;
            data = (await axios.post('/api/lineitems', { product, order })).data;
        } else if (!user && !guest){
            // first add by a user
            console.log('entered');
            user = auth;
            const order = (await axios.post('/api/orders', {auth})).data;
            data = (await axios.post('/api/lineitems', { product, order })).data;
        } else {
            console.log('entered')
            let order;
            if (guest) {
                // below 2 cases: order created as a guest initially, so have to find order w guest id. period
                // second loggin by other user
                // add items as a guest then sign in add more items
                order = (await axios.get(`/api/orders/${guest.id}`)).data;
            } else {
                // login first, user adds more 
                // first item added by a user, after sign out, guest add/s items //guest:x, user:o, auth:x
                order = (await axios.get(`/api/orders/${user.id}_user`)).data;
            }
            data = (await axios.post('/api/lineitems', { product, order })).data;
        }
        dispatch(_addListItem(data));
    } catch (err) {
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
        case LOAD_LIST_ITEMS:
            return action.lineItems;
        case ADD_LIST_ITEM:
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
