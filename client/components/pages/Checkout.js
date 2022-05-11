import React, { useState } from 'react';

// REDUX
import { connect } from 'react-redux'

// MUI
import { Typography, TextField, Button, Grid, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';

// Child components
import Total from '../Total'

const checkout = props => {
    const { cartlist, handleAddressSubmit, handleCreditCardSubmit, handlePaypalSubmit } = props;
    console.log('props', props)

    // For payment option radio button.
    const [paymentOption, setPaymentOption] = useState('creditCard');
    const handlePaymentChange = (e) => {
        console.log('radio switched!', e.target.value);
        setPaymentOption(e.target.value);
    }
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
                        <form id='shippingAddressForm' name='shippingAddress' onSubmit={handleAddressSubmit}>
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

                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="creditCard"
                                name="radio-buttons-group"
                                onChange={handlePaymentChange}
                            >
                                <FormControlLabel value="creditCard" control={<Radio />} label={
                                    <> 
                                        <Grid container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={1}
                                            >
                                            <Grid item sx={6}>
                                                <img src={'/imgs/creditcard.png'} width="35px" />
                                            </Grid>
                                            <Grid item sx={6}>
                                                Credit Card
                                            </Grid>
                                        </Grid> 
                                    </>      
                                } />
                                <FormControlLabel value="paypal" control={<Radio />} label={
                                    <img src={'/imgs/paypal.png'} width="70px" />
                                } />
                            </RadioGroup>
                        </FormControl>

                        {
                            paymentOption === 'creditCard' ?
                                <form id='creditCardForm' name='creditCard' onSubmit={handleCreditCardSubmit} >
                                    <TextField required id="outlined-basic" label="Card number" variant="outlined" name="cardNumber" type="text" style={{ width: '80%' }} /><br />
                                    <TextField required id="outlined-password-input" label="Expiration date" variant="outlined" name="expirationDate" type="text" style={{ width: '80%' }} /><br />
                                    <TextField required id="outlined-password-input" label="Security code" variant="outlined" name="securityCode" type="text" style={{ width: '80%' }} /><br />
                                    <TextField required id="outlined-password-input" label="First name" variant="outlined" name="firstName" type="text" style={{ width: '80%' }} /><br />
                                    <TextField required id="outlined-password-input" label="Last name" variant="outlined" name="lastName" type="text" style={{ width: '80%' }} />
                                </form>
                                : <form id='paypalForm' name='paypal' onSubmit={handlePaypalSubmit} >
                                    <TextField required id="outlined-basic" label="Card number" variant="outlined" name="cardNumber" type="text" style={{ width: '80%' }} /><br />
                                </form>
                        }
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

//  <TextField required id="outlined-basic" label="Address" variant="outlined" name="addressLine1" type="text" style={{ width: '80%' }} /><br />
//                             <TextField required id="outlined-password-input" label="Apt, suite, company, c/o (optional)" variant="outlined" name="addressLine2" type="text" style={{ width: '80%' }} /><br />
//                             <TextField required id="outlined-password-input" label="City" variant="outlined" name="city" type="text" style={{ width: '80%' }} /><br />
//                             <TextField required id="outlined-password-input" label="State" variant="outlined" name="state" type="text" style={{ width: '80%' }} /><br />
//                             <TextField required id="outlined-password-input" label="Zip code" variant="outlined" name="zipCode" type="text" style={{ width: '80%' }} />
//                         </form >
const mapDispatch = dispatch => {
    return {
        handleAddressSubmit(evt) {
            evt.preventDefault();
            const addressLine1 = evt.target.addressLine1.value;
            const addressLine2 = evt.target.addressLine2.value;
            const city = evt.target.city.value;
            const state = evt.target.state.value;
            const zipCode = evt.target.zipCode.value;
            // console.log(addressLine1, addressLine2, city, state, zipCode)
            window.localStorage.setItem('address', [addressLine1, addressLine2, city, state, zipCode])
            // dispatch(authenticate(username, password, formName));
        },
        handleCreditCardSubmit(evt) {
            evt.preventDefault();
            const cardNumber = evt.target.cardNumber.value;
            console.log(cardNumber);
            window.localStorage.setItem('creditcard', [cardNumber])
        },
        handlePaypalSubmit(evt){
            evt.preventDefault();
            const cardNumber = evt.target.cardNumber.value;
            console.log(cardNumber);
            window.localStorage.setItem('paypal', [cardNumber])
        }
    }
}

export default connect(mapState, mapDispatch)(checkout);


