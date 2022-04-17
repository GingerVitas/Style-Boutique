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

let guest;

export const addListItem = (product, auth) => async dispatch => {
    try {
        console.log('Auth', auth);
        let data;
        if (!auth.id && !guest) {
            console.log('entered')
            guest = (await axios.post('/api/guests')).data;
            const order = (await axios.post('/api/orders', { auth: {...guest} })).data;
            data = (await axios.post('/api/lineitems', { product, order })).data; 
        } else if (!auth.id && guest.id) {
            console.log('entered')
            const returnedGuest = (await axios.get(`/api/guests/${guest.id}`)).data;
            console.log(returnedGuest[0].id)
            const order = (await axios.get(`/api/orders/${returnedGuest[0].id}`)).data;
            console.log(order)
            data = (await axios.post('/api/lineitems', { product, order: order[0] })).data;
        } else if (auth.id && count <= 1 ){
            const order = (await axios.post('/api/orders', { auth })).data;
            data = (await axios.post('/api/lineitems', { product, order })).data;
        } else {
            const order = (await axios.get(`/api/orders/${auth.id}`)).data; 
            data = (await axios.post('/api/lineitems', { product, order })).data;
        }
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