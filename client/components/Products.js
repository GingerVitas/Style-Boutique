import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import {Grid, Container, Stack, CircularProgress } from '@mui/material';

const Products = (props) => {
  const { products, categories, adminView } = props;
  console.log('************Categories*********', categories)
  if(!categories.length) {
    return( 
      <div style={{marginLeft: '3rem'}}>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    // <Container style={{width:'90%', textAlign:'center', border:'red 1px solid', margin:'0 0'}}>
    //style={{gridTemplateColumns: "repeat(4, 1fr)"}}
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        columnSpacing={2}
        sx={{width: '80%', margin: '0 auto', textAlign: 'center'}}
        >
        {products.map((product) => {
          return <Grid item xs={3} key={product.id}><ProductCard product={product} categories={categories} adminView={adminView}/></Grid>;
        })}
      </Grid>
    // </Container>

  );
};

const mapState = (state) => {
  return {
    products: state.products,
    categories: state.categories
  };
};

export default connect(mapState)(Products);
