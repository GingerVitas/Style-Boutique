import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@mui/material';

const TitleCard = ({product}) => {

  return (
    <Card sx={{marginBottom:'2rem'}}>
      <CardActionArea component={Link} to={`/shop/${product.category}`}>
        <CardContent sx={{width:'100%', }}>
          <Typography gutterBottom variant='h4' sx={{fontFamily:'Cardo'}}>{product.categoryName}</Typography>
        </CardContent>
        <CardMedia component='img' sx={{height:'530px'}} image={product.imageUrl} />
      </CardActionArea>
    </Card>
  )
}

export default TitleCard