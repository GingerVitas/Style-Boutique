import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Total = props => {
    const { lineItems, isLoggedIn} = props    
    // DO NOT ERASE CMNT BELOW.
    const subtotal = lineItems.length > 0 ? (lineItems.map(line_item => +line_item.total).reduce((a, b) => a + b)).toFixed(2) : 0;
    // const subtotal = lineItems.length > 0 ? 1 : 0 ;
    // const shipping = subtotal >= 50 ? (0).toFixed(2) : (10).toFixed(2);
    const shipping = (10).toFixed(2)
    const tax = (0).toFixed(2);
    const total = subtotal >= 50 ? ((+subtotal) + (+tax)).toFixed(2) : ((+subtotal) + (+shipping) + (+tax)).toFixed(2);

    const Component = () => {
        if (!isLoggedIn && +subtotal > 0) return <Link to={{ pathname: '/login', state: { prevPath: location.pathname } }}><Button color='black' style={{ width: '100%', padding: '10px', fontSize: '1rem' }} variant="contained">Checkout</Button></Link>;
        // if (!isLoggedIn && +subtotal <= 0) return <Link to={`/home`}><Button color='black' style={{width: '100%', padding: '10px', fontSize: '1rem'}} variant="contained">Start Shopping</Button></Link>
        if (isLoggedIn && +subtotal > 0) return <Link to={{ pathname: `/checkout`, state: {total} }}><Button color='black' style={{ width: '100%', padding: '10px', fontSize: '1rem' }} variant="contained">Checkout</Button></Link>;
        // if (isLoggedIn && +subtotal <= 0) return <Link to={`/home`}><Button color='black' style={{ width: '100%', padding: '10px', fontSize: '1rem' }} variant="contained">Start Shopping</Button></Link>
    }

    return (
        <div>
            <div className='totalBox'>
                <div style={{fontSize: '1.1rem'}}>Subtotal <span style={{ float: 'right' }}>${subtotal}</span></div>
                { 
                    subtotal >= 50 ?
                    <div>
                        <div>
                            Estimated shipping <span style={{ float: 'right'}}>${shipping}</span>
                        </div>
                        <div>
                            Discount <span style={{ float: 'right' }}>- ${shipping}</span>
                        </div>
                    </div>     
                    :
                    <div>
                        <div>
                            Estimated shipping <span style={{ float: 'right' }}>${shipping}</span>
                        </div>
                    </div> 
                }
                <div>Estimated tax <span style={{ float: 'right' }}>${tax}</span></div>
                <hr />
                <div style={{ fontSize: '1.3rem' }}>Estimated total <span style={{ float: 'right' }}>${total}</span></div>
                <Component />
            </div>
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

