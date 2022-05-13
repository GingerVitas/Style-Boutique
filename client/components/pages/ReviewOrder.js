import React from 'react';
import { Link } from 'react-router-dom';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { closeOrder } from '../../store/order';

// MUI
import { Typography, Button, Grid } from '@mui/material';

const ReviewOrder = props => {
    console.log('props', props)
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);
    const order = useSelector(state => state.order);

    const shippingAddress = JSON.parse(window.localStorage.getItem('shippingAddress'));
    const creditCardInfo = JSON.parse(window.localStorage.getItem('creditCardInfo'));
    const billingAddress = JSON.parse(window.localStorage.getItem('billingAddress'));
    const shippingMethod = window.localStorage.getItem('shippingMethod');
    const deliveryMethod = window.localStorage.getItem('deliveryMethod');
    const pickupDate = window.localStorage.getItem('pickupDate');
    const pickupEndDate = window.localStorage.getItem('pickupEndDate');
    const total = parseFloat(window.localStorage.getItem('total'));

    const handleOrderSubmit = () => {
        console.log('order submitted!')
        dispatch(closeOrder(user, order.id, total))
    }

    return (
        <div className='checkout'>
            <Typography variant='h4' sx={{ marginBottom: '1rem' }}>Order Confirmation</Typography>
            <div className='checkout_box'>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
            >
                <Grid item xs={6}>
                    <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Contact information</Typography>
                    <div style={{ color: '#525252' }}>
                        <span>{user.fullName}</span><br />
                        <span>{user.email}</span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Payment method</Typography>
                        <Grid container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1}
                        >
                            <Grid item sx={6}>
                                <img src={'/imgs/visa.png'} width="35px" />
                            </Grid>
                            <Grid item sx={6}>
                                <span style={{ color: '#525252' }}>ending with {creditCardInfo.cardNumber.slice(-4)} </span>
                                <span style={{ fontWeight: 'bold' }}>- ${total}</span>
                            </Grid>
                        </Grid> 
                </Grid>
                {
                    shippingMethod === 'delivery' ?
                    <Grid item xs={6}>
                        <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Shipping Address</Typography>
                        <div style={{ color: '#525252' }}>
                                    <span>{shippingAddress.addressLine1}</span><br />
                                    {
                                        shippingAddress.addressLine2 === '' ?
                                            <span></span>
                                            : <div><span>{shippingAddress.addressLine2}</span></div>
                                    }
                                    <span>{shippingAddress.city}</span><br/>
                                    <span>{shippingAddress.state}</span><br/>
                                    <span>{shippingAddress.zipCode}</span><br/>
                        </div>
                        <br/>
                        <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Shipping method</Typography>
                        <span style={{ color: '#525252' }}>UPS<sup>&reg;</sup> {deliveryMethod.charAt(0).toUpperCase() + deliveryMethod.slice(1)}</span>
                    </Grid>
                    : 
                    <Grid item xs={6}>
                        <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Shipping method</Typography>
                        <span style={{ color: '#525252' }}>{shippingMethod.charAt(0).toUpperCase()+ shippingMethod.slice(1)}</span>
                        <div>
                                    Style Boutique Soho <br />
                                    In store from Tomorrow, {pickupDate} to {pickupEndDate}
                        </div>
                    </Grid>

                }
                <Grid item xs={6}>
                        <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Billing Address</Typography>
                        <div style={{ color: '#525252' }}>
                            <span>{billingAddress.addressLine1}</span><br />
                            {
                                billingAddress.addressLine2 === '' ?
                                    <span></span>
                                    : <div><span>{billingAddress.addressLine2}</span></div>
                            }
                            <span>{billingAddress.city}</span><br />
                            <span>{billingAddress.state}</span><br />
                            <span>{billingAddress.zipCode}</span><br />
                        </div>
                </Grid>
                <Grid item xs={12}>
                        <Button color='black' style={{ width: '30%', padding: '10px', fontSize: '1rem'}} variant="contained" component={Link} to={'/order_placed'} onClick={handleOrderSubmit}>
                            Place Order
                        </Button>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default ReviewOrder;


