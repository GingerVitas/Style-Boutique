import React, {useEffect } from 'react';
import {useParams} from 'react-router-dom';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { loadSKUs } from '../../store/skus';
import { addToCart } from '../../store/cart'

//MUI
import { Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const singleProduct = () => {
  const dispatch = useDispatch();
  const {name} = useParams();
  const product = useSelector((state)=>(state.products.filter(product => product.name === name))[0]);
  const skus = useSelector(state=>state.skus);
  const [sku, setSku] = React.useState('');
  const [size, setSize] = React.useState('');
  const [color, setColor] = React.useState('');
  const quantity = 1;

  useEffect(()=> {
    dispatch(loadSKUs(name))
  },[])

  if (!product || !skus.length) return (
    <div>Loading...</div>
  )

  // For Size DropDown
  const handleSize = (event) => {
    setSku(event.target.value);
    setSize(event.target.value.size);
  };
  console.log('size selected:', size)

  // For Color DropDown
  const handleColor = (event) => {
    setSku(event.target.value);
    setColor(event.target.value.color);
  };
  console.log('color selected:', color)
  console.log('selected sku:', sku)
  // We could have 1 select that has color/size = 10 options?
  // 1. how to render only 2 colors instead of 10 repeated colors, same for sizes
  // 2. make thunk call to check sku's availabelStock if <= 0, grey out
  // 3. when color selected, re-render sizes drop down.
  //     size selected -> if last size of the color, also grey out the color- re-render colors drop down.

  // problem: MUI MenuItem, sku for value is too big. sku id for value is too big.
 
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
            <td>{skus[0].price}</td>
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
          {
            skus.map(sku => <MenuItem key={sku.id} value={sku}>{sku.size}</MenuItem>)
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
            skus.map(sku => <MenuItem key={sku.id} value={sku}>{sku.color}</MenuItem>)
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