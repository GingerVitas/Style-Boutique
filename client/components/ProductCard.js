import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Item } from '@mui/material';


const ProductCard = (props) => {
  const product = props.product
  return(
        <Link to={`/${product.categoryId}/${product.name}`}>
          <Card sx={{maxWidth:'280', margin:'.5rem'}} style={{height:'100%'}}>
            <CardMedia
              component='img'
              image={product.imageUrl}
              height='435'
              width='300'
            />
            <CardContent>
              <Typography gutterBottom variant='subtitle1'>
                {product.brand}
              </Typography>
              <Typography variant='subtitle2'>
                {product.name}
              </Typography>
            </CardContent>
          </Card>
        </Link> 
  )
}

export default ProductCard