import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const EmptyCart = props => {
    const { isLoggedIn } = props;

    return (
        <div>
            <div>
                <h4>Your bag is empty</h4>
                <p>Sign in to see what you may have saved before, or start shopping now!</p>
            </div>
            {
                !isLoggedIn ?
                <div style={{paddingTop: '20px'}}>
                        <div style={{marginBottom: '20px'}}><Button component={Link} to={'/login'} color='black' variant="contained" style={{ width: '30%', padding: '10px', fontSize: '1rem', marginRight: '20px' }}>Sign In</Button></div>
                        <div><Button component={Link} to={'/home'} color='black' variant="contained" style={{ width: '30%', padding: '10px', fontSize: '1rem' }}>Start Shopping</Button></div>
                        
                        
                </div>
                :
                <div>
                        <Button component={Link} to={'/home'} color='black' variant="contained" style={{ width: '30%', padding: '10px', fontSize: '1rem' }}>Start Shopping</Button>
                </div>
            }
        </div>
    )
}

const mapState = state => {
    return {
        // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
        // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
        isLoggedIn: !!state.auth.id,
        auth: state.auth
    }
}

export default connect(mapState)(EmptyCart);

