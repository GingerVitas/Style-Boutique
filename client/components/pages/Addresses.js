import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Box,
  Button,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import thunks: import addAddress from

const Addresses = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // global state to auth

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    height: "auto",
    maxHeight: "80vh",
    width: "auto",
    overflow: "scroll",
  };

  // call thunks in handleSubmit()

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addAddress);
  };

  const [address, setAddress] = useState({
    userId: auth.id,
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: 12345,
    country: "USA",
  });

  //value = {address.addressLine1}

  //pass in address to thunk, no this or binding

  // useEffect to load all addresses
  // useEffect(() => {
  //   dispatch(());
  // }, []);

  return (
    <div>
      <h4>Shipping Addresses</h4>
      <div>
        <ul>
          All addresses will be listed here.
          <button>Edit</button>
          <button>Remove</button>
        </ul>
      </div>

      <div>
        <button id="addAddress">Add New Address</button>
        <div>
          <form className="addAddressForm">
            <label className="addressLabel">
              First Name
              <input name="firstName" type="text" />
            </label>
            <label className="addressLabel">
              Last Name
              <input name="lastName" type="text" />
            </label>
            <label className="addressLabel">
              Street Address
              <input name="street" type="text" />
            </label>
            <label className="addressLabel">
              Apt/Suite
              <input name="aptNum" type="text" />
            </label>
            <label className="addressLabel">
              Zip Code
              <input name="zip" type="text" />
            </label>
            <label className="addressLabel">
              City
              <input name="city" type="text" />
            </label>
            <label className="addressLabel">
              State/Province
              <input name="state" type="text" />
            </label>
            <label className="addressLabel">
              Country
              <input name="country" type="text" />
            </label>
            <button className="checkbox" onClick={() => {}}>
              Make this my default shipping address.
            </button>
            <button className="save" onClick={() => {}}>
              SAVE
            </button>
          </form>
          <div id="cancelLink">
            <Link to="/addresses">Cancel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => state)(Addresses);
