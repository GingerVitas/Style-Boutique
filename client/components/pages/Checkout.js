import React, { useState, useEffect } from 'react';

// REDUX
import { connect } from 'react-redux'

// MUI
import { Typography, TextField,Button, Autocomplete, Grid, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';

// Child components
import Total from '../Total'

const Checkout = props => {
    const { cartlist, handleAddressSubmit, handleCreditCardSubmit, handlePaypalSubmit } = props;
    console.log('props', props)

    const [addressformValue, setAddressFormValue ] = useState({
        addressLine1:'',
        addressLine2:'',
        city:'',
        state:'',
        zipCode:''
    });

    const [creditCardFormValue, setcreaditCardFormValue] = useState({
        cardNumber: '',
        expirationDate:'',
        securityCode:'',
        firstName:'',
        lastName:''
    });

    const onAddressChange = (e) => {
        setAddressFormValue({...addressformValue, [e.target.name]: e.target.value})
    }

    const onCreditCardChange = (e) => {
        setcreaditCardFormValue({...creditCardFormValue, [e.target.name]: e.target.value})
    }

    // For payment option radio button.
    const [paymentOption, setPaymentOption] = useState('creditCard');
    const handlePaymentChange = (e) => {
        console.log('radio switched!', e.target.value);
        setPaymentOption(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        window.localStorage.setItem('shippingAddress', JSON.stringify(addressformValue));
        props.routeProps.history.push('/review_order');
        // handleAddressSubmit(addressformValue)
    }

    // useEffect(() => {
    //     props.routeProps.history.push('/review_order');
    // }, [])

    const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'VI', 'WA', 'WV', 'WI', 'WY'];


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
                            <TextField onChange={onAddressChange} value={addressformValue.addressLine1} required id="outlined-basic" label="Address" variant="outlined" name="addressLine1" type="text" style={{ width: '80%' }} /><br />
                            <TextField onChange={onAddressChange} value={addressformValue.addressLine2} required id="outlined-password-input" label="Apt, suite, company, c/o (optional)" variant="outlined" name="addressLine2" type="text" style={{ width: '80%' }} /><br />
                            <TextField onChange={onAddressChange} value={addressformValue.city} required id="outlined-password-input" label="City" variant="outlined" name="city" type="text" style={{ width: '80%' }} /><br />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={states}
                                sx={{ width: 300, margin: 0 }}
                                value={addressformValue.state}
                                onChange={(e, newValue)=> {
                                    setAddressFormValue({...addressformValue, state: newValue})
                                }}
                                renderInput={(params) => <TextField {...params} label="State" />}
                            /><br/>
                            <TextField onChange={onAddressChange} value={addressformValue.zipCode} required id="outlined-password-input" label="Zip code" variant="outlined" name="zipCode" type="text" style={{ width: '80%' }} />
                        </form>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{marginLeft: '1rem'}}>
                            <Total lineItems={cartlist} routeProps={props.routeProps} onSubmit={onSubmit}/>
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
                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.cardNumber} required autocomplete="cc-number" id="outlined-basic" label="Card number" variant="outlined" name="cardNumber" type="text" style={{ width: '80%' }} /><br />
                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.expirationDate} required autocomplete="cc-exp" id="outlined-password-input" label="Expiration date" variant="outlined" name="expirationDate" type="text" style={{ width: '80%' }} /><br />
                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.securityCode} required autocomplete="cc-csc" id="outlined-password-input" label="Security code" variant="outlined" name="securityCode" type="text" style={{ width: '80%' }} /><br />
                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.firstName} required autocomplete="off" id="outlined-password-input" label="First name" variant="outlined" name="firstName" type="text" style={{ width: '80%' }} /><br />
                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.lastName} required id="outlined-password-input" label="Last name" variant="outlined" name="lastName" type="text" style={{ width: '80%' }} />
                                </form>
                                : <form id='paypalForm' name='paypal' onSubmit={handlePaypalSubmit} >
                                    <Button color='black' style={{ width: '100%', padding: '10px', fontSize: '1rem' }} variant="contained">
                                        PayPal Checkout
                                    </Button>
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

export default connect(mapState)(Checkout);


