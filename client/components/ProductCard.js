import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom';
import {Card, CardActionArea, Button, Modal, Box, FormControl, InputLabel, Select, MenuItem, CardContent, CardMedia, Typography,} from '@mui/material';
import {deleteProduct} from '../store/products'


const ProductCard = (props) => {
  const dispatch = useDispatch();
  const {product, adminView} = props;
  const category = props.categories.filter(category => category.id === product.categoryId)[0];
  // const {productName} = useParams();
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = (_product) => {
    console.log('********HANDLE DELETE**********', _product)
    dispatch(deleteProduct(_product));
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
    margin:'1.5rem',
    padding:'1.5rem'
  }

  // const handleChange = (ev) => {
  //   ev.preventDefault();

  // }
  // (product)=>handleDelete(product)
  // if (!productName) 
    return(
        //  <Link to={`/${category.categoryName}/${product.name}`}>
        <Card sx={{maxWidth:'280', margin:'.5rem'}} style={{height:'100%'}}>
          {adminView ? <Button variant='outlined' sx={{zIndex:'1', float: 'right', margin:'.75rem'}} onClick={handleOpen}>
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
            <Box sx={{display:'flex', flexDirection:'row', margin:'1rem'}}>
            <Button variant='contained' onClick={()=>handleDelete(product)} sx={buttonStyle}>
              Yes, delete {product.name}
            </Button>
            <Button variant='outlined' onClick={handleClose} sx={buttonStyle}>
              No, take me back
            </Button>
            </Box>
          </Box>
        </Modal>
        <CardActionArea component={Link} to={`/${category.categoryName}/${product.name}`}>
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
          </CardActionArea>
        </Card>
        /* </Link> */
  )
  // else return (
  //   <Card sx={{maxWidth:'280', margin:'.5rem'}} style={{height:'100%'}}>
  //       <CardMedia
  //         component='img'
  //         image={product.imageUrl}
  //         height='435'
  //         width='300'
  //       />
  //       <CardContent>
  //         <Typography gutterBottom variant='subtitle1'>
  //           {product.brand}
  //         </Typography>3
  //         <Typography variant='subtitle2'>
  //           {product.name}
  //         </Typography>
  //         <FormControl size='small'>
  //               <InputLabel id='skuColor'>Color</InputLabel>
  //               <Select 
  //                 labelId='skuColor'
  //                 id='skuColor'
  //                 value={skuColor}
  //                 label='color'
  //                 onChange={handleChange}
  //               >
  //                 {skuColors.map(sku => (
  //                   <MenuItem key={sku.id} value={sku.id*1}>{sku.color}</MenuItem>
  //                 ))}
  //               </Select>

  //             </FormControl>
  //       </CardContent>
  //     </Card>
  // )
}

export default ProductCard