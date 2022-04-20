import React from 'react'

// redux
import { connect } from 'react-redux'

// child components
import LineItems from './LineItems'

export const WishList = props => {
    const { routeProps, wishlist } = props
    return (
        <div>
            <LineItems lineItems={wishlist} routeProps={routeProps} />
        </div>
    )
}

const mapState = state => {
    return {
        wishlist: state.wishlist
    }
}

export default connect(mapState)(WishList);