import React, {useState} from 'react';
import {Card, Button, TextField, FormControl} from '@mui/material';


const NewColorSKUCard = props => {
  const {sku, index, setSKUs, colorArray, colorIndex} = props
  const [localSKU, setLocalSKU] = useState(sku);

  const handleSave = evt => {
    evt.preventDefault();
    const newColorArray = [...colorArray];
    newColorArray[colorIndex].skuArray[index] = {...localSKU, price:parseFloat(localSKU.price).toFixed(2)};
    setSKUs(newColorArray)
    console.log('handle save', newColorArray)
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

export default NewColorSKUCard


