import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

//redux
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../store/admin'

//mui
import { Grid, Card, CardActionArea, Button, Modal, Box, CardContent, Typography, Rating } from '@mui/material';

const ProductCard = (props) => {
  const { product, adminView, category, setProductArr, productArr } = props;

  //hooks
  const dispatch = useDispatch();

  // For price, since product db doesn't have price info.
  const [price, setPrice] = useState(0);
  const getPrice = async () => {
    const skus = (await axios.get(`/api/skus/${product.name}`)).data
    const price = ((+skus[0].price).toFixed(2))
    setPrice(price)
  }
  useEffect(() => {
    getPrice();
  }, [])

  console.log(productArr)

  // For admin delete modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = (_product) => {
    dispatch(deleteProduct(_product));
    setProductArr(...productArr.filter(__product => __product.id =! product.id))

    setOpen(false)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };

  const buttonStyle = {
    margin: '1.5rem',
    padding: '1.5rem'
  }

  return (
    <Card style={{ height: '525px', width: '100%', marginBottom:'1rem' }}>
      {adminView ? <Button variant='outlined' sx={{ zIndex: '1', float: 'right', margin: '.75rem' }} onClick={handleOpen}>
        Delete Product
      </Button> : ''}
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Are you sure you want to delete {product.name}?
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', margin: '1rem' }}>
            <Button variant='contained' onClick={() => handleDelete(product)} sx={buttonStyle}>
              Yes, delete {product.name}
            </Button>
            <Button variant='outlined' onClick={handleClose} sx={buttonStyle}>
              No, take me back
            </Button>
          </Box>
        </Box>
      </Modal>
      <CardActionArea component={Link} to={`/shop/${category}/${product.name}`} sx={{height: '100%'}}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            <div style={{ width: '100%', height: '330px', justifyContent:'center', display:'flex',  alignItems:'center'}}>
              <img src={product.imageUrl} style={{ height: 'auto', maxHeight:'330px', width:'100%'}} />
            </div>
          </Grid>
          <Grid item xs={4}>
            <CardContent sx={{textAlign:'center'}}>
              <Typography gutterBottom variant='subtitle1'>
                {product.brand}
              </Typography>
              <Typography variant='subtitle2'>
                {product.name}
              </Typography>
              <Typography gutterBottom variant='subtitle1' sx={{ fontSize: '1.5rem' }}>
                ${price}
              </Typography>
                  <Rating
                    name="read-only"
                    readOnly
                    value={Math.floor(Math.random() * 2 + 3)}
                  />
                  <br />
                  ({Math.floor(Math.random() * 350 + 150)})
            </CardContent> 
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard
