import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import {Grid, Container} from '@mui/material';
import {loadProducts} from '../store/products';

const Products = (props) => {
  const {adminView } = props;
  const dispatch = useDispatch();
  const products = useSelector(state=>state.products)
  const categories = useSelector(state=>state.categories)

  useEffect(()=>{
    dispatch(loadProducts())
  }, [])

  if(!categories.length) return <h1>Loading...</h1>
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
          return <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}><ProductCard product={product} categories={categories} adminView={adminView}/></Grid>;
        })}
      </Grid>
    // </Container>

  );
};

export default Products;
