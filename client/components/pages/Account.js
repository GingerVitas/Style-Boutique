import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import PersonalInfo from "./PersonalInfo";
import Addresses from "./Addresses";

//MUI
//import { Box, Button } from "@mui/material";
import { ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";

const Account = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // global state to auth
  const [display, setDisplay] = useState(""); //display is set when button clicked, onClick calls setDisplay

  //
  const [newToggle, setToggle] = useState("account");
  const handleToggle = (e, newToggle) => {
    setToggle(newToggle);
  };

  return (
    <div className="content">
      <h4>Welcome, {auth.firstName}</h4>

      <div style={{ display: "flex", padding: "30px 0" }}>
        <ToggleButtonGroup value={newToggle} exclusive onChange={handleToggle} aria-label="text alignment">
          <ToggleButton value="personalInfo" component={Link} to={"/account"}>
            My Information
          </ToggleButton>
          <ToggleButton value="addresses" component={Link} to={"/account/addresses"}>
            My Addresses
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <Route exact path="/account" render={(routeProps) => <PersonalInfo routeProps={routeProps} />} />
        <Route exact path="/account/addresses" render={(routeProps) => <Addresses routeProps={routeProps} />} />
      </div>
    </div>
  );
  /*
  const buttonBoxStyle = {
    width: "90vw",
    height: "80vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "auto"
  };
  const buttonStyle = {
    margin: "1rem"
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome, {auth.firstName}</h1>
      <Box sx={buttonBoxStyle}>
        <Button sx={buttonStyle} name="personalInfo" variant={display === "personalInfo" ? "contained" : "outlined"} onClick={() => setDisplay("personalInfo")}>
          My Information
        </Button>
        <Button sx={buttonStyle} name="addresses" variant={display === "addresses" ? "contained" : "outlined"} onClick={() => setDisplay("addresses")}>
          My Addresses
        </Button>

        <Box
          sx={{
            flexBasis: "100%",
            width: "100%",
            padding: "1rem",
            margin: "1rem"
          }}
        >
          {display === "personalInfo" ? <PersonalInfo personalInfo={auth} display={display} /> : display === "addresses" ? <Addresses addresses={auth} display={display} /> : display === "orders" ? <OrderHistory orders={auth} display={display} /> : ""}
        </Box>
      </Box>
    </div>
  ); */
};

export default Account;
