import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loadAdminUsers,
  loadAdminProducts,
  loadAdminOrders,
} from "../../store";
import { Box, Button } from "@mui/material";
import AdminUserTable from "../Admin/AdminUserTable";
import AdminInventoryTable from "../Admin/AdminInventoryTable";
import AdminOrdersTable from "../Admin/AdminOrdersTable";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const adminUsers = useSelector((state) => state.adminUsers);
  const adminInventory = useSelector((state) => state.adminProducts);
  const adminOrders = useSelector((state) => state.adminOrders);
  const [display, setDisplay] = useState("");
  const [render, setRender] = useState(false);
  const buttonBoxStyle = {
    width: "90vw",
    height: "80vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "auto",
  };
  const buttonStyle = {
    margin: "1rem",
  };

  useEffect(() => {
    setTimeout( ()=> {
      dispatch(loadAdminUsers());
      dispatch(loadAdminProducts());
      dispatch(loadAdminOrders());
    }, 500)
  }, []);

  useEffect(() => {
    dispatch(loadAdminUsers());
  }, [adminOrders]);

  useEffect(() => {
    if (render) {
      console.log("Admin Dashboard Render");
      dispatch(loadAdminProducts());
      setRender(false);
    }
  }, [render]);
  
  if(auth.isAdmin) return (
    <div>
    <h1 style={{textAlign:'center'}}>Welcome Administrator {auth.lastName}</h1>
    <Box sx={buttonBoxStyle}>
      <Button sx={buttonStyle} name='users' variant={display === 'users' ? 'contained' : 'outlined'} onClick={()=> setDisplay('users')}>Manage Users</Button>
      <Button sx={buttonStyle} name='inventory' variant={display === 'inventory' ? 'contained' : 'outlined'} onClick={()=> setDisplay('inventory')}>Manage Inventory</Button>
      <Button sx={buttonStyle} name='orders' variant={display === 'orders' ? 'contained' : 'outlined'} onClick={()=> setDisplay('orders')}>Manage Orders</Button>
      <Box sx={{flexBasis: '100%', width:'100%', padding:'1rem', margin:'1rem'}}>
        {display === 'users' ? <AdminUserTable users={adminUsers} display={display}/>
        : display === 'inventory' ? <AdminInventoryTable inventory={adminInventory} display={display} setRender={setRender}/> 
        : display === 'orders' ? <AdminOrdersTable orders={adminOrders} display={display} /> : ''} 
      </Box>
    </Box>
  </div>
  )
return (
    <h1>
      Oops! It looks like you are not authorized to view this content. If you
      believe you are receiving this message in error, please contact a system
      administrator.
    </h1>
  )
};

export default AdminDashboard;
