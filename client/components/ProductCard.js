import React from 'react';
import {useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom';
import {Card, FormControl, InputLabel, Select, MenuItem, CardContent, CardMedia, Typography,} from '@mui/material';


const ProductCard = (props) => {
  const product = props.product
  const skus = useSelector(state=>state.skus)
  const category = props.categories? props.categories.filter(category => category.id === product.categoryId)[0] : []
  const {pageName} = useParams()
  return(
        <Link to={`/${category&& category.categoryName}/${product.name}`}>
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
              {pageName ? <FormControl size='small'>
                <InputLabel id='skuColor'>Color</InputLabel>
                <Select 
                  labelId='skuColor'
                  id='skuColor'
                  value={color}
                  label='color'
                  onChange={handleChange}
                >
                  {skus.map(sku => (
                    <MenuItem key={sku.id} value={sku.id}>{sku.color}</MenuItem>
                  ))}
                </Select>

              </FormControl> : ''}
            </CardContent>
          </Card>
        </Link> 
  )
}

export default ProductCard