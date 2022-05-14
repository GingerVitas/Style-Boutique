import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Visibility, VisibilityOff } from "@mui/material";

const Password = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChangePassword = (ev) => {
    //this.setState({ [ev.target.name]: ev.target.values.password });
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: "50%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">*******</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChangePassword("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                //   onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {/* {values.showPassword}
                    ? <VisibilityOff /> : <Visibility />} */}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </div>
  );
};

export default Password;
