import React from "react";
import { Typography, Button, TextField } from '@mui/material';


const SignIn = () => {
  return (
    <div>
      <Typography variant="h2">
        Enter your username and password to sign-in:
      </Typography>
      <TextField variant="outlined">Email</TextField>
      <TextField variant="outlined">password</TextField>
      <Button>Submit</Button>
    </div>
  );
};

export default SignIn;
