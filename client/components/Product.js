<<<<<<< HEAD
import React from "react";
import { addListItem } from "../store/cart";
import { connect } from "react-redux";
import Button from "@mui/material/Button";

export const Product = (props) => {
  const { product, auth, addToCart, routeProps } = props;
  return (
    <div style={{ flexBasis: "33.333333%" }}>
      <img src={product.imageUrl} style={{ width: "150px" }} />
      <ul style={{ listStyleType: "none" }}>
        <li style={{ fontWeight: "bold" }}>{product.brand}</li>
        <li>{product.name}</li>
        <li>$ {product.price}</li>
        <li>{product.color}</li>
        <li>{product.size}</li>
      </ul>
      {props.routeProps ? (
        ""
      ) : (
        <Button
          color="black"
          variant="contained"
          onClick={() => addToCart(product, auth)}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};
=======
import React from 'react';
import { addListItem } from '../store/cart'
import { connect } from 'react-redux'
import Button from '@mui/material/Button';

export const Product = props => {
    const { product, auth, addToCart, routeProps } = props;
    return (
        <div style={{ flexBasis: '33.333333%'}}>
            <img src={product.imageUrl} style={{width:'150px'}}/>
            <ul style={{listStyleType:'none'}}>
                <li style={{fontWeight:'bold'}}>{product.brand}</li>
                <li>{product.name}</li>
                <li>$ {product.price}</li>
                <li>{product.color}</li>
                <li>{product.size}</li>
            </ul>
            {props.routeProps? '' :
                <Button color='black' variant="contained" onClick={() => addToCart(product, auth)}>Add to Cart</Button>
            }
        </div>
    )
}
>>>>>>> main

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addToCart(product, auth) {
      dispatch(addListItem(product, auth));
    },
  };
};

export default connect(mapState, mapDispatch)(Product);
