import React from "react";
import { useSelector } from "react-redux";
import {Box, Typography, Grid} from '@mui/material'
import TitleCard from "../TitleCard";

const Home = () => {
  const { firstName } = useSelector(state=>state.auth);
  const products = [
    {
    category: 'jeans',
    categoryName: 'Jeans',
    imageUrl: "https://n.nordstrommedia.com/id/sr3/8d97cd17-1c70-4b17-ab4b-113ff63efb6b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    category: "dress",
    categoryName: 'Dresses',
    imageUrl: "https://n.nordstrommedia.com/id/sr3/d7e42901-ebc8-4e2b-bb43-13a10b1c3b07.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    category: 'shoes',
    categoryName: 'Shoes',
    imageUrl: 'https://n.nordstrommedia.com/id/sr3/133be703-7505-407d-bd7f-31848829ac35.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'
  },
  {
    category: 'top',
    categoryName: 'Tops',
    imageUrl: "https://n.nordstrommedia.com/id/sr3/9a863235-3567-44a3-bd2d-d2dca246f410.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
  },
  {
    category: 'pants',
    categoryName: 'Pants',
    imageUrl: "https://n.nordstrommedia.com/id/sr3/b8bff750-fe5c-47c5-8c6c-0eb83b40948b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
  },
  {
    category: 'leggings',
    categoryName: 'Leggings',
    imageUrl: "https://n.nordstrommedia.com/id/sr3/36c12acf-4eba-42db-8b9f-a8db84f9067b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
  },
  {
    category: 'skirt',
    categoryName: 'Skirts',
    imageUrl: "https://n.nordstrommedia.com/id/sr3/36809f9c-aed7-4aaf-a232-f4951d46fe72.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
  },
  {
    category: 'sweater',
    categoryName: 'Sweaters',
    imageUrl: "https://n.nordstrommedia.com/id/sr3/3186cfe3-4301-4886-9300-a539206e1dc1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
  },
  {
    category: 'belts',
    categoryName: 'Belts',
    imageUrl: "https://n.nordstrommedia.com/id/sr3/96109785-c961-4d29-9e8c-6dbc43f7b95d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
  },
  {
    category: 'accessories',
    categoryName: 'Accessories',
    imageUrl: "https://n.nordstrommedia.com/id/sr3/9b935e3d-c608-4e0f-8fa4-604e7211e901.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
  }
  ];

  return (
    <div>
      <Box sx={{display:'flex', textAlign:'center', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundImage:'url(https://cdn.builder.io/api/v1/image/assets%2FbqNZC3dTGjwbxXySE419%2F90b637f86e6a4f41b800905192f3dc02?width=2000)', minHeight:'500px', backgroundSize:'cover', zIndex:'-1'}}>
        <Box sx={{marginBottom:'60px'}}>
          <Typography variant='h2' sx={{marginBottom:'1rem', alignSelf:'flext-start'}}>Welcome to</Typography>
          <Typography sx={{fontFamily:'Cardo'}} variant='h1'>STYLE BOUTIQUE</Typography>
          <Typography variant='h3' sx={{fontStyle:'italic', fontFamily:'Cardo'}} >Get Inspired</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant='h3' sx={{fontFamily:'Cardo', marginLeft:'14vw'}}>{firstName ? `${firstName}, shop the latest styles now!` : 'Shop the latest styles now!'}</Typography>
      </Box>
      <Box>
        <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            columnSpacing={8}
            sx={{width: '80%', margin: '0 auto', textAlign: 'center'}}
            >
            {products.map((product) => {
              return <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}><TitleCard product={product} /></Grid>;
            })}
          </Grid>
      </Box>
    </div>
  )
};

export default (Home);
