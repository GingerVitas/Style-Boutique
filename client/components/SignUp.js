import React, {useState} from "react";
import {Typography, TextField, Button, Alert }from "@mui/material";
import { FacebookLoginButton, GoogleLoginButton, AppleLoginButton } from "react-social-login-buttons";

const SignUp = () => {
  return (
    <div>
      <div>
        <h4>Create an Account</h4>
        <p style={{ fontSize: ".75rem" }}>Create a username and password to get started.</p>
      </div>
      <form onSubmit={handleSubmit} name={name}>
        <TextField id="outlined-basic" label="Username" variant="outlined" name="username" type="text" style={{ width: "100%" }} />
        <br />
        <TextField id="outlined-password-input" label="Password" variant="outlined" name="password" type="password" style={{ width: "100%" }} />
        <br />
        <Button type="submit" color="black" variant="contained" fullWidth>
          {displayName}
        </Button>
        <hr />
        <FacebookLoginButton onClick={() => alert("Hello")} className="fbbttn" align="center">
          CONTINUE WITH FACEBOOK
        </FacebookLoginButton>
        <GoogleLoginButton onClick={() => alert("Hello")} className="ggbttn" align="center">
          CONTINUE WITH GOOGLE
        </GoogleLoginButton>
        <AppleLoginButton onClick={() => alert("Hello")} className="applbttn" align="center">
          CONTINUE WITH APPLE
        </AppleLoginButton>
        {error && error.response && <Alert severity="error">{error.response.data}</Alert>}
      </form>
    </div>
  );
};

export default SignUp;
