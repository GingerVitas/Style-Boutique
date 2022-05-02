import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {loadAdminUsers, loadAdminProducts, loadAdminOrders} from '../../store';
import {Box, Button} from '@mui/material';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state=>state.auth)
  const [display, setDisplay] = useState('')
  const buttonBoxStyle = {
    width: '80vw', 
    height: '80vh', 
    display:'flex', 
    justifyContent:'space-around',
    margin: '1rem',
    border: '1px solid black',
    borderRadius: '.5rem',
    margin: 'auto'
  };
  const buttonStyle = {
    margin: '1rem'
  }

  useEffect(()=>{
    dispatch(loadAdminUsers());
    dispatch(loadAdminProducts());
    dispatch(loadAdminOrders());
  }, [])

  if(!auth || !auth.isAdmin) return (
    <h1>Oops! It looks like you are not authorized to view this content. If you believe you are receiving this message in error, please contact a system administrator.</h1>
  );
  return(
    <div>
      <h1 style={{textAlign:'center'}}>Welcome Administrator {auth.lastName}</h1>
      <Box sx={buttonBoxStyle}>
        <Button sx={buttonStyle} variant={display === 'users' ? 'contained' : 'outlined'} onClick={()=> setDisplay('users')}>Manage Users</Button>
        <Button sx={buttonStyle} variant={display === 'inventory' ? 'contained' : 'outlined'} onClick={()=> setDisplay('inventory')}>Manage Inventory</Button>
        <Button sx={buttonStyle} variant={display === 'orders' ? 'contained' : 'outlined'} onClick={()=> setDisplay('orders')}>Manage Orders</Button>
      </Box>
    </div>


  )
}

export default AdminDashboard