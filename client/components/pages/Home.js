import React, {useState} from "react";
import { useSelector } from "react-redux";
import {Button} from '@mui/material'
import Products from "../Products";

const Home = () => {
  const { firstName, isAdmin } = useSelector(state=>state.auth);
  const [adminView, setAdminView] = useState(false)

  if(!isAdmin) return (
    <div>
      <Products adminView={adminView}/>
    </div>
  );
  else return (
    <div>
      <h3 style={{marginLeft: '40px'}}>Welcome, {firstName}</h3>
      <Products adminView={adminView}/>
    </div>
  )
};

export default (Home);
