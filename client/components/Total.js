import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Total = props => {
    const { lineItems, isLoggedIn, onSubmit } = props;
    
    // for checkout page
    const routeProps = props.routeProps? props.routeProps : null;

    // variables
    const subtotal = lineItems.length > 0 ? (lineItems.map(line_item => +line_item.total).reduce((a, b) => a + b)).toFixed(2) : 0;
    const shipping = (10).toFixed(2)
    const tax = (0).toFixed(2);
    const total = subtotal >= 50 ? ((+subtotal) + (+tax)).toFixed(2) : ((+subtotal) + (+shipping) + (+tax)).toFixed(2);

    // if guest, forward to sign in, if loggedin, forward to checkout.
    const Component = () => {
        if (!isLoggedIn && +subtotal > 0) return <Link to={{ pathname: '/login', state: { prevPath: location.pathname } }}><Button color='black' style={{ width: '100%', padding: '10px', fontSize: '1rem' }} variant="contained">Checkout</Button></Link>;
        if (isLoggedIn && +subtotal > 0) return <Link to={{ pathname: `/checkout`, state: {total} }}><Button color='black' style={{ width: '100%', padding: '10px', fontSize: '1rem' }} variant="contained">Checkout</Button></Link>;
    }

    console.log('Total', props)
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
                {
                    onSubmit ?
                        <Button color='black' style={{ width: '100%', padding: '10px', fontSize: '1rem' }} variant="contained" onClick={onSubmit}>
                            Review Order
                        </Button>
                        : <Component />
                }
            </div>
        </div>
    )
}

const mapState = state => {
    return {
        isLoggedIn: !!state.auth.id,
        auth: state.auth
    }
}

export default connect(mapState)(Total);

// routeProps && routeProps.location.pathname === '/checkout'

