import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  IconButton,
  Typography,
  FormControl,
  FormGroup,
  MenuItem,
  Select,
  TextField,
  Modal,
  Card,
  CardHeader,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  InputLabel,
  FormControlLabel,
  Switch
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { addAddress, deleteAddress } from "/client/store/address";

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
    overflow: "scroll"
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //dispatch(addAddress);
    //dispatch(deleteAddress);
  };

  const [address, setAddress] = useState({
    userId: auth.id,
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: 12345,
    country: "USA"
  });

  //pass in address to thunk, no this or binding

  // Loads all addresses:
  // useEffect(() => {
  //   dispatch(address);
  // }, []);

  // For Edit Button
  const handleEdit = (event) => {};

  // For Remove/Delete Button
  const handleDelete = (event) => {
    destroy(address.id);
  };

  // replace input with textfield
  return (
    <div>
      <h4>Shipping Addresses</h4>

      <div>
        <ul>
          {auth.addresses.map((address) => {
            return `
            <li>${address.addressLine1}</li>
            <li>${address.addressLine2} </li>
            <li>${address.city} </li>
            <li>${address.state} </li>
            <li>${address.zip}</li>
            <li>${address.country}</li>`;
          })}
          <Button
            color="black"
            variant="contained"
            onClick={() => {
              handleEdit();
            }}
          >
            Edit
          </Button>
          <Button
            color="black"
            variant="contained"
            onClick={() => {
              handleDelete();
            }}
          >
            Remove
          </Button>
        </ul>
      </div>

      <div>
        <button id="addAddress">Add New Address</button>
        <div>
          <form className="addAddressForm">
            <label className="addressLabel">
              First Name <input name="firstName" type="text" />
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
              Country <input name="country" type="text" />
            </label>
            <label>
              <input type="checkbox" /> Make this my default shipping address.
            </label>

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
