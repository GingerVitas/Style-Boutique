import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import { removeListItem, hideListItem, addBackToCart } from '../store/cart'
import { addWishList, removeWishList} from '../store/wishList'

const LineItem = props => {
    const { item, routeProps, remove, save, hide, removeWish, addBackToCart } = props
    console.log(routeProps)
    return (
        <div style={{ transform: 'scale(0.6)', transformOrigin: 'left top', marginBottom: '-150px', display: 'flex' }}>
            <Product routeProps={routeProps} item={item} />
            
            <div>
                Line Item Id: {item.id}<br />
                Order Id: {item.orderId}<br />
                Quantity: {item.quantity}<br />
                Total: {item.total}<br />
                <div style={{ transform: 'scale(1.5)', marginLeft: '70px', marginTop:'30px'}}>
                    {
                        routeProps.match.path === '/cart' ? 
                        <div>
                            <button onClick={() => remove(item.id)}>Remove</button><br />
                            <button onClick={() => { save(item); hide(item) }}>Save for later</button>
                        </div> 
                        : 
                        <div>
                            <button onClick={() => {remove(item.id); removeWish(item)}}>Remove</button><br />
                                <button onClick={() => { addBackToCart(item); removeWish(item) }}>Add back to cart</button>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

const mapDispatch = dispatch => {
    return {
        remove(itemId) {
            dispatch(removeListItem(itemId))
         } ,
        removeWish(item) {
            dispatch(removeWishList(item))
        },
        save(item) {
            dispatch(addWishList(item))
        },
        hide(item) {
            dispatch(hideListItem(item))
        },
        addBackToCart(item) {
            dispatch(addBackToCart(item))
        }
    }
}

export default connect(null, mapDispatch)(LineItem)



