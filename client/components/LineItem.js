import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import { removeListItem, hideListItem } from '../store/cart'
import { addWishList } from '../store/wishList'

export const LineItem = props => {
    const { item, product, routeProps, remove, save, hide } = props
    console.log(routeProps)
    return (
        <div style={{ transform: 'scale(0.6)', transformOrigin: 'left top', marginBottom: '-150px', display: 'flex' }}>
            <Product product={product} routeProps={routeProps} />
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
                            {/* <button onClick={() => remove(item.id)}>Remove</button><br />
                            <button onClick={() => { save(item); hide(item) }}>Add back to cart</button> */}
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
        save(item) {
            dispatch(addWishList(item))
        },
        hide(item) {
            dispatch(hideListItem(item))
        }
    }
}

export default connect(null, mapDispatch)(LineItem)

    // < Product product = { product } location = { location } />



