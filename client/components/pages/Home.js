import React, {useState} from "react";
import { connect } from "react-redux";
import {Button} from '@mui/material'
import Products from "../Products";

const Home = (props) => {
  const { firstName, isAdmin } = props;
  const [adminView, setAdminView] = useState(false)

  if(!isAdmin) return (
    <div>
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

const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
    isAdmin: state.auth.isAdmin
  };
};

export default connect(mapState)(Home);
