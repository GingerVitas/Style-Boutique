import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import { removeListItem } from '../store/lineItems'
import { addWishList } from '../store/wishList'

export const LineItem = props => {
    const { item, product, location, remove } = props
    return (
        <div style={{ transform: 'scale(0.6)', transformOrigin: 'left top', marginBottom: '-150px', display: 'flex' }}>
            <Product product={product} location={location} />
            <div>
                Line Item Id: {item.id}<br />
                Order Id: {item.orderId}<br />
                Quantity: {item.quantity}<br />
                Total: {item.total}<br />
                <div style={{ transform: 'scale(1.5)', marginLeft: '70px', marginTop:'30px'}}>
                    <button onClick={()=> remove(item.id)}>Remove</button><br />
                    {/* <button onClick={()=> {save(item)}}>Save for later</button> */}
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
        }
    }
}

export default connect(null, mapDispatch)(LineItem)


