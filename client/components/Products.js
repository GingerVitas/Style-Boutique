import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory, useParams} from 'react-router-dom'
import ProductCard from "./ProductCard";
import {Grid, Button, Pagination, Typography} from '@mui/material';
import {loadProducts} from '../store/products';

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.products)
  const {isAdmin} = useSelector(state=>state.auth)
  const {category} = useParams();
  const [adminView, setAdminView] = useState(false)
  const [page, setPage] = useState(1)
  const {history} = props
  const totalPages = products.totalPages
  const query = window.location.search

  useEffect(()=>{
    dispatch(loadProducts(category, query))
  }, [])

  useEffect(()=>{
    dispatch(loadProducts(category, query))
  }, [page])

  const handleChange = (evt, value) => {
    evt.preventDefault();
    setPage(value);
    history.push(`${window.location.pathname}?page=${value}`)
  }

  if(!products.content) return <h1>Loading...</h1>
  return (
    <div>
      {isAdmin ? <Button variant={adminView ? 'contained' : 'outlined'} onClick={()=>adminView ? setAdminView(false) : setAdminView(true)} className={adminView ? 'selected' : ''} sx={{padding:'.5rem', margin:'1rem'}}>Toggle Admin View</Button> : null}
        <div style={{textAlign:'center'}}>
          <Typography variant='h3' sx={{fontFamily:'Cardo'}}>Get inspired! Find the perfect {category} for your wardrobe.</Typography>
        </div>
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          columnSpacing={2}
          sx={{width: '80%', margin: '0 auto', textAlign: 'center'}}
          >
          {products.content.map((product) => {
            return <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}><ProductCard product={product} category={category} adminView={adminView}/></Grid>;
          })}
        </Grid>
        <div style={{display:'flex', justifyContent:'center', marginBottom:'2rem'}}>
          <Pagination count={totalPages} value={page} onChange={(evt, value)=>handleChange(evt, value)} variant='outlined' />
        </div>
    </div>
  );
};

export default Products;
