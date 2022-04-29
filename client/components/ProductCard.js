import React from 'react';
import {useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom';
import {Card, FormControl, InputLabel, Select, MenuItem, CardContent, CardMedia, Typography,} from '@mui/material';


const ProductCard = (props) => {
  const product = props.product;
  let skus;
  let skuColors
  const category = props.categories.filter(category => category.id === product.categoryId)[0];
  const {productName} = useParams();
  productName ? skus = props.skus : skus = [];
  skuColors = skus.reduce((acc, sku) => {
    const colors = acc.map(elem => elem.color);
    if (!colors.includes(sku.color)) {
      acc.push(sku);
      return acc
    }
    else return acc
  }, []);
  let skuColor

  const handleChange = (ev) => {
    ev.preventDefault();

  }
  
  if (!productName) return(
         <Link to={`/${category.categoryName}/${product.name}`}>
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
  else return (
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
          </Typography>3
          <Typography variant='subtitle2'>
            {product.name}
          </Typography>
          <FormControl size='small'>
                <InputLabel id='skuColor'>Color</InputLabel>
                <Select 
                  labelId='skuColor'
                  id='skuColor'
                  value={skuColor}
                  label='color'
                  onChange={handleChange}
                >
                  {skuColors.map(sku => (
                    <MenuItem key={sku.id} value={sku.id*1}>{sku.color}</MenuItem>
                  ))}
                </Select>

              </FormControl>
        </CardContent>
      </Card>
  )
}

export default ProductCard