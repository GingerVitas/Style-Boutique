import React from 'react';

// REDUX
import { connect } from 'react-redux'

// MUI
import { Typography, TextField, Button, Grid } from '@mui/material';

// Child components
import Total from '../Total'

const checkout = props => {

    const handleSubmit = () => {
        console.log('address successfully submitted')
    }
    const { cartlist } = props;
    console.log('checkout', props)
    return (
        <div className='checkout'>
            <Typography variant='h4' sx={{marginBottom: '1rem'}}>Checkout</Typography>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Grid item xs={8}>
                    <div className='checkout_box'>
                        <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Shipping address</Typography>
                        <Typography variant='h4' sx={{ fontSize: '1rem', margin: '1rem 0' }}><span style={{ color: 'red', verticalAlign: 'text-top' }}>* </span>Required</Typography>
                        <form onSubmit={handleSubmit} name='shippingAddress'>
                            <TextField required id="outlined-basic" label="Address" variant="outlined" name="addressLine1" type="text" style={{ width: '80%' }} /><br />
                            <TextField required id="outlined-password-input" label="Apt, suite, company, c/o (optional)" variant="outlined" name="addressLine2" type="text" style={{ width: '80%' }} /><br />
                            <TextField required id="outlined-password-input" label="City" variant="outlined" name="city" type="text" style={{ width: '80%' }} /><br />
                            <TextField required id="outlined-password-input" label="State" variant="outlined" name="state" type="text" style={{ width: '80%' }} /><br />
                            <TextField required id="outlined-password-input" label="Zip code" variant="outlined" name="zipCode" type="text" style={{ width: '80%' }} />
                        </form>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{marginLeft: '1rem'}}>
                            <Total lineItems={cartlist} routeProps={props.routeProps} />
                    </div>
                </Grid>
                <Grid item xs={8} sx={{marginTop: '1rem'}}>
                    <div className='checkout_box'>
                        <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Payment</Typography>
                        <Typography variant='h4' sx={{ fontSize: '1rem', margin: '1rem 0' }}><span style={{ color: 'red', verticalAlign: 'text-top' }}>* </span>Required</Typography>
                        <form onSubmit={handleSubmit} name='shippingAddress'>
                            <TextField required id="outlined-basic" label="Card number" variant="outlined" name="cardNumber" type="text" style={{ width: '80%' }} /><br />
                            <TextField required id="outlined-password-input" label="Expiration date" variant="outlined" name="expirationDate" type="text" style={{ width: '80%' }} /><br />
                            <TextField required id="outlined-password-input" label="Security code" variant="outlined" name="securityCode" type="text" style={{ width: '80%' }} /><br />
                            <TextField required id="outlined-password-input" label="First name" variant="outlined" name="firstName" type="text" style={{ width: '80%' }} /><br />
                            <TextField required id="outlined-password-input" label="Last name" variant="outlined" name="lastName" type="text" style={{ width: '80%' }} />
                        </form>
                    </div>
                </Grid>
            </Grid>
            
        </div>
    )
}

const mapState = state => {
    return {
        cartlist: state.cart
    }
}

export default connect(mapState)(checkout);
