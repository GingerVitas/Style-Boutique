import React from 'react';
import {Link} from 'react-router-dom';

const Unauthorized = () => {
  return (
    <h1>
      You are not authorized to view this page. Please click <Link to='/home'>here</Link> to be redirected.
    </h1>
  )
}

export default Unauthorized