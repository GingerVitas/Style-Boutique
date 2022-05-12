import React, { useState, useEffect } from 'react';

// REDUX
import { connect } from 'react-redux'

// MUI
import { Typography, TextField,Button, Autocomplete, Grid, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';

// Child components
import Total from '../Total'

const Checkout = props => {
    const { cartlist } = props;
    console.log('props', props)

    const [addressformValue, setAddressFormValue ] = useState({
        addressLine1:'',
        addressLine2:'',
        city:'',
        state:'',
        zipCode:''
    });

    const onAddressChange = (e) => {
        setAddressFormValue({...addressformValue, [e.target.name]: e.target.value})
    }

    const [creditCardFormValue, setcreaditCardFormValue] = useState({
        cardNumber: '',
        expirationDate: '',
        securityCode: '',
        firstName: '',
        lastName: ''
    });

    const onCreditCardChange = (e) => {
        setcreaditCardFormValue({...creditCardFormValue, [e.target.name]: e.target.value})
    }

    const NUMERIC_REGEX = /^\d+$/;
    const SLASH_REGEX = /\//i;

    const onExpDateChange = (e) => {
        if(!NUMERIC_REGEX.test(e.target.value) && !SLASH_REGEX.test(e.target.value)){
            return;
        } else if(e.target.value.length === 3){
            const monthAndSlash = e.target.value.slice(0,2) + "/" + e.target.value.slice(2);
            setcreaditCardFormValue({...creditCardFormValue, [e.target.name]: monthAndSlash});
            return;
        } else if(e.target.value.length >= 4){
            const monthAndSlash = e.target.value.slice(0, 2) + "/" + e.target.value.slice(3);
            setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: monthAndSlash });
            return;
        } else {
            setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: e.target.value });
            return;
        }
    }

    const SPACE_REGEX = / /i;

    const onCardNumberChange = (e) => {
        const value = e.target.value
        if(!NUMERIC_REGEX.test(value) && !SPACE_REGEX.test(value)) {
            console.log("not allowed value")
            return;
        } else if (value.length > 5 && value.includes(" ") && value.split(" ").join("").length % 4 === 0){
            const spaceAdded = value + " ";
            setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: spaceAdded });
            return;
        } else if(value.length === 4 ) {
            const spaceAdded = value + " ";
            setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: spaceAdded });
            return;
        } else {
            setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: value });
            return;
        }
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
    }

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
                        <form id='shippingAddressForm' name='shippingAddress'>
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
                                <form id='creditCardForm' name='creditCard' >
                                    <TextField onChange={onCardNumberChange} value={creditCardFormValue.cardNumber} required id="outlined-basic" label="Card number" inputProps={{ maxLength: 5 }} variant="outlined" name="cardNumber" type="text" style={{ width: '80%' }} /><br />
                                    <TextField onChange={onExpDateChange} value={creditCardFormValue.expirationDate} required placeholder="MM/YY" inputProps={{ maxLength: 5 }} id="outlined-basic" label="Expiration date" variant="outlined" name="expirationDate" type="text" style={{ width: '30%' }} /><br />
                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.securityCode} required id="outlined-basic" label="Security code" variant="outlined" name="securityCode" type="text" style={{ width: '80%' }} /><br />
                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.firstName} required id="outlined-basic" label="First name" variant="outlined" name="firstName" type="text" style={{ width: '80%' }} /><br />
                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.lastName} required id="outlined-basic" label="Last name" variant="outlined" name="lastName" type="text" style={{ width: '80%' }} />
                                </form>
                                : <form id='paypalForm' name='paypal'>
                                    <Button color='black' style={{ width: '50%', padding: '10px', fontSize: '1rem' }} variant="contained" href='https://www.paypal.com/us/home'>
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


