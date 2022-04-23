import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import {Grid, Container} from '@mui/material';

export const Products = (props) => {
  const { products } = props;
  //console.log(props);
  return (
    <Container style={{width:'85%', float:'right'}}>
      <Grid container spacing={2} columnSpacing={1} style={{gridTemplateColumns: "repeat(4, 1fr)"}}>
        {products.map((product) => {
          return <Grid item xs={3} key={product.id}><ProductCard product={product} /></Grid>;
        })}
      </Grid>
    </Container>

  );
};

const mapState = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapState)(Products);
