import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core";

const SignUp = () => {
  return (
    <div>
      <Typography variant="h2">Create An Account</Typography>
      <Typography variant="subtitle1">
        Enter your information to make an account:
      </Typography>
      <TextField variant="outlined">First Name</TextField>
      <TextField variant="outlined">Last Name</TextField>
      Birthday: <TextField variant="outlined" type="date"></TextField>
      <TextField variant="outlined">Email</TextField>
      <TextField variant="outlined">password</TextField>
      <Button>Submit</Button>
    </div>
  );
};

export default SignUp;
