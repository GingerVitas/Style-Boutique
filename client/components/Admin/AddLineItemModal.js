import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Button, Card, Typography, CardContent, FormControl, Select, MenuItem, InputLabel} from '@mui/material';
import {adminAddLineItem} from '../../store/admin';

const AddLineItemModal = props => {
  const {order, lineItemState, setLineItemState, setOpen} = props;
  const dispatch = useDispatch();
  const categories = useSelector(state=>state.categories)
  const products = useSelector(state=>state.adminProducts)
  const [lineItem, setLineItem] = useState({
    productName: '',
    productColor: '',
    productSize: '',
    productPrice: 1,
    imageUrl: '',
    quantity: 1,
    orderId: order.id,
    productSKUId: ''
  });
  const [selectedProduct, setSelectedProduct] = useState({
    category: {},
    product: {},
    productColor: {},
    productSize: {}
  });
  const {category, product, productColor, productSize} = selectedProduct;


  const handleChange = (evt) => {
    if(evt.target.name === 'category'){
      setSelectedProduct({...selectedProduct, category:evt.target.value})
    } else if (evt.target.name === 'product') {
      setSelectedProduct({...selectedProduct, product:evt.target.value})
      setLineItem({...lineItem, productName: evt.target.value.name})
    } else if (evt.target.name === 'productColor') {
      setSelectedProduct({...selectedProduct, productColor:evt.target.value});
      setLineItem({...lineItem, productColor:evt.target.value.color, imageUrl:evt.target.value.imageUrl})
    } else if (evt.target.name === 'productSize') {
      setSelectedProduct({...selectedProduct, productSize:evt.target.value})
      setLineItem({...lineItem, productSize:evt.target.value.size, productPrice:evt.target.value.price, productSKUId: evt.target.value.id})
    } else {
      setLineItem({...lineItem, [evt.target.name]:evt.target.value})
    }
  };

  const handleSubmit = async(evt) => {
    evt.preventDefault();
    dispatch(adminAddLineItem(lineItem, order));
    setLineItemState([...lineItemState, lineItem])
    setOpen(false)
  }


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

  return(
    <Box sx={style}>
      <Card>
        <CardContent>
        <Typography variant='h3'>Add a new line item to the order</Typography>
          <FormControl fullWidth>
            <InputLabel id='category-select-label'>Category</InputLabel>
            <Select
              labelId='category-select-label'
              id='category-select'
              value={category}
              name='category'
              label='Category'
              onChange={handleChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value='' disabled>Please select a Category</MenuItem>
              {categories.map(category=>(
                <MenuItem key={category.id} value={category}>{category.categoryName}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='product-select-label'>Product</InputLabel>
            <Select
              labelId='product-select-label'
              id='product-select'
              value={product}
              name='product'
              label='Product'
              onChange={handleChange}
              fullWidth
            >
              {!category.id ? <MenuItem>Please select a Category</MenuItem> 
              : products.map(product => (
                <MenuItem key={product.id} value={product} sx={{alignItems:'center'}}><img src={product.imageUrl} style={{maxHeight:'100px', width:'auto', marginRight:'1rem', padding:'.5rem'}}/>{product.name}</MenuItem>
              ))
              }
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='productColor-select-label'>Color</InputLabel>
            <Select
              labelId='productColor-select-label'
              id='productColor-select'
              value={productColor}
              name='productColor'
              label='Color'
              onChange={handleChange}
              fullWidth
            >
              {!product.id ? <MenuItem>Please select a Product</MenuItem>
              : product.productColors.map(color => (
                <MenuItem key={color.id} value={color}>{color.color}</MenuItem>
              ))
              }
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='size-select-label'>Size</InputLabel>
            <Select
              labelId='size-select-label'
              id='size-select'
              value={productSize}
              name='productSize'
              label='Size'
              onChange={handleChange}
              fullWidth
            >
              {!productColor.id ? <MenuItem>Please select a color</MenuItem>
              : productColor.productSKUs.map(sku => (
                <MenuItem key={sku.id} value={sku}>{sku.size}</MenuItem>
              ) )}
            </Select>
          </FormControl>
          <Button sx={{flexBasis: '50%'}} onClick={(evt)=> handleSubmit(evt)}>Add Item to Order</Button>
          <Button sx={{flexBasis: '50%'}} onClick={()=>setOpen(false)}>Cancel</Button>
        </CardContent>
      </Card>
    </Box>
  )
};

export default AddLineItemModal
