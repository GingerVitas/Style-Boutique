import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core";

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
