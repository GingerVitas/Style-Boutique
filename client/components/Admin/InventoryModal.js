import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Box, Button, Paper, IconButton, Typography, FormControl, FormGroup, MenuItem, Select, TextField, Modal} from '@mui/material';  
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {adminUpdateProduct, adminUpdateSKU} from '../../store/admin'

const InventoryModal = props => {
  const {product, setParent} = props
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(product);
  const [productName, setProductName] = useState(product.name);
  const [selectedColor, setSelectedColor] = useState(product.productColors[0]);
  const [selectedSKU, setSelectedSKU] = useState(selectedColor.productSKUs[0]);
  const [availableStock, setAvailableStock] = useState(selectedSKU.availableStock);
  const [price, setPrice] = useState(selectedSKU.price);


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
    setProductName({
      name:evt.target.value
    })
  }

  const handleColorChange = evt => {
    setSelectedColor(evt.target.value)
    setSelectedSKU(evt.target.value.productSKUs[0])

  }

  const handleSizeChange = evt => {
    setSelectedSKU(evt.target.value)
  }

  const handleSKUChange = evt => {
    if(evt.target.name === 'price'){
      setPrice(evt.target.value)
    } else {
      setAvailableStock(evt.target.value)
    }
  }

  const handleUpdate = evt => {
    evt.preventDefault();
    const updatedProduct = {...selectedProduct};
    const updatedSKU = {...selectedSKU, price, availableStock};
    dispatch(adminUpdateProduct(updatedProduct));
    dispatch(adminUpdateSKU(updatedSKU, updatedProduct))
  }

  return (
    <Box sx={boxStyle}>
      <Box sx={gridStyle}>
          <IconButton sx={{gridArea:'cb'}} onClick={()=>setParent(false)}>
            <CloseOutlinedIcon />
          </IconButton>
        <Paper elevation={1} sx={{gridArea:'im', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <img src={selectedColor.id ? selectedColor.imageUrl : product.imageUrl} style={{padding:'.5rem', height:'95%', width:'auto'}}/>
        </Paper>
        <Paper elevation={1} sx={{gridArea:'pi', display:'flex', flexDirection:'column', justifyContent:'space-around', height:'100%', width:'auto'}}>
          <Typography variant='h3' gutterBottom>
            <FormControl>
              <TextField label='name' name='name' value={productName} onChange={handleProductNameChange}>{product.name}</TextField>
            </FormControl>  
          </Typography>
          <div style={{display:'flex', justifyContent:'space-evenly'}}>
          <Typography variant='subtitle1' gutterBottom>Added to Inventory on {selectedColor.id ? selectedColor.createdAt : product.createdAt}</Typography>
          <Typography variant='subtitle1' gutterBottom>Last Updated {selectedColor.id ? selectedColor.updatedAt : product.updatedAt}</Typography>
          </div>
          <Typography variant='h6'>Color: 
            <FormGroup>
              <Select id='color' name='color' value={selectedColor} onChange={handleColorChange}>
                {product.productColors.map(color => (
                  <MenuItem key={color.id} name='color' value={color}>{color.color}</MenuItem>
                ))}
              </Select>
            </FormGroup>
          </Typography>
          <Typography variant='h6'>Size: 
            <FormGroup>
              <Select id='color' name='color' value={selectedSKU} onChange={handleSizeChange}>
                {selectedColor.productSKUs.map(sku => (
                  <MenuItem key={sku.id} name='sku' value={sku}>{sku.size}</MenuItem>
                ))}
              </Select>
            </FormGroup>
          </Typography>
          <div style={{display:'flex', justifyContent:'space-around'}}>
            <Typography variant='h6'>Price:
              <FormControl>
                  <TextField inputProps={{style: {textAlign:'right'}}} label='Price' name='price' value={price} onChange={handleSKUChange}>{selectedSKU.price}</TextField>
              </FormControl>
            </Typography>
            <Typography variant='h6'>Available Stock: 
              <FormControl>
                  <TextField inputProps={{style:{textAlign:'right'}}} label='Stock' name='availableStock' value={availableStock} onChange={handleSKUChange}>{selectedSKU.availableStock}</TextField>
              </FormControl></Typography>
          </div>
          <div style={{display:'flex', justifyContent:'space-around'}}>
            <Button variant='outlined' onClick={()=>console.log('Add New Color Button Clicked')}>Add New Color</Button>
            <Button variant='outlined' onClick={handleUpdate}>Save Changes</Button>
          </div>  
        </Paper >
        <Button sx={{gridArea:'xx'}}>Delete Product</Button>
      </Box>
    </Box>
  )
};

export default InventoryModal