import React from 'react'

// redux
import { connect } from 'react-redux'

// child components
import LineItems from './LineItems'
import Total from './Total'

const CartList = props => {
    const { routeProps, cartlist } = props
    return (
        <div>
            <LineItems lineItems={cartlist} routeProps={routeProps} />
            <Total lineItems={cartlist}/>
        </div>
    )
}

const mapState = state => {
    return {
        cartlist: state.cart
    }
}

export default connect(mapState)(CartList);