import React, {useState} from "react";
import { useSelector } from "react-redux";
import {Button} from '@mui/material'
import Products from "../Products";

/**
 * COMPONENT
 */
const Home = () => {
  const { firstName, isAdmin } = useSelector(state=>state.auth);
  const [adminView, setAdminView] = useState(false)

  if(!isAdmin) return (
    <div>
      <h3 style={{marginLeft: '40px'}}>Welcome, {firstName ? firstName : "Guest"}</h3>
      <Products adminView={adminView}/>
    </div>
  );
  else return (
    <div>
      <h3 style={{marginLeft: '40px'}}>Welcome, {firstName}</h3>
      <Button variant={adminView ? 'contained' : 'outlined'} onClick={()=>adminView ? setAdminView(false) : setAdminView(true)} className={adminView ? 'selected' : ''} sx={{padding:'.5rem', margin:'1rem'}}>Toggle Admin View</Button>
      <Products adminView={adminView}/>
    </div>
  )
};

/**
 * CONTAINER
 */


export default (Home);
