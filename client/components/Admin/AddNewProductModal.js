import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Button, FormControl, TextField, Typography, IconButton, FormGroup, Select, MenuItem} from '@mui/material';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import NewColorCard from './NewColorCard';
import { adminAddProduct } from '../../store/admin';


const AddNewProductModal = ({setParent}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state=>state.categories);
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    description: '',
    imageUrl: '',
    categoryId: 1
  });
  const [colorArray, setColorArray] = useState([{
    color: '',
    imageUrl: '',
    skuArray: [{
      size: '',
      availableStock: 1,
      price: 19.99
    }]
  }]);

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
    height: '80vh',
    maxHeight:'80vh',
    width: '80vw',
    overflow:'scroll'
  };

  const handleChange = evt => {
    setProduct({
      ...product,
      [evt.target.name]:evt.target.value
    })
  };

  const addColor = evt => {
    evt.preventDefault();
    const newColor = {color:'', imageUrl:'', skuArray: [{
      size: '',
      availableStock: 1,
      price: 19.99
    }]};
    setColorArray([...colorArray, newColor]);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(adminAddProduct(product, colorArray))
  }

  return (
    <Box sx={style}>
      <IconButton sx={{position:'fixed', top:0, right:0}} onClick={()=>setParent(false)}>
        <CloseOutlined />
      </IconButton>
      <Typography variant='h2'>Add new product to inventory</Typography>
      <FormControl sx={{width:'40%', margin:'2rem'}} onChange={handleChange}>
        <TextField inputProps={{style:{textAlign:'center'}}} label='Name' name='name' value={product.name}>{product.name}</TextField>
        <TextField inputProps={{style:{textAlign:'center'}}} label='Brand' name='brand' value={product.brand}>{product.brand}</TextField>
        <TextField inputProps={{style:{textAlign:'center'}}} label='Default Image URL' name='imageUrl' value={product.imageUrl}>{product.imageUrl}</TextField>
      </FormControl>
      <FormControl sx={{width:'40%', marginTop:'3rem'}} onChange={handleChange}>
        <TextField inputProps={{style:{textAlign:'left'}}} multiline label='Description' rows={3} name='description' value={product.description}>{product.description}</TextField>
        <TextField
          select
          value={product.categoryId}
          name='categoryId'
          label='Category'
          onChange={handleChange}
        >
          <MenuItem value='' disabled>Please select a Category</MenuItem>
          {categories.map(category=>(
            <MenuItem key={category.id} value={category.id}>{category.categoryName}</MenuItem>
          ))}
      </TextField>
      </FormControl>
      <Box>
        {
          colorArray.map((color, index) => {
            return  <NewColorCard key={index} color={color} colorArray={colorArray} setColorArray={setColorArray} index={index}/>
          })
        }
      </Box>
      <FormGroup sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', marginTop:'1.5rem'}}>
        <Button onClick={(evt)=>addColor(evt)} variant='outlined'>Add Another Color</Button>
        <Button onClick={(evt)=>handleSubmit(evt)} variant='outlined'>Create Product</Button>
      </FormGroup>

 
     
    </Box>
  )

}

export default AddNewProductModal