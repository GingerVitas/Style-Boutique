import React from 'react'

// redux
import { connect } from 'react-redux'

// child components
import WishList from './WishList'
import CartList from './CartList'

// react-router
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

export const Cart = props => {
    const { cartlist, wishlist, username, routeProps } = props
    console.log(routeProps)
    return (
        <div> 
            <p style={{ fontWeight: 'bold', marginBottom: '20px'}}>Hello, {username ? username : 'guest'}</p>
            <div style={{ display: 'flex'}}>
                <Link to={`/cart`} style={{ border: '1px solid grey', padding: '10px 20px' }}>Cart({cartlist.length})</Link>
                <Link to={`/cart/wishlist`} style={{ border: '1px solid grey' , padding:'10px 20px'}}>Wishlist({wishlist.length})</Link>
            </div>
            <div>  
                <Route exact path="/cart" render={routeProps => <CartList routeProps={routeProps}/>} />
                <Route exact path="/cart/wishlist" render={routeProps => <WishList routeProps={routeProps}/>} />
            </div>
        </div>
    )
}

const mapState = state => {
    return {
        cartlist: state.cart,
        wishlist: state.wishlist,
        username: state.auth.username
    }
}

export default connect(mapState)(Cart);


{/* <LineItems lineItems={cartlist} routeProps={routeProps} /> */}