import React, {useEffect, useState } from 'react';

//REACT-DOM
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { createNewLineitemInCart, addQuantityToLineitem } from '../../store/cart';
import { loadColors } from '../../store/productColors';
import { loadSKUs } from '../../store/skus';

//MUI
import { Button, InputLabel, MenuItem, FormControl, Select, Grid, Box, Typography, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const singleProduct = () => {
  const dispatch = useDispatch();
  const {productName} = useParams();

  // redux- state: useSelector
  const product = useSelector(state => (state.products.content.find(product => product.name === productName)));
  const colors = useSelector(state=>state.productColors);
  const skus = useSelector(state => state.skus);
  const order = useSelector(state => state.order);
  const cart = useSelector(state => state.cart);

  // local state: useState
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
  });
  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // fetch thunk calls
  useEffect(()=> {
    dispatch(loadColors(productName)),
    dispatch(loadSKUs(productName))
    console.log(skus)
  }, [])

  // For Size DropDown
  const handleSize = (event) => {
    const selectedSKU = event.target.value;
    setSize(selectedSKU);
    setLineItem({...lineItem, productPrice: +(selectedSKU.price), productSize: selectedSKU.size, productSKUId: selectedSKU.id})
  };

  // For Color DropDown
  const handleColor = (event) => {
    console.log(skus)
    const selectedColor = event.target.value;
    setColor(selectedColor);
    setLineItem({ ...lineItem, productName: product.name, productColor: selectedColor.color, imageUrl: selectedColor.imageUrl});
  };

  // For Add to cart Button
  const handleClick = () => {
    const existing_lineitem = cart.find(line_item => line_item.productSKUId === lineItem.productSKUId);
    const sku = skus.find(sku => sku.id === lineItem.productSKUId);

    if (existing_lineitem  && existing_lineitem.quantity < sku.availableStock) {
      dispatch(addQuantityToLineitem(lineItem, order));
    } else if(!existing_lineitem ) {
      dispatch(createNewLineitemInCart(lineItem, order))
    } else {
      alert('We are out of stock. Sorry') //It shouldn't even reach here, bc we are already greying out if there's no availability.
    }

    handleOpen();
  }

  // render
  if (!product || !colors.length) return (
    <div>Loading...</div>
  )
  return (
    <div>
      <Box sx={{ padding: '4rem', marginTop: '1rem', maxHeight: '75vh' }}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item xs={7} sx={{}}>
            <img src={color.imageUrl ? color.imageUrl : product.imageUrl} style={{ width: '40%', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} /><br />
          </Grid>
          <Grid item xs={5} sx={{ paddingRight: '15%' }}>
            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
            <h2>${skus[0] ? skus[0].price : '3em'}</h2>
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
                    <MenuItem key={sku.id} value={sku} disabled={true} >{sku.size}  - Out of Stock </MenuItem>
                    : cart.find(line_item => line_item.productName === lineItem.productName) &&
                      (cart.find(line_item => line_item.productName === lineItem.productName).quantity >= sku.availableStock)
                      ? < MenuItem key={sku.id} value={sku} disabled={true} > {sku.size} - Out of Stock </MenuItem>

                      : <MenuItem key={sku.id} value={sku}> {sku.size} </MenuItem>)
                }
              </Select>
            </FormControl>
            <br />
            <Button color='black' variant="contained" onClick={() => { handleClick() }}>Add to Cart</Button>
          </Grid>
          <Grid item xs={12} sx={{ padding: '0 3em' }}>
            <h3>Product Details</h3>
            <hr />
            <div>
              {product.description}
            </div>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center" 
          >
            <Grid item xs={5} sx={{padding:'0 1rem'}}>
              <img src={lineItem.imageUrl} style={{ width: '100%', display: 'block' }} />
            </Grid>
            <Grid item xs={6}>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginBottom: '1em' }}>
                Successfully added to cart.
              </Typography>
              <h3 style={{margin:'0 0', padding:'0 0'}}>{product.brand}</h3>
              <p>
                <span style={{fontWeight:'bold'}}>{lineItem.productName}</span><br/>
                <span>Size: {lineItem.productSize}</span><br/>
                <span>Color: {lineItem.productColor}</span><br/>
                <span style={{fontWeight:'bold'}}>${lineItem.productPrice}</span>
              </p>
              <Button color='black' variant="contained" component={Link} to={'/cart'} sx={{ width: '50%' }}>Checkout</Button>
            </Grid>
            <Grid item xs={1}>
              <Button onClick={handleClose} sx={{ position: 'absolute', top: '0'}}><CloseIcon sx={{ fontSize: 'large'}} color='black'></CloseIcon></Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default singleProduct
