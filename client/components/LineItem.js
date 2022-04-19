import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

export const LineItem = props => {
    const { item, product, location } = props
    return (
        <div style={{ transform: 'scale(0.6)', transformOrigin: 'left top', marginBottom: '-150px', display: 'flex' }}>
            <Product product={product} location={location} />
            <div>
                Order Id: {item.orderId}<br />
                Quantity: {item.quantity}<br />
                Total: {item.total}
            </div>
        </div>
    )
}

export default LineItem;

