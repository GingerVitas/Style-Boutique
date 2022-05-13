import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Box, Card, Button, FormControl, TextField, Typography, IconButton} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import NewColorSKUCard from './NewColorSKUCard';
import {adminAddColor} from '../../store/admin';

const AddColorModal = props => {
  const {color, colorArray, setColorArray, index} = props;
  const dispatch = useDispatch();
  const [localColor, setLocalColor] = useState(color);
  const [skuCount, setSKUCount] = useState(1);
  const colorIndex = index
  const newColorArray = [...colorArray];

  useEffect(()=>{
    console.log('SKUs rendered')
  },[colorArray])


  const handleChange = evt => {
    setLocalColor({
      ...localColor,
      [evt.target.name]:evt.target.value
    })
  };

  const addSKU = evt => {
    evt.preventDefault();
    const newSKU = {size: '',availableStock: 1,price: 19.99,};
    newColorArray[index].skuArray[skuCount] = newSKU
    setColorArray(newColorArray);
    setSKUCount(skuCount+1)
  };

  const handleSave = evt => {
    evt.preventDefault();
    
    colorArray[index] = {...localColor};
    setColorArray(colorArray)
  }

  const handleSubmit = evt => {
    console.log('create color, create skus with foreach', localColor, skuArray);
    dispatch(adminAddColor(state, skus))
    setOpen(false)
    alert('Color Created Successfully!')
  }

  return(
    <Card sx={{marginBottom:'.5rem'}}>
      <IconButton sx={{position:'fixed', top:0, right:0}} onClick={()=>setOpen(false)} >
        <CloseOutlinedIcon />
      </IconButton>
      <Typography sx={{marginTop:'1rem'}} variant='h5'>Add new color variant</Typography>
      <FormControl sx={{width:'80%'}} onChange={handleChange}>
        <TextField inputProps={{style:{textAlign:'center'}}} label='Color' name='color' value={localColor.color}>{localColor.color}</TextField>
        <TextField inputProps={{style:{textAlign:'center'}}} label='Image URL' name='imageUrl' value={localColor.imageUrl}>{localColor.imageUrl}</TextField>
      </FormControl>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        {localColor.skuArray.map((sku, index) => {
          return <NewColorSKUCard key={index} sku={sku} index={index} setSKUs={setColorArray} colorArray={newColorArray} colorIndex={colorIndex}/>
        })}
        <Button onClick={(evt)=>addSKU(evt)} variant='outlined'>Add another SKU</Button>
      </Box>
      <Button sx={{margin:'1rem', }} onClick={(evt)=>handleSave(evt)} variant='outlined'>Save Color Variant</Button>
    </Card>
  )






}

export default AddColorModal