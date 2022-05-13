import React, { useState, useEffect } from 'react';
import axios from 'axios';

// REDUX
import { connect } from 'react-redux'

// MUI
import { Typography, TextField, Button, Grid, Radio, RadioGroup, FormControl, FormControlLabel, FormGroup, Checkbox } from '@mui/material';

// Child components
import Total from '../Total'
import AddressForm from '../AddressForm'

const Checkout = props => {
    const { cartlist, auth } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
        getPickUpDate();
        getStandardShippingDate();
        getExpressShippingDate();
    }, []);

    // For pickup
    const [pickupDate, setPickupDate] = useState('');
    const [pickupEndDate, setPickupEndDate] = useState('');
    const getPickUpDate = () => {
        const today = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        setPickupDate(tomorrow.toDateString());
        tomorrow.setDate(today.getDate()+ 10);
        setPickupEndDate(tomorrow.toDateString());
    } 

    // For standard delivery est date:
    const [standardShippingDate, setStandardShippingDate] = useState('');
    const getStandardShippingDate = () => {
        const today = new Date();
        let theDay = new Date();
        theDay.setDate(today.getDate() + 5);
        setStandardShippingDate(theDay.toDateString());
    }

    // For express delivery est date:
    const [expressShippingDate, setExpressShippingDate] = useState('');
    const getExpressShippingDate = () => {
        const today = new Date();
        let theDay = new Date();
        theDay.setDate(today.getDate() + 3);
        setExpressShippingDate(theDay.toDateString());
    }
    
    // For total comp to render different price depends on delivery method.
    const [deliveryMethod, setDeliveryMethod] = useState('ground');
    const handleDeliveryMethod = (e) => {
        setDeliveryMethod(e.target.value)
    }

    // For Shipping Address Form
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

    const [billingAddressFormValue, setBillingAddressFormValue] = useState({...addressformValue});

    useEffect(() => {
        setBillingAddressFormValue({ ...addressformValue })
    }, [addressformValue])

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

    const onSSCodeChange = (e) => {
        if(NUMERIC_REGEX.test(e.target.value)){
            setcreaditCardFormValue({ ...creditCardFormValue, [e.target.name]: e.target.value })
        }
    }

    // For payment option radio button.
    const [paymentOption, setPaymentOption] = useState('creditCard');
    const handlePaymentChange = (e) => {
        setPaymentOption(e.target.value);
    }

    // For delivery option radio button.
    const [shippingMethod, setShippingMethod] = useState('delivery');
    const handleShippingMethod = (e) => {
        setShippingMethod(e.target.value);
    }

    // For shipping address same as account's address
    const [sameAsAccountChecked, setSameAsAccountChecked] = useState(false);
    const sameAsAccount = (e) => {
        setSameAsAccountChecked(e.target.checked);
    }

    const handleSameAsAccount = async() => {
        if (sameAsAccountChecked) {
            const data = (await axios.get(`/api/checkout/${auth.id}`)).data;
            console.log(data);

            setAddressFormValue({ 
                addressLine1: data.addressLine1,
                addressLine2: data.addressLine2,
                city: data.city,
                state: data.state,
                zipCode: data.zipCode
            });
        } else {
            setAddressFormValue({
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                zipCode: ''
            });
        }
    }

    useEffect(() => {
        console.log('same as account switch: ', sameAsAccountChecked)
        handleSameAsAccount();
    }, [sameAsAccountChecked])

    // For billing address same as shipping address
    const [checked, setChecked] = useState(true);
    const sameAsShippingAddress = (e) => {
        if(e.target.checked) {
            setBillingAddressFormValue({...addressformValue});
        } else {
            setBillingAddressFormValue({
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                zipCode: ''
            });
        }
        setChecked(e.target.checked); 
    }
   

    // Review Order Button
    const onSubmit = (e, total) => {
        e.preventDefault();

        let combinedForms;
        if(sameAsAccountChecked) {
            combinedForms = { ...addressformValue, ...creditCardFormValue };
        } else {
            combinedForms = { ...addressformValue, ...creditCardFormValue, ...billingAddressFormValue };
        }
        
        for (const prop in combinedForms ) {
            if (combinedForms[prop] === '' && prop !== 'addressLine2') {
                alert('Please fill in all required fields');
                return;
            }
        }

        window.localStorage.setItem('shippingAddress', JSON.stringify(addressformValue));
        window.localStorage.setItem('creditCardInfo', JSON.stringify(creditCardFormValue));
        window.localStorage.setItem('billingAddress', JSON.stringify(billingAddressFormValue));
        window.localStorage.setItem('shippingMethod', shippingMethod);
        window.localStorage.setItem('deliveryMethod', deliveryMethod);
        window.localStorage.setItem('pickupDate', (pickupDate).toString());
        window.localStorage.setItem('pickupEndDate', (pickupEndDate).toString());
        window.localStorage.setItem('total', (total).toString());

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
                <Grid item xs={8} >
                    <div className='checkout_box'>
                        <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Pickup or delivery</Typography>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="delivery"
                                name="radio-buttons-group"
                                onChange={handleShippingMethod}
                            >
                                <FormControlLabel value="pickup" control={<Radio />} label="Free Pickup" />
                                <div style={{ fontSize: '.9rem', color: 'grey', paddingLeft: '30px'}}>
                                    Style Boutique Soho <br/>
                                    In store from Tomorrow, {pickupDate} to {pickupEndDate}
                                </div>
                                <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
                                <div style={{ fontSize: '.9rem', color: 'grey', paddingLeft: '30px' }}>
                                    Free delivery on orders of $50 or more.
                                </div>
                                {
                                    shippingMethod === 'delivery' ?
                                    <div style={{paddingLeft: '30px', fontSize: '.9em'}}>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="ground"
                                                    name="radio-buttons-group"
                                                    onChange={handleDeliveryMethod}
                                                >
                                                    <FormControlLabel value="ground" control={<Radio />} label={
                                                        <div>
                                                            Standard Delivery: <span style={{ color: 'green' }}>get it by {standardShippingDate}</span>
                                                        </div>
                                                    } />
                                                    <FormControlLabel value="express" control={<Radio />} label={
                                                        <div>
                                                            Express Delivery: <span style={{ color: 'green' }}>get it by {expressShippingDate}</span>
                                                        </div>
                                                    } />
                                                    <FormControlLabel value="one day" control={<Radio />} label={
                                                        <div>
                                                            1 Day Delivery: <span style={{ color: 'green' }}>get it by {pickupDate}</span>
                                                        </div>
                                                    } />
                                                </RadioGroup>
                                            </FormControl>
                                    </div>:
                                    <></>
                                }
                            </RadioGroup>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{ marginLeft: '1rem', position: 'fixed', width: '400px' }}>
                        <Total lineItems={cartlist} routeProps={props.routeProps} onSubmit={onSubmit} deliveryMethod={deliveryMethod} shippingMethod={shippingMethod} />
                    </div>
                </Grid>
                {
                    shippingMethod === 'delivery' ?
                        <Grid item xs={8} sx={{ marginTop: '1rem' }}>
                            <div className='checkout_box'>
                                <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Shipping address</Typography>
                                <Typography variant='h4' sx={{ fontSize: '1rem', margin: '1rem 0' }}><span style={{ color: 'red', verticalAlign: 'text-top' }}>* </span>Required</Typography>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={sameAsAccountChecked} onChange={sameAsAccount} inputProps={{ 'aria-label': 'controlled' }} />}
                                        label="Same as account"
                                    />
                                </FormGroup>
                                <AddressForm
                                    onAddressChange={onAddressChange}
                                    addressformValue={addressformValue}
                                    setAddressFormValue={setAddressFormValue}
                                />
                            </div>
                        </Grid>
                        : <></>
                }     
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
                                                    <TextField onChange={onSSCodeChange} value={creditCardFormValue.securityCode} required id="outlined-basic" label="Security code" inputProps={{ maxLength: 3 }} variant="outlined" name="securityCode" type="text" style={{ width: '20%' }} /><br />
                                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.firstName} required id="outlined-basic" label="First name" variant="outlined" name="firstName" type="text" style={{ width: '80%' }} /><br />
                                                    <TextField onChange={onCreditCardChange} value={creditCardFormValue.lastName} required id="outlined-basic" label="Last name" variant="outlined" name="lastName" type="text" style={{ width: '80%' }} />
                                                </form>
                                                {
                                                    shippingMethod === 'delivery' ?
                                                        <FormGroup>
                                                            <FormControlLabel control={<Checkbox checked={checked} onChange={sameAsShippingAddress} inputProps={{ 'aria-label': 'controlled' }} />} label="Same as shipping address" />
                                                        </FormGroup>
                                                        : <></>
                                                }
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
        cartlist: state.cart,
        auth: state.auth
    }
}

export default connect(mapState)(Checkout);


