import React, { useState, useEffect } from 'react';

// REDUX
import { connect } from 'react-redux'

// MUI
import { Typography, TextField, Button, Grid, Radio, RadioGroup, FormControl, FormControlLabel, FormGroup, Checkbox } from '@mui/material';

// Child components
import Total from '../Total'
import AddressForm from '../AddressForm'

const Checkout = props => {
    const { cartlist } = props;
    console.log('props', props);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [addressformValue, setAddressFormValue ] = useState({
        addressLine1:'',
        addressLine2:'',
        city:'',
        state:'',
        zipCode:''
    });

    const onAddressChange = (e) => {
        setAddressFormValue({...addressformValue, [e.target.name]: e.target.value})
    };

    const [billingAddressFormValue, setBillingAddressFormValue] = useState({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const onBillingAddressChange = (e) => {
        setBillingAddressFormValue({ ...billingAddressFormValue, [e.target.name]: e.target.value })
    };

    // credit card
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

    const onExpDateKeyDown = (e) => {
        if (creditCardFormValue[e.target.name].length >= 5 && NUMERIC_REGEX.test(e.key)) {
            return;
        } else if (e.key === 'Backspace') {
            setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: creditCardFormValue[e.target.name].slice(0, -1) });
            return;
        } else if (
            creditCardFormValue[e.target.name].length === 2
            && NUMERIC_REGEX.test(e.key)
        ) {
            setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: creditCardFormValue[e.target.name] + "/" + e.key });
            return;
        } else if (NUMERIC_REGEX.test(e.key)) {
            setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: creditCardFormValue[e.target.name] + e.key });
            return
        }
    }

    const onCCKeyDown = (e) => {
        if (creditCardFormValue[e.target.name].length > 19 && NUMERIC_REGEX.test(e.key)) {
            return;
        } else if (e.key === 'Backspace' ) {
            setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: creditCardFormValue[e.target.name].slice(0,-1)});
           return;
        } else if (
            creditCardFormValue[e.target.name].split(" ").join("").length % 4 === 0
            && NUMERIC_REGEX.test(e.key)
            &&creditCardFormValue[e.target.name].length <= 15
            ) {
                setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: creditCardFormValue[e.target.name] + " " + e.key });
                return;
        } else if (NUMERIC_REGEX.test(e.key)){
            setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: creditCardFormValue[e.target.name] + e.key });
            return
        }
    }

    // For payment option radio button.
    const [paymentOption, setPaymentOption] = useState('creditCard');
    const handlePaymentChange = (e) => {
        console.log('radio switched!', e.target.value);
        setPaymentOption(e.target.value);
    }

    const [checked, setChecked] = useState(true);

    const sameAsShippingAddress = (e) => {
        console.log(e, e.target.checked);
        setChecked(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        window.localStorage.setItem('shippingAddress', JSON.stringify(addressformValue));
        window.localStorage.setItem('creditCardInfo', JSON.stringify(creditCardFormValue));
        window.localStorage.setItem('creditCardInfo', JSON.stringify(billingAddressFormValue));
        props.routeProps.history.push('/review_order');
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
                        <AddressForm 
                            onAddressChange={onAddressChange}
                            addressformValue={addressformValue}
                            setAddressFormValue={setAddressFormValue}
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{marginLeft: '1rem', position:'fixed', width:'400px'}}>
                            <Total lineItems={cartlist} routeProps={props.routeProps} onSubmit={onSubmit} />
                    </div>
                </Grid>
                <Grid item xs={8} sx={{marginTop: '1rem'}}>
                    <div className='checkout_box'>
                        <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Payment</Typography>
                        <Typography variant='h4' sx={{ fontSize: '1rem', margin: '1rem 0' }}><span style={{ color: 'red', verticalAlign: 'text-top' }}>* </span>Required</Typography>

                        <FormControl sx={{width:'100%'}}>
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
                                <div>
                                    {
                                        paymentOption === 'creditCard' ?
                                            <div>
                                                <form id='creditCardForm' name='creditCard' >
                                                    <TextField onKeyDown={onCCKeyDown} value={creditCardFormValue.cardNumber} required id="outlined-basic" label="Card number" variant="outlined" name="cardNumber" type="text" style={{ width: '80%' }} /><br />
                                                    <TextField onKeyDown={onExpDateKeyDown} value={creditCardFormValue.expirationDate} required placeholder="MM/YY" inputProps={{ maxLength: 5 }} id="outlined-basic" label="Expiration date" variant="outlined" name="expirationDate" type="text" style={{ width: '30%' }} /><br />
                                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.securityCode} required id="outlined-basic" label="Security code" inputProps={{ maxLength: 3 }} variant="outlined" name="securityCode" type="text" style={{ width: '20%' }} /><br />
                                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.firstName} required id="outlined-basic" label="First name" variant="outlined" name="firstName" type="text" style={{ width: '80%' }} /><br />
                                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.lastName} required id="outlined-basic" label="Last name" variant="outlined" name="lastName" type="text" style={{ width: '80%' }} />
                                                </form>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox checked={checked} onChange={sameAsShippingAddress} inputProps={{ 'aria-label': 'controlled' }}/>} label="Same as shipping address"/> 
                                                </FormGroup>
                                                {
                                                    checked ?
                                                     <></>
                                                     : 
                                                        <div>
                                                            <AddressForm 
                                                                onBillingAddressChange={onBillingAddressChange}
                                                                billingAddressFormValue={billingAddressFormValue} 
                                                                setBillingAddressFormValue={setBillingAddressFormValue}
                                                            />
                                                        </div>
                                                }
                                            </div>
                                            : <></>
                                    }
                                </div>
                                
                                <FormControlLabel value="paypal" control={<Radio />} label={
                                    <img src={'/imgs/paypal.png'} width="70px" />
                                } />
                                <div>
                                    {
                                        paymentOption === "paypal" ?
                                            <div>
                                                <Button color='black' style={{ width: '50%', padding: '10px', fontSize: '1rem' }} variant="contained" href='https://www.paypal.com/us/home'>
                                                    PayPal Checkout
                                                </Button>
                                            </div>
                                            : <></>
                                    }  
                                </div>
                            </RadioGroup>
                        </FormControl>
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


