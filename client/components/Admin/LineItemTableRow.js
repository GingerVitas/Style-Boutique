import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {TableRow, TableCell, TextField, Button, IconButton, Select, MenuItem, FormGroup} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteLineItem, adminUpdateLineItem} from '../../store/admin';

const LineItemTableRow = (props) => {
  const {item, order, lineItemState, setLineItemState, setParent} = props
  const dispatch = useDispatch();
  const [state, setState] = useState({
    ...item,
    productSize: item.productSize,
    quantity: item.quantity,
    productPrice: parseFloat(item.productPrice*1.00).toFixed(2),
    productColor: item.productColor
  });
  const [editState, setEditState] = useState(false);
  const [skuData, setSKUData] = useState({
    sku: {},
    color: {},
    colorSKUs: []
  })
  const {sku, color, colorSKUs} = skuData
  const [selectedSKU, setSelectedSKU] = useState(sku)
 
  const {quantity, productPrice, productColor, productSize} = state;

  async function getSKUData() {
    const sku = (await axios.get(`/api/skus/findOne/${item.productSKUId}`)).data;
    const color = (await axios.get(`/api/colors/singleColor/${sku.productColorId}`)).data;
    const colorSKUs = (await axios.get(`/api/skus/findAll/${color.id}`)).data;
    setSKUData({sku, color, colorSKUs})
    setSelectedSKU(sku)
  };

  useEffect(()=> {
    getSKUData()
  }, [state])

  

  const handleChange = (evt) => {
    if(evt.target.name === 'productSize'){
      const newSKU = colorSKUs.filter(_sku => _sku.size === evt.target.value)[0];
      setSelectedSKU(newSKU)
      setState({
        ...state, productSize:newSKU.size, productSKUId: newSKU.id
      });
  
    } else if(evt.target.name === 'quantity'){
      setState({
        ...state, [evt.target.name]:evt.target.value*1
      })
    } else {
      setState({
        ...state, [evt.target.name]: evt.target.value*1
      })
    }
 
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    if(state.quantity === 0){
      const lineItem = {...state}
      dispatch(deleteLineItem(lineItem, order));
      setLineItemState([...lineItemState.filter(item => item.id !== lineItem.id)])
    }
    else {
      const newItem = {...state}
      dispatch(adminUpdateLineItem({...state}, order))
      setState(newItem)
      setEditState(false)
      setLineItemState([...lineItemState.filter(item => item.id !== newItem.id), newItem])
    }
  };

  const handleDelete = (lineItem, order) => {
    dispatch(deleteLineItem(lineItem, order));
    setLineItemState([...lineItemState.filter(item => item.id !== lineItem.id)])
  }

  const handleButtonChange = evt => {
    evt.preventDefault();
    setEditState(true);
    setParent(true)
  }

  return (
    <TableRow sx={{height:'auto', maxHeight:'120px'}}>
      <TableCell><Button onClick={editState ? (evt) => handleSubmit(evt) : (evt)=>handleButtonChange(evt)}>{editState ? 'Save Changes' : 'Edit Item'}</Button></TableCell>
      <TableCell scope='row' padding='none' sx={{display:'flex', alignItems:'center'}}>
        <img src={item.imageUrl} style={{maxHeight:'200px', width:'auto', minWidth:'90px', marginRight:'1rem', padding:'.5rem'}} />{item.productName}
      </TableCell>
      <TableCell align='right'>{!editState ? item.productSize 
        : <FormGroup><Select name='productSize' value={productSize} onChange={handleChange}> 
            <MenuItem name='productSize' value={productSize}>{productSize}</MenuItem>
            {!colorSKUs.length ? '' : colorSKUs.map(_sku => (
              _sku.id !== item.productSKUId ?
              <MenuItem key={_sku.id} name='productSize' value={_sku.size}>{_sku.size}</MenuItem>
              : ''
            ))}
          </Select></FormGroup>}
      </TableCell>
      <TableCell align='right'>{productColor}</TableCell>
      <TableCell align='right'> {!editState ? item.quantity 
        : <FormGroup><TextField 
        type='number' 
        name='quantity' value={quantity > selectedSKU.availableStock ? selectedSKU.availableStock : quantity} 
        onChange={handleChange} 
        InputProps={{inputProps: {min: 0, max: selectedSKU.availableStock}}} sx={{minWidth:'4rem'}}>
          {quantity}
        </TextField></FormGroup>}
      </TableCell>
      <TableCell align='right'> {!editState ? `$${productPrice}`
        : <FormGroup><TextField 
          type='text'
          name='productPrice' value={productPrice} 
          onChange={handleChange}
          sx={{textAlign:'right', minWidth:'5rem'}} 
          >
            ${productPrice}
          </TextField></FormGroup>}
      </TableCell>
      <TableCell align='center'><IconButton disabled={editState ? false : true} onClick={()=> handleDelete(item, order)}><DeleteIcon /></IconButton></TableCell>
    </TableRow>
  );
};

export default LineItemTableRow;