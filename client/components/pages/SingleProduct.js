import React, {useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import {loadColors} from '../../store/productColors';
import { loadSKUs } from '../../store/skus';

//MUI
import { Button, InputLabel, MenuItem, FormControl, Select, Grid } from '@mui/material';

//Child Component
// import ProductCard from '../ProductCard';

const singleProduct = () => {
  const dispatch = useDispatch();
  const {productName} = useParams();
  const product = useSelector(state => (state.products.find(product => product.name === productName)));
  const colors = useSelector(state=>state.productColors);
  const sku = useSelector(state => state.skus);
  const order = useSelector( state => state.order );
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [lineItem, setLineItem] = useState({
    productName: '',
    productColor: '',
    productSize: '',
    productPrice: 1,
    imageUrl: '',
    quantity: 1,
    productSKUId: ''
  })

  useEffect(()=> {
    dispatch(loadColors(productName)),
    dispatch(loadSKUs(productName))
  }, [])

  console.log('SKUS', sku)
  // For Size DropDown
  const handleSize = (event) => {
    const selectedSKU = event.target.value;
    setSize(selectedSKU);
    setLineItem({...lineItem, productPrice: +(selectedSKU.price), productSize: selectedSKU.size, productSKUId: selectedSKU.id})
  };

  // For Color DropDown
  const handleColor = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
    setLineItem({ ...lineItem, productName: product.name, productColor: selectedColor.color, imageUrl: selectedColor.imageUrl});
  };

  if (!product || !colors.length) return (
    <div>Loading...</div>
  )
  return (
    <div>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={7} sx={{}}>
          <img src={product.imageUrl} style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} /><br />
        </Grid>
        <Grid item xs={5} sx={{ paddingRight: '2em'}}>
          <h3>{product.name}</h3>
          <h4>{product.brand}</h4>
          <h2>${sku[0]? sku[0].price : '3em'}</h2>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              label="Size"
              onChange={(e) => handleSize(e)}
            >
              {!color ? <MenuItem value={''}>Please Select a Color</MenuItem> :
                color.productSKUs.map(sku => sku.availableStock === 0 ?
                  <MenuItem key={sku.id} value={sku} disabled={true} >{sku.size}  Out of Stock, check back soon!</MenuItem>
                  : <MenuItem key={sku.id} value={sku}>{sku.size}  {sku.availableStock <= 3 ? `Only ${sku.availableStock} left!` : `${sku.availableStock}`}</MenuItem>)
              }
            </Select>
          </FormControl>
          <br />
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              label="Color"
              onChange={handleColor}
              defaultValue={0}
            >
              {
                colors.map(color => <MenuItem key={color.id} value={color}>{color.color}</MenuItem>)
              }
            </Select>
          </FormControl>
          <br />
          <Button color='black' variant="contained" onClick={() => { dispatch(addToCart(lineItem, order)) }}>Add to Cart</Button>
        </Grid>
        <Grid item xs={12} sx={{padding: '0 3em'}}>
        <h3>Product Details</h3>
        <hr />
        <div>
            {product.description}  
        </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default singleProduct
