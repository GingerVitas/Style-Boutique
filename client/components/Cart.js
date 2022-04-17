import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

export const Cart = props => {
    const { lineItems, username, products, location } = props
    console.log(props)
    return (
        <div>
        Hello, {username? username : 'guest'}
            <div>
                My Cart:
                <ul>
                    {
                        lineItems.map(item => {
                            const product = products.find(product => product.id === item.productId)
                            return (
                            <li key={item.id}>
                            id: {item.id},
                            Order Id:{item.orderId},
                            Product Id:{item.productId}, 
                            <Product product={product} location={location}/>,
                            quantity: {item.quantity},
                            total: {item.total}
                            </li>
                            )
                        })
                    }
                </ul>
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
