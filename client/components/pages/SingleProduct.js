import React, {useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import {loadSKUs} from '../../store/skus';
import {loadColors} from '../../store/productColors';

//MUI
import { Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material';


// import ProductCard from '../ProductCard';


const singleProduct = () => {
  const dispatch = useDispatch();
  const {productName} = useParams();
  const product = useSelector((state)=>(state.products.filter(product => product.name === productName))[0]);
  const colors = useSelector(state=>state.productColors);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  // const categories = useSelector(state=>state.categories)


  useEffect(()=> {
    dispatch(loadColors(productName))
  }, [])
  useEffect(()=> {
    dispatch(loadSKUs(productName))
  },[])


  console.log('***Colors****', colors);
  console.log('****Product****', product)
  if (!product || !colors.length) return (
    <div>Loading...</div>
  )

  // For Size DropDown
  const handleSize = (event) => {
    setSize(event.target.value);
  };
  console.log('size selected:', size)

  // For Color DropDown
  const handleColor = (event) => {
    setColor(event.target.value);
  };
  console.log('color selected:', color)
  // We could have 1 select that has color/size = 10 options?
  // 1. how to render only 2 colors instead of 10 repeated colors, same for sizes
  // 2. make thunk call to check sku's availabelStock if <= 0, grey out
  // 3. when color selected, re-render sizes drop down.
  //     size selected -> if last size of the color, also grey out the color- re-render colors drop down.

  // problem: MUI MenuItem, sku for value is too big. sku id for value is too big.
 
  return (
    <div>
      {/* <ProductCard product={product} skus={skus} categories={categories} /> */}
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
          onChange={handleSize}
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
        >
          {
            colors.map(color => <MenuItem key={color.id} value={color}>{color.color}</MenuItem>)
          }
        </Select>
      </FormControl>
      <br />
      <Button color='black' variant="contained" onClick={() => dispatch(addToCart(sku, quantity))}>Add to Cart</Button>
    </div>
  )
}

export default singleProduct

// addToCart(product)