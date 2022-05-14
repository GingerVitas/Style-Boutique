import React, { useState } from "react";
//import { useSelector, useDispatch } from "react-redux";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Visibility, VisibilityOff } from "@mui/material";

const Password = () => {
  //   const auth = useSelector((state) => state.auth);
  //const dispatch = useDispatch();

  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  return (
    <div>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        {/* <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        /> */}
      </FormControl>
    </div>
  );
};

export default Password;
