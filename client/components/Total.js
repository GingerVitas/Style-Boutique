import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Total = props => {
    const { lineItems, isLoggedIn} = props    
    // DO NOT ERASE CMNT BELOW.
    // const total = lineItems.length > 0 ? (lineItems.map(obj => +obj.total).reduce((a, b) => a + b)).toFixed(2) : 0;
    const total = lineItems.length > 0 ? 1 : 0 ;

    const Component = () => {
        if (!isLoggedIn && +total > 0) return <Link to={{ pathname: '/login', state: { prevPath: location.pathname } }}><Button color='black' variant="contained">Checkout</Button></Link>;
        if (!isLoggedIn && +total <= 0) return <Link to={`/home`}><Button color='black' variant="contained">Start Shopping</Button></Link>
        if (isLoggedIn && +total > 0) return <Link to={`/checkout`}><Button color='black' variant="contained">Checkout</Button></Link>;
        if (isLoggedIn && +total <= 0) return <Link to={`/home`}><Button color='black' variant="contained">Start Shopping</Button></Link>
    }

    return (
        <div style={{fontWeight: 'bold', fontSize:'2rem'}}>
            Subtotal: $
            {
                total
            }<br/>
            <Component />
        </div>
    )
}

const mapState = state => {
    return {
        // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
        // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
        isLoggedIn: !!state.auth.id,
        auth: state.auth
    }
}

export default connect(mapState)(Total);

