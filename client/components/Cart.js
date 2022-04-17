import React from 'react'
import { connect } from 'react-redux'
import Products from './Products'

export const Cart = props => {
    const { cart, username } = props
    return (
        <div>
        Hello, {username? username : 'guest'}
            <div>
                My Cart:
            </div>
        </div>
    )
}

const mapState = state => {
    return {
        cart: state.cart,
        username: state.auth.username

    }
}

export default connect(mapState)(Cart);
