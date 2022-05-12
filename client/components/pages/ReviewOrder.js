import React, {useState} from 'react';

// MUI
import { Typography, Button, Grid } from '@mui/material';

const ReviewOrder = props => {
    console.log('props', props)

    const [ shippingAddress, setShippingAddress ] = useState(
        JSON.parse(window.localStorage.getItem('shippingAddress'))
    );

    return (
        <div className='checkout'>

           <ol>
                <li>{shippingAddress.addressLine1}</li>
                <li>{shippingAddress.addressLine2}</li>
                <li>{shippingAddress.city}</li>
                <li>{shippingAddress.state}</li>
                <li>{shippingAddress.zipCode}</li>

           </ol>
            <Button color='black' style={{ width: '100%', padding: '10px', fontSize: '1rem' }} variant="contained" onClick={setShippingAddress({})}>
                Place Order
            </Button>
        </div>
    )
}

export default ReviewOrder;


