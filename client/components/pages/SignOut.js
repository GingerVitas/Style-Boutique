import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom';

const SignOut = () => {
const history = useHistory();
useEffect(()=>{
  setTimeout(()=>{
    history.push('/')
  }, 1000)
})


  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ color: '#444444', fontWeight: '500'}}>You have been successfully signed out. Redirecting to Home Page.</h3>
    </div>
  );
};

export default SignOut;
