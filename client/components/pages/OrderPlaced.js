import React from 'react';
import { Link } from 'react-router-dom';

//REDUX
import { useSelector } from 'react-redux';

// MUI
import { Typography, Button, Grid } from '@mui/material';

const OrderPlaced = props => {
    console.log('props', props)

    const order = useSelector(state => state.order);
    const user = useSelector(state => state.auth);

    return (
        <div className='checkout'>
            <div className='checkout_box'>
                <Typography variant='h4'>Thank you, {user.firstName}</Typography>
                <p style={{ color: '#525252' }}>
                        Order #{order.id.slice(0, 8)}<br/>
                        Your order is successfully placed.
                </p>
                <div>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item xs={6} sx={{width:'100%'}}>
                            <Button color='black' style={{ width: '30%', padding: '10px', fontSize: '1rem' }} variant="contained" href='https://www.ups.com/track?loc=en_US&requester=ST/'>
                                Track my order
                            </Button>
                        </Grid>
                        <Grid item xs={6} sx={{ width: '100%' }}>
                            <Button color='black' style={{ width: '30%', padding: '10px', fontSize: '1rem'}} variant="contained" component={Link} to={'/home'}>
                                Back to shopping
                            </Button>
                        </Grid>
                    </Grid>
                    
                </div>
            </div>
        </div>
    )
}

export default OrderPlaced;


