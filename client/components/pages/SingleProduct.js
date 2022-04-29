import React, {useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import {loadSKUs} from '../../store/skus';
import {loadColors} from '../../store/productColors';

//MUI
import { Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

//Child Component
// import ProductCard from '../ProductCard';

const singleProduct = () => {
  const dispatch = useDispatch();
  const {productName} = useParams();
  const product = useSelector((state)=>(state.products.filter(product => product.name === productName))[0]);
  const colors = useSelector(state=>state.productColors);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [lineItem, setLineItem] = useState({
    productName: '',
    productColor: '',
    productSize: '',
    productPrice: 1,
    imageUrl: '',
    quantity: 1
  })
  // const categories = useSelector(state=>state.categories)

  useEffect(()=> {
    dispatch(loadColors(productName))
  }, [])
  useEffect(()=> {
    dispatch(loadSKUs(productName))
  },[])

  if (!product || !colors.length) return (
    <div>Loading...</div>
  )

  // For Size DropDown
  const handleSize = (event) => {
    const selectedSKU = event.target.value;
    setSize(selectedSKU);
    setLineItem({...lineItem, productPrice: +(selectedSKU.price), productSize: selectedSKU.size})
  };

  // For Color DropDown
  const handleColor = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
    setLineItem({ ...lineItem, productName: product.name, productColor: selectedColor.color, imageUrl: selectedColor.imageUrl});
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Product Brand</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>{product.brand}</td>
            <td>{product.name}</td>
          </tr>
        </tbody>
      </table>
      <FormControl sx={{ width: '10%' }}>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Size"
          onChange={(e)=> handleSize(e)}
        >
          { !color ? <MenuItem value={''}>Please Select a Color</MenuItem> :
            color.productSKUs.map(sku => sku.availableStock === 0 ? 
            <MenuItem key={sku.id} value={sku} disabled={true} >{sku.size}  Out of Stock, check back soon!</MenuItem> 
            : <MenuItem key={sku.id} value={sku}>{sku.size}  {sku.availableStock <= 3 ? `Only ${sku.availableStock} left!` : `${sku.availableStock}`}</MenuItem>)
          }
        </Select>
      </FormControl>
      <br />
      <FormControl sx={{ width: '10%' }}>
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
      <Button color='black' variant="contained" onClick={() => console.log(lineItem)}>Add to Cart</Button>
    </div>
  )
}

export default singleProduct

// addToCart(product)

// dispatch(addToCart(sku, quantity))