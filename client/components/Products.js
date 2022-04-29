import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import {Grid, Container} from '@mui/material';

const Products = (props) => {
  const { products, categories } = props;
  console.log('************Categories*********', categories)
  if(!categories.length) return <h1>Loading...</h1>
  return (
    <Container style={{width:'85%', float:'center', textAlign:'center'}}>
      <Grid container spacing={2} columnSpacing={1} style={{gridTemplateColumns: "repeat(4, 1fr)"}}>
        {products.map((product) => {
          return <Grid item xs={3} key={product.id}><ProductCard product={product} categories={categories}/></Grid>;
        })}
      </Grid>
    </Container>

  );
};

const mapState = (state) => {
  return {
    products: state.products,
    categories: state.categories
  };
};

export default connect(mapState)(Products);
