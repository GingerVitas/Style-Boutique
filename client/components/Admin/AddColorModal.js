import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Box, Button, FormControl, TextField, Typography, IconButton} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddSKUCard from './AddSKUCard';
import {adminAddColor} from '../../store/admin';

const AddColorModal = props => {
  const {product, setOpen} = props;
  const dispatch = useDispatch();
  const [state, setState] = useState({
    color: '',
    imageUrl: '',
    productId: product.id
  });
  const [skus, setSKUs] = useState([
    {
      size: '',
      availableStock: 1,
      price: 19.99,
    }
  ]);

  useEffect(()=>{
    console.log('SKUs rendered')
  },[skus])

  const style = { 
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    height: 'auto',
    maxHeight:'80vh',
    width: '80vw',
    overflow:'scroll'
  };

  const handleChange = evt => {
    setState({
      ...state,
      [evt.target.name]:evt.target.value
    })
  };

  const addSKU = evt => {
    evt.preventDefault();
    const newSKU = {size: '',availableStock: 1,price: 19.99,};
    setSKUs([...skus, newSKU]);
  }

  const handleSubmit = evt => {
    console.log('create color, create skus with foreach', state, skus, product);
    dispatch(adminAddColor(state, skus))
    setOpen(false)
    alert('Color Created Successfully!')
  }

  return(
    <Box sx={style}>
      <IconButton sx={{position:'fixed', top:0, right:0}} onClick={()=>setOpen(false)} >
        <CloseOutlinedIcon />
      </IconButton>
      <Typography variant='h3'>Add new color to {product.name}</Typography>
      <FormControl sx={{width:'80%'}} onChange={handleChange}>
        <TextField inputProps={{style:{textAlign:'center'}}} label='Color' name='color' value={state.color}>{state.color}</TextField>
        <TextField inputProps={{style:{textAlign:'center'}}} label='Image URL' name='imageUrl' value={state.imageUrl}>{state.imageUrl}</TextField>
      </FormControl>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        {skus.map((sku, index) => {
          return <AddSKUCard key={index} sku={sku} index={index} skuArray={skus} setSKUs={setSKUs}/>
        })}
        <Button onClick={(evt)=>addSKU(evt)} variant='outlined'>Add another SKU</Button>
      </Box>
      <Button onClick={(evt)=>handleSubmit(evt)}>Create Color Variant</Button>
    </Box>
  )






}

export default AddColorModal