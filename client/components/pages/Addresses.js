import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
  Paper,
  IconButton,
  Typography,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Autocomplete,
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
  InputLabel
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { addAddress, deleteAddress } from "/client/store/address";

//import AddressForm from "../AddressForm";

const Addresses = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // global state to auth

  const { onAddressChange, addressformValue, setAddressFormValue, onBillingAddressChange, billingAddressFormValue, setBillingAddressFormValue } = props;

  const states = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "VI",
    "WA",
    "WV",
    "WI",
    "WY"
  ];

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
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
    zipCode: 12345,
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
  if (address) {
    return (
      <Box textAlign="center" sx={{ p: 2 }}>
        <div>
          <Typography variant="h4">Shipping Addresses</Typography>
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
              <div>
                <Button variant="text" onClick={() => {}} color="black">
                  Edit
                </Button>
                <Button variant="text" onClick={() => remove(address.id)} color="black" sx={{ marginRight: "2rem" }}>
                  Remove
                </Button>
              </div>
            </ul>
          </div>
        </div>
        <div>
          <Button color="black" style={{ width: "30%", padding: "10px", fontSize: "1rem" }} variant="contained">
            Add A New Address
          </Button>
          <div>
            <form className="addAddressForm" name="shippingAddress">
              <Typography variant="h6">
                First Name <TextField name="firstName" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                Last Name
                <TextField name="lastName" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                Street Address
                <TextField name="addressLine1" type="text" size="small" variant="filled" required id="outlined-basic" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                Apt/Suite
                <TextField name="addressLine2" type="text" size="small" variant="filled" id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                City
                <TextField name="city" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                State/Province
                <TextField name="state" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                Zip Code
                <TextField name="zipCode" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                Country <TextField name="country" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
            </form>

            <div align="center">
              <div>
                <FormControlLabel control={<Checkbox checked={checked} color="black" onChange={handleChange} />} label="Make this my default shipping address." />
              </div>
              <Button color="black" style={{ width: "30%", padding: "10px", fontSize: "1rem" }} variant="contained">
                SAVE
              </Button>
              <Button color="inherit" style={{ width: "30%", padding: "10px", fontSize: "1rem" }} href="/addresses" variant="contained" sx={{ marginRight: "2rem" }}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Box>
    );
  } else {
    return (
      <Box textAlign="center" margin-bottom="15px">
        <div>
          <Button color="black" style={{ width: "30%", padding: "10px", fontSize: "1rem" }} variant="contained">
            Add A New Address
          </Button>
          <div>
            <form className="addAddressForm" name="shippingAddress">
              <Typography variant="h6">
                First Name <TextField name="firstName" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                Last Name
                <TextField name="lastName" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                Street Address
                <TextField name="addressLine1" type="text" size="small" variant="filled" required id="outlined-basic" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                Apt/Suite
                <TextField name="addressLine2" type="text" size="small" variant="filled" id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                City
                <TextField name="city" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                State/Province
                <TextField name="state" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                Zip Code
                <TextField name="zipCode" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
              <Typography variant="h6">
                Country <TextField name="country" type="text" size="small" variant="filled" required id="outlined-password-input" style={{ width: "60%" }} />
              </Typography>
            </form>

            <div align="center">
              <div>
                <FormControlLabel control={<Checkbox checked={checked} color="black" onChange={handleChange} />} label="Make this my default shipping address." />
              </div>
              <Button color="black" style={{ width: "30%", padding: "10px", fontSize: "1rem" }} variant="contained">
                SAVE
              </Button>
              <Button color="inherit" style={{ width: "30%", padding: "10px", fontSize: "1rem" }} href="/addresses" variant="contained" sx={{ marginRight: "2rem" }}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Box>
    );
  }
};

export default connect((state) => state)(Addresses);
