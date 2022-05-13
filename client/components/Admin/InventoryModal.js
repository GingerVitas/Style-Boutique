import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Box, Button, Paper, IconButton, Typography, FormControl, FormGroup, MenuItem, Select, TextField, Modal} from '@mui/material';  
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {adminUpdateProduct, adminUpdateSKU, deleteProduct} from '../../store/admin'
import AddColorModal from './AddColorModal';

const InventoryModal = props => {
  const {product, setParent} = props
  const dispatch = useDispatch();
  const [state, setState] = useState({
    selectedProduct: product,
    productName: product.name,
    selectedColor: product.productColors[0],
    selectedSKU: product.productColors[0].productSKUs[0],
    price: product.productColors[0].productSKUs[0].price,
    availableStock: product.productColors[0].productSKUs[0].availableStock
  });
  const [open, setOpen] = useState(false);

  const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1.25,
    textAlign: 'center',
    height: '80vh',
    maxHeight:'80vh',
    width: 'auto',
    minWidth: '70vw',
    overflow:'scroll',
  }

  const gridStyle = {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridAutoRows: 'minmax(6vh, auto)',
    gap: 1,
    gridTemplateAreas: `'tm tm tm tm tm tm tm tm tm tm tm cb'
    'im im im im im im im pi pi pi pi pi'
    'im im im im im im im pi pi pi pi pi'
    'im im im im im im im pi pi pi pi pi'
    'im im im im im im im pi pi pi pi pi'
    'im im im im im im im pi pi pi pi pi'
    'im im im im im im im pi pi pi pi pi'
    'im im im im im im im pi pi pi pi pi'
    'im im im im im im im pi pi pi pi pi'
    'bm bm bm bm xx xx xx xx bm2 bm2 bm2 bm2'`
  }

  const handleProductNameChange = evt => {
    setProductName(evt.target.value)
  }

  const handleColorChange = evt => {
    setState({
      ...state,
      selectedColor:evt.target.value,
      selectedSKU:evt.target.value.productSKUs[0],
      price: evt.target.value.productSKUs[0].price,
      availableStock:evt.target.value.productSKUs[0].availableStock
    })
  }

  const handleSizeChange = evt => {
    setState({
      ...state,
      selectedSKU:evt.target.value,
      price:evt.target.value.price,
      availableStock:evt.target.value.availableStock
    })
  }

  const handleSKUChange = evt => {
    if(evt.target.name === 'price'){
      setState({
        ...state,
        price:evt.target.value
      })
    } else {
      setState({...state, availableStock:evt.target.value})
    }
  }

  const handleUpdate = evt => {
    evt.preventDefault();
    const updatedProduct = {...state.selectedProduct, name: state.productName};
    const updatedSKU = {...state.selectedSKU, price:parseFloat(state.price).toFixed(2), availableStock:state.availableStock};
    const newColor = updatedProduct.productColors.find(color => color.id === updatedSKU.productColorId)
    dispatch(adminUpdateProduct(updatedProduct));
    dispatch(adminUpdateSKU(updatedSKU, updatedProduct));
    setState({
      ...state,
      selectedProduct: updatedProduct,
      productName: updatedProduct.name,
      selectedColor: newColor,
      selectedSKU: updatedSKU,
      price: updatedSKU.price,
      availableStock: updatedSKU.availableStock
    });
    setParent(false);
      alert('Item Updated')


  };

  const handleDelete = evt => {
    evt.preventDefault();
    dispatch(deleteProduct(product))
    setParent(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={boxStyle}>
      <Box sx={gridStyle}>
          <IconButton sx={{gridArea:'cb'}} onClick={()=>setParent(false)}>
            <CloseOutlinedIcon />
          </IconButton>
        <Paper elevation={1} sx={{gridArea:'im', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <img src={state.selectedColor.id ? state.selectedColor.imageUrl : state.selectedProduct.imageUrl} style={{padding:'.5rem', height:'95%', width:'auto'}}/>
        </Paper>
        <Paper elevation={1} sx={{gridArea:'pi', display:'flex', flexDirection:'column', justifyContent:'space-around', height:'100%', width:'auto'}}>
          <Typography variant='h3' gutterBottom>
            <FormControl sx={{width:'100%'}}>
              <TextField inputProps={{style: {textAlign:'center'}}} label='name' name='name' value={state.productName} onChange={handleProductNameChange}>{product.name}</TextField>
            </FormControl>  
          </Typography>
          <div style={{display:'flex', justifyContent:'space-evenly'}}>
          <Typography variant='subtitle1' gutterBottom>Added to Inventory on {state.selectedColor.id ? state.selectedColor.createdAt : state.selectedProduct.createdAt}</Typography>
          <Typography variant='subtitle1' gutterBottom>Last Updated {state.selectedColor.id ? state.selectedColor.updatedAt : state.selectedProduct.updatedAt}</Typography>
          </div>
          <Typography variant='h6'>Color: 
            <FormGroup>
              <Select id='color' name='color' value={state.selectedColor} onChange={handleColorChange}>
                {state.selectedProduct.productColors.map(color => (
                  <MenuItem key={color.id} name='color' value={color}>{color.color}</MenuItem>
                ))}
              </Select>
            </FormGroup>
          </Typography>
          <Typography variant='h6'>Size: 
            <FormGroup>
              <Select id='color' name='size' value={state.selectedSKU} onChange={handleSizeChange}>
                {state.selectedColor.productSKUs.map(sku => (
                  <MenuItem key={sku.id} name='sku' value={sku}>{sku.size}</MenuItem>
                )).sort()}
              </Select>
            </FormGroup>
          </Typography>
          <div style={{display:'flex', justifyContent:'space-around'}}>
            <Typography variant='h6'>Price:
              <FormControl>
                  <TextField inputProps={{style: {textAlign:'right'}}} label='Price' name='price' value={state.price} onChange={handleSKUChange}>{state.selectedSKU.price}</TextField>
              </FormControl>
            </Typography>
            <Typography variant='h6'>Available Stock: 
              <FormControl>
                  <TextField type='number' inputProps={{style:{textAlign:'right'}}} label='Stock' name='availableStock' value={state.availableStock} onChange={handleSKUChange}>{state.selectedSKU.availableStock}</TextField>
              </FormControl></Typography>
          </div>
          <div style={{display:'flex', justifyContent:'space-around'}}>
            <Button variant='outlined' onClick={()=>setOpen(true)}>Add New Color</Button>
            <Button variant='outlined' onClick={handleUpdate}>Save Changes</Button>
          </div>  
        </Paper >
        <Button sx={{gridArea:'xx'}} onClick={handleDelete}>Delete Product</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div>
          <AddColorModal product={product} setOpen={setOpen} />
        </div>
      </Modal>
    </Box>
  )
};

export default InventoryModal