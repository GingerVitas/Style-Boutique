import React, {useState} from 'react';
import {Card, Button, TextField, FormControl, InputAdornment} from '@mui/material';

//setSKUs([...skus.map((sku, index) => sku)])

//setSKUs, skuArray  skus[index] = whatever local state for sku then setSKUs(skus)

const AddSKUCard = props => {
  const {sku, skuArray, index, setSKUs} = props
  const [localSKU, setLocalSKU] = useState(sku);

  const handleSave = evt => {
    evt.preventDefault();
    skuArray[index] = {...localSKU, price:parseFloat(localSKU.price).toFixed(2)};
    setSKUs(skuArray)
    console.log('handle save', skuArray)
  }

  const handleChange = evt => {
    if(evt.target.name === 'size'){
      setLocalSKU({
        ...localSKU,
        [evt.target.name]:evt.target.value
      })
    } else if(evt.target.name === 'availableStock') {
      setLocalSKU({
        ...localSKU, 
        [evt.target.name]:evt.target.value*1
      })
    } else {
      setLocalSKU({
        ...localSKU,
        [evt.target.name]:evt.target.value
      })
    }
  }

  return(
    <Card sx={{maxWidth:'30rem', flexDirection:'column', display:'flex', margin:'1rem', padding:'.5rem'}}>
      <FormControl>
        <TextField inputProps={{style:{textAlign:'right'}}} label='Size' name='size' value={localSKU.size} onChange={handleChange}>{localSKU.size}</TextField>
        <TextField inputProps={{style:{textAlign:'right'}}} label='Stock' name='availableStock' value={localSKU.availableStock} onChange={handleChange}>{localSKU.availableStock}</TextField>
        <TextField inputProps={{style:{textAlign:'right'}}} label='Price' name='price' value={localSKU.price} onChange={handleChange}>{localSKU.price}</TextField>
      </FormControl>
      <Button onClick={(evt)=>handleSave(evt)}>Save SKU</Button>
    </Card>
  )
}

export default AddSKUCard


