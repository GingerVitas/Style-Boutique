import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import PersonalInfo from "./PersonalInfo";
import Addresses from "./Addresses";
import OrderHistory from "./OrderHistory";

const Account = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // global state to auth
  const [display, setDisplay] = useState(""); //display is set when button clicked, onClick calls setDisplay
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

  // useEffect(() => {
  //   dispatch(());
  // }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome {auth.firstName}</h1>
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
  );
};

export default Account;
