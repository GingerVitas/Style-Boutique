import React from 'react';
import Button from '@mui/material/Button';
import { connect } from 'react-redux'

export const checkout = props => {
    return (
        <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>
            Checkout
        </div>
    )
}

const mapState = state => {
    return {
        
    }
}

export default connect(mapState)(checkout);
