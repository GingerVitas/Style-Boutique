import React, {useState} from 'react';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {Card, Button, Typography, TextField, FormControl} from '@mui/material';

const AddressCard = ({address, addressArray, setAddressArray}) => {
  const dispatch = useDispatch();
  const [editState, setEditState] = useState(false)
  const [addressState, setAddressState] = useState(address)

  const handleChange = evt => {
    setAddressState({...addressState, [evt.target.name]:evt.target.value})
  }

  const handleSave = async(evt) => {
    evt.preventDefault();
    await axios.put(`/api/users/address/${address.id}`, address, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    setAddressArray([...addressArray, addressState])
    setEditState(false)
  }

  const deleteAddress = async(evt) => {
    evt.preventDefault()
    await axios.delete(`/api/users/address/${address.id}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    setAddressArray(addressArray.filter(address => address.id !== addressState.id))
  }

  if (editState) {
    return (
      <Card sx={{padding:'1.5rem', textAlign:'left', width:'15vw'}}>
        <FormControl>
          <div style={{display:'flex'}}>
            <TextField label='firstName' name='firstName' value={addressState.firstName} onChange={handleChange}>{addressState.firstName}</TextField>
            <TextField label='lastName' name='lastName' value={addressState.lastName} onChange={handleChange}>{addressState.lastName}</TextField>
          </div>
          <TextField label='addressLine1' name='addressLine1' value={addressState.addressLine1} onChange={handleChange}>{addressState.addressLine1}</TextField>
          {address.addressLine2 ? <TextField label='addressLine2' name='addressLine2' value={addressState.addressLine2} onChange={handleChange}>{addressState.addressLine2}</TextField> : null}
         <div style={{display:'flex'}}>
          <TextField label='city' name='city' value={addressState.city} onChange={handleChange}>{addressState.city}</TextField> <TextField label='state' name='state' value={addressState.state} onChange={handleChange}>{addressState.state}</TextField> <TextField label='zipCode' name='zipCode' value={addressState.zipCode} onChange={handleChange}>{addressState.zipCode}</TextField>
         </div>
         <TextField label='country' name='country' value={addressState.country} onChange={handleChange}>{addressState.country}</TextField>
        </FormControl>
        <div>
          <Button variant="text" onClick={(evt) => handleSave(evt)} color="black">
            Save Changes
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card sx={{padding:'1.5rem', textAlign:'left', width:'15vw'}}>
      <Typography variant='body1'>{addressState.firstName} {addressState.lastName}</Typography>
      <Typography variant='body1'>{addressState.addressLine1}</Typography>
      {addressState.addressLine2 ? <Typography variant='body1'>{addressState.addressLine2}</Typography> : null}
      <Typography variant='body1'>{addressState.city}, {addressState.state} {addressState.zipCode}</Typography>
      <Typography variant='body1'>{addressState.country}</Typography>
      <div>
        <Button variant="text" onClick={() => setEditState(true)} color="black">
          Edit
        </Button>
        <Button variant="text" onClick={(evt) => deleteAddress(evt)} color="black" sx={{ marginRight: "2rem" }}>
          Remove
        </Button>
      </div>
  </Card>
  
  )

}

export default AddressCard