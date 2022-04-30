import React from 'react'

//REDUX
import {connect} from 'react-redux'
import {authenticate} from '../../store/auth'

//MUI
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

//SOCIAL BTNS
import { FacebookLoginButton, GoogleLoginButton, AppleLoginButton } from "react-social-login-buttons";

const AuthForm = props => {
  const { name, displayName, handleSubmit, error, routeProps } = props
  return (
    <div className='signin-intro'>
    {
        routeProps && routeProps.match.path === '/login' ?
          <div>
            <h4>Sign In</h4>
            <p style={{ fontSize: '.75rem' }}>Enter your username and password to get started.</p>
          </div>
          :
          <div>
            <h4>Create Account</h4>
            <p style={{ fontSize: '.75rem' }}>Create a username and password to get started.</p>
          </div>
    }
      <form onSubmit={handleSubmit} name={name}>
        <TextField id="outlined-basic" label="Username" variant="outlined" name="username" type="text" style={{ width: '100%' }}/><br/>
        <TextField id="outlined-password-input" label="Password" variant="outlined" name="password" type="password" style={{ width: '100%' }}/><br/>
        <Button type="submit" color='black' variant="contained" fullWidth>{displayName}</Button>
        <hr />
        <FacebookLoginButton onClick={() => alert("Hello")} className='fbbttn' align='center'>CONTINUE WITH FACEBOOK</FacebookLoginButton>
        <GoogleLoginButton onClick={() => alert("Hello")} className='ggbttn' align='center'>CONTINUE WITH GOOGLE</GoogleLoginButton>
        <AppleLoginButton onClick={() => alert("Hello")} className='applbttn' align='center'>CONTINUE WITH APPLE</AppleLoginButton>
        {error && error.response &&<Alert severity="error">{error.response.data}</Alert>}
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Create Account',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(authenticate(username, password, formName));
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
