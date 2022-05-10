import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {TableRow, TableCell, TextField, Button, IconButton, Select, MenuItem} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteLineItem, adminUpdateLineItem} from '../../store/admin';

const LineItemTableRow = (props) => {
  const {item, order, lineItemState, setLineItemState} = props
  const dispatch = useDispatch();
  const [state, setState] = useState(item);
  const [editState, setEditState] = useState(false);
  const [skuData, setSKUData] = useState({
    sku: {},
    color: {},
    colorSKUs: []
  })
  const {sku, color, colorSKUs} = skuData
  const [selectedSKU, setSelectedSKU] = useState(sku)
  const {quantity, productPrice, productColor, productSize} = state;

  useEffect(()=> {
    async function getSKUData() {
      const sku = (await axios.get(`/api/skus/findOne/${item.productSKUId}`)).data;
      const color = (await axios.get(`/api/colors/singleColor/${sku.productColorId}`)).data;
      const colorSKUs = (await axios.get(`/api/skus/findAll/${color.id}`)).data;
      setSKUData({sku, color, colorSKUs})
      setSelectedSKU(sku)
    };
    getSKUData()
  }, [state])

  

  const handleChange = (evt) => {
    if(evt.target.name === 'productSize'){
      const newSKU = colorSKUs.filter(_sku => _sku.size === evt.target.value)[0];
      setSelectedSKU(newSKU)
      setState({
        ...state, productSize:newSKU.size, productSKUId: newSKU.id
      });
  
    }
    setState({
      ...state, [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const newItem = {...state}
    dispatch(adminUpdateLineItem({...state}, order))
    setState(newItem)
    setEditState(false)
    setLineItemState([...lineItemState.filter(item => item.id !== newItem.id), newItem])
  }

  const handleDelete = (lineItem, order) => {
    dispatch(deleteLineItem(lineItem, order));
    // setLineItemState(line_items.filter(item => item.id !== lineItem.id))
  }

  return (
    <TableRow sx={{height:'auto', maxHeight:'120px'}}>
      <TableCell><Button onClick={editState ? (evt) => handleSubmit(evt) : ()=>setEditState(true)}>{editState ? 'Save Changes' : 'Edit Item'}</Button></TableCell>
      <TableCell scope='row' padding='none' sx={{display:'flex', alignItems:'center'}}>
        <img src={item.imageUrl} style={{maxHeight:'200px', width:'auto', minWidth:'90px', marginRight:'1rem', padding:'.5rem'}} />{item.productName}
      </TableCell>
      <TableCell align='right'>{!editState ? item.productSize 
        : <Select name='productSize' value={productSize} onChange={handleChange}> 
            <MenuItem name='productSize' value={productSize}>{productSize}</MenuItem>
            {!colorSKUs.length ? '' : colorSKUs.map(_sku => (
              _sku.id !== item.productSKUId ?
              <MenuItem key={_sku.id} name='productSize' value={_sku.size}>{_sku.size}</MenuItem>
              : ''
            ))}
          </Select>}
      </TableCell>
      <TableCell align='right'>{productColor}</TableCell>
      <TableCell align='right'> {!editState ? item.quantity 
        : <TextField 
        type='number' 
        name='quantity' value={quantity > selectedSKU.availableStock ? selectedSKU.availableStock : quantity} 
        onChange={handleChange} 
        InputProps={{inputProps: {min: 0, max: selectedSKU.availableStock}}} sx={{minWidth:'4rem'}}>
          {quantity}
        </TextField> }
      </TableCell>
      <TableCell align='right'> {!editState ? `$${productPrice}`
        : <TextField 
          type='text'
          name='productPrice' value={productPrice} 
          onChange={handleChange}
          sx={{textAlign:'right', minWidth:'8rem'}} 
          >
            ${productPrice}
          </TextField>}
      </TableCell>
      <TableCell><IconButton disabled={editState ? false : true} onClick={()=> handleDelete(item, order)}><DeleteIcon /></IconButton></TableCell>
    </TableRow>
  );
};

export default LineItemTableRow;