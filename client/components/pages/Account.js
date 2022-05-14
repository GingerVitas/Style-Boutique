import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import PersonalInfo from "./PersonalInfo";
import Addresses from "./Addresses";

//MUI
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
      <h4>Welcome, {auth.firstName ? auth.firstName : auth.username}</h4>
      <div style={{ display: "flex", padding: "30px 0", justifyContent: 'center' }}>
        <ToggleButtonGroup value={newToggle}  exclusive onChange={handleToggle} aria-label="text alignment">
          <ToggleButton value="personalInfo" component={Link} to={"/account"}>
            My Information
          </ToggleButton>
          <ToggleButton value="addresses" component={Link} to={"/account/addresses"} >
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
};

export default Account;
