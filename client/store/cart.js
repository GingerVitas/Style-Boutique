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
        const token = window.localStorage.getItem('token');
        if (token) {
            const userCart = (await axios.get(`/api/lineitems/${order.id}`)).data
            if(userCart.length > 0) {
                dispatch(_loadCart(userCart));
            }
        } else {
            const guestCart = JSON.parse(window.localStorage.getItem('cart'));
            if(!guestCart) {
                dispatch(_loadCart([]));
            } else {
                dispatch(_loadCart(guestCart));
            }
        }
    } catch (err){
        console.log(err)
    }
}

export const transformGuestCartToUserCart = (order) => async dispatch => {
    try {
        let guestCart = JSON.parse(window.localStorage.getItem('cart'));
        console.log(guestCart);
        if(guestCart.length > 0) {
            await Promise.all(
                guestCart.map(async (lineitem) => {
                    const line_item = (await axios.put(`/api/lineitems/${lineitem.id}`, { lineitem, orderId: order.id })).data;
                    if(Array.isArray(line_item)){
                        dispatch(_updateCart(line_item[0]));
                        // dispatch(_removeListItem(line_item[1]))
                    } else {
                        dispatch(_updateCart(line_item));
                    }
                })
            );
            window.localStorage.removeItem('cart');
        }     
    } catch (err) {
        console.log(err)
    }
}

export const updateQuantityToLineitem = (lineitem, order) => async dispatch => {
    try {
        const token = window.localStorage.getItem('token');
        if (token) {
            const updatedLineItem = (await axios.put(`/api/lineitems/update/${lineitem.productSKUId}`, { orderId: order.id, lineitem: { ...lineitem } })).data;
            dispatch(_updateCart(updatedLineItem))
        } else {
            console.log('ENTERED 65')
            console.log(lineitem, order)
            const updatedLineItem = (await axios.put(`/api/lineitems/update/${lineitem.productSKUId}`, { lineitem })).data;
            console.log(updatedLineItem)
            const guestCart = JSON.parse(window.localStorage.getItem('cart'));
            console.log(guestCart)
            const updated_guest_cart = guestCart.map(line_item => {
                if (line_item.productSKUId === lineitem.productSKUId) {
                    return updatedLineItem;
                }
                return line_item
            })
            window.localStorage.setItem("cart", JSON.stringify(updated_guest_cart));
            // dispatch(_updateCart(updated_guest_cart.find(line_item => line_item.productSKUId ===  lineitem.productSKUId )))
            dispatch(_updateCart(updatedLineItem));
        }


    } catch (err) {
        console.log(err)
    }
}

export const addQuantityToLineitem = ( lineitem, order ) => async dispatch => {
    try {
        const token = window.localStorage.getItem('token');
        if (token) {
            const updatedLineItem = (await axios.put(`/api/lineitems/add/${lineitem.productSKUId}`, { orderId: order.id, lineitem: { ...lineitem } })).data;
            dispatch(_updateCart(updatedLineItem))
        } else {
            console.log('ENTERED 65')
            console.log(lineitem, order)
            const updatedLineItem = (await axios.put(`/api/lineitems/add/${lineitem.productSKUId}`, { lineitem })).data;
            console.log(updatedLineItem)
            const guestCart = JSON.parse(window.localStorage.getItem('cart'));
            console.log(guestCart)
            const updated_guest_cart = guestCart.map(line_item => {
                if (line_item.productSKUId === lineitem.productSKUId) {
                    return updatedLineItem;
                }
                return line_item
            })
            window.localStorage.setItem("cart", JSON.stringify(updated_guest_cart));
            // dispatch(_updateCart(updated_guest_cart.find(line_item => line_item.productSKUId ===  lineitem.productSKUId )))
            dispatch(_updateCart(updatedLineItem));
        }
        

    } catch(err) {
        console.log(err)
    }
}

export const createNewLineitemInCart = (lineitem, order) => async dispatch => {
    try {
        const token = window.localStorage.getItem('token');
        if (token) {
            const line_item = (await axios.post('/api/lineitems', { lineitem, orderId: order.id })).data;
            console.log('CREATED LINEITEM', line_item)
            dispatch(_addToCart(line_item));
        } else {
            let cart = [];
            const line_item = (await axios.post(`/api/lineitems/`, { lineitem })).data;
            const existing_cart = window.localStorage.getItem('cart');
            if (existing_cart === null || JSON.parse(existing_cart).length === 0) {
                cart.push(line_item);
                window.localStorage.setItem("cart", JSON.stringify(cart));
                console.log(window.localStorage.getItem('cart'))
            } else {
                cart = [line_item, ...JSON.parse(existing_cart)];
                window.localStorage.setItem("cart", JSON.stringify(cart));
                console.log(window.localStorage.getItem('cart'))
            }
            console.log('CREATED LINEITEM', JSON.parse(window.localStorage.getItem('cart')))
            dispatch(_addToCart(line_item));
        }
    } catch (err) {
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
        const token = window.localStorage.getItem('token');

        if(token) {
            const data = (await axios.delete(`/api/lineitems/${listitemId}`)).data;
            dispatch(_removeListItem(data));
        } else {
            const data = (await axios.delete(`/api/lineitems/${listitemId}`)).data;
            const cart = JSON.parse(window.localStorage.getItem('cart')).filter(line_item => line_item.id !== listitemId );
            window.localStorage.setItem("cart", JSON.stringify(cart));
            dispatch(_removeListItem(data));
        }
        
        
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
            // return state = [...state, ...action.lineItems];
            return state = action.lineItems;
        case ADD_TO_CART:
            return state = [action.lineItem, ...state];
        case UPDATE_CART:
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


            //decrement SKU available quantity, so product detail pg's drop down updates automatically.
            // const sku = (await axios.put(`/api/skus/${lineitem.productSKUId}`, { lineitem })).data;
            // console.log('RETURNED UPDATED SKU', sku);