import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import axios from 'axios'
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
import {me} from '../../store/'
import AddressCard from '../AddressCard';

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

  const [addressArray, setAddressArray] = useState(auth.addresses)
  const [checked, setChecked] = useState(true);
  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
  };
  
  useEffect(()=> {
    dispatch(me())
  }, [addressArray])


  const [address, setAddress] = useState({
    userId: auth.id,
    firstName: '',
    lastName: '',
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: 12345,
    country: ""
  });

  const [addAddress, setAddAddress] = useState(false)


  const handleSave = async(evt) => {
    evt.preventDefault()
    const newAddress = await axios.post('/api/users/address', address, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    setAddressArray([...addressArray, newAddress])
    setAddAddress(false)
    setAddress({      
      userId: auth.id,
      firstName: '',
      lastName: '',
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: 12345,
      country: ""})
  };

  const clearAddressForm = evt => {
    evt.preventDefault()
    setAddress({
      userId: auth.id,
      firstName: '',
      lastName: '',
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: 12345,
      country: ""
    })
  }

  const handleChange = evt => {
    setAddress({...address, [evt.target.name]:evt.target.value})
  }

    return (
      <Box textAlign="center" sx={{ p: 2 }}>
        <div>
          <Typography variant="h4">Shipping Addresses</Typography>
          <Box sx={{marginTop:'1rem', display:'flex', justifyContent:'center'}}>
              {auth.addresses.length ? auth.addresses.map((address) => {
                return (
                  <div>
                    <AddressCard key={address.id} address={address} addressArray={addressArray} setAddressArray={setAddressArray}/> 
                  </div>
                )
              }) : '' 
              }
          </Box>
      </div>
        <div style={{marginTop:'2rem'}}>
          <Button color="black" style={{ width: "30%", padding: "10px", fontSize: "1rem" }} variant="contained" onClick={()=> setAddAddress(true)}>
            Add A New Address
          </Button>
          <div style={{display:'flex', justifyContent:'center'}}>
            {addAddress ? 
            <Card sx={{padding:'1.5rem', textAlign:'center', width:'35vw'}}>
            <FormControl>
              <div style={{display:'flex', justifyContent:'space-around'}}>
                <TextField label='firstName' name='firstName' value={address.firstName} onChange={handleChange}>{address.firstName}</TextField>
                <TextField label='lastName' name='lastName' value={address.lastName} onChange={handleChange}>{address.lastName}</TextField>
              </div>
              <TextField label='addressLine1' name='addressLine1' value={address.addressLine1} onChange={handleChange}>{address.addressLine1}</TextField>
              {address.addressLine2 ? <TextField label='addressLine2' name='addressLine2' value={address.addressLine2} onChange={handleChange}>{address.addressLine2}</TextField> : null}
            <div style={{display:'flex', justifyContent:'space-around'}}>
              <TextField label='city' name='city' value={address.city} onChange={handleChange}>{address.city}</TextField> <TextField label='state' name='state' value={address.state} onChange={handleChange}>{address.state}</TextField> <TextField label='zipCode' name='zipCode' value={address.zipCode} onChange={handleChange}>{address.zipCode}</TextField>
            </div>
            <TextField label='country' name='country' value={address.country} onChange={handleChange}>{address.country}</TextField>
            </FormControl>
            <div>
              <FormControlLabel control={<Checkbox checked={checked} color="black" onChange={handleCheckedChange} />} label="Make this my default shipping address." />
            </div>
            <div style={{display:'flex', justifyContent:'space-around', marginTop:'1.5rem', marginBottom:'1.5rem'}}>
              <Button color="black" variant="contained" onClick={(evt) => handleSave(evt)} >
                Save
              </Button>
              <Button color="black" variant="contained" onClick={(evt) => clearAddressForm(evt)} >
                Clear Form
              </Button>
            </div>
            <Button color="inherit" style={{ width: "30%", padding: "10px", fontSize: "1rem" }} onClick={()=>setAddAddress(false)} variant="contained" sx={{ marginRight: "2rem" }}>
                Cancel
              </Button>
          </Card>
          : null
          }
          

            {/* <div align="center">
              <div>
                <FormControlLabel control={<Checkbox checked={checked} color="black" onChange={handleChange} />} label="Make this my default shipping address." />
              </div>
              <Button color="black" style={{ width: "30%", padding: "10px", fontSize: "1rem" }} variant="contained">
                SAVE
              </Button>
              <Button color="inherit" style={{ width: "30%", padding: "10px", fontSize: "1rem" }} href="/addresses" variant="contained" sx={{ marginRight: "2rem" }}>
                Cancel
              </Button>
            </div> */}
          </div>
        </div>
      </Box>
    );
  
};

export default connect((state) => state)(Addresses);
