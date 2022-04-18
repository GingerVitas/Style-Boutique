import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

export const Cart = props => {
    const { lineItems, username, products, location } = props
    console.log(props)
    return (
        <div>
            <span style={{fontWeight:'bold'}}>Hello, {username ? username : 'guest'}</span>
            <div>
                <span style={{fontWeight:'bold', color: 'gray'}}>My Cart</span>
                    {
                        lineItems.map(item => {
                            const product = products.find(product => product.id === item.productId)
                            return(
                                <div>
                                    <Product product={product} location={location} />
                                    Order Id: {item.orderId}<br />
                                    Quantity: {item.quantity}<br/>
                                    Total: {item.total}
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

const mapState = state => {
    return {
        products: state.products,
        lineItems: state.lineItems,
        username: state.auth.username
    }
}

export default connect(mapState)(Cart);

