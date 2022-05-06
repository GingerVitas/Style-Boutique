import React from 'react'

// redux
import { connect } from 'react-redux'

// child components
import LineItems from './LineItems'
import Total from './Total'
import EmptyCart from './EmptyCart'

const CartList = props => {
    const { routeProps, cartlist } = props;
    return (
        <div>
            {cartlist.length > 0 ? 
                <div>
                    <h4>Shopping Bag</h4>
                    <p>Enjoy free shipping on orders of $50 or more.</p>
                    <hr />
                    <LineItems lineItems={cartlist} routeProps={routeProps} />
                    <Total lineItems={cartlist} />
                </div>
                :
                <EmptyCart />
            }     
        </div>
    )
}

const mapState = state => {
    return {
        cartlist: state.cart
    }
}

export default connect(mapState)(CartList)