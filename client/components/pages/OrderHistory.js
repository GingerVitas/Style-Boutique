import React, {useState, useEffect} from "react";
import { connect } from "react-redux";

import { me } from "../../store/auth"

import { Button, Grid, Typography, Modal, Box } from '@mui/material';
import { DataGrid, GridApi } from '@mui/x-data-grid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  overflow: 'scroll', maxHeight: '80vh', height: '80vh'
};


const OrderHistory = (props) => {
  const { auth, orders, loadInitialData} = props;

  useEffect(() => {
    loadInitialData();
  }, []);

  const [item, setItem] = useState(null);

  // For Grid Data
  const columns = [
    { field: 'id', headerName: 'ID', width: 150},
    {
      field: "action",
      headerName: "Action",
      width: 200,
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          setItem(params);
          console.log('clicked!!', params);
          handleOpen()
        };
        return <Button onClick={onClick}>View Details</Button>;
      }
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 200
    },
    {
      field: 'orderStatus',
      headerName: 'Order Status',
      width: 150
    },
    // { field: 'orderPlaceAt', headerName: 'Order Placed At', width: 200 }
    
  ];

  const rows = orders.map(order => {
    console.log(order.line_items);
    const date = new Date(order.createdAt).toDateString();
    console.log('date', date, typeof date)
    const status = order.final === false? 'Open' : 'Closed';
    return({
      id: order.id.slice(0,8),
      total: order.total,
      orderStatus: status,
      line_items: order.line_items
    })
  })

  console.log(columns, rows);

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setItem(null);
  }
  
  return (
    <div style={{width: '80%', margin: '0 auto'}}>
      <Typography variant='h4' sx={{ fontSize: '1.5rem' }}>Orders</Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{style:{backgroundColor: 'transparent'}}}
        sx={style}
      >
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ margin: '1rem 0' }}
              >
                <Grid item xs={3}></Grid>
                <Grid item xs={2.5}>Name</Grid>
                <Grid item xs={1.5}>Color</Grid>
                <Grid item xs={1.5}>Unit price</Grid>
                <Grid item xs={2}>Quantity</Grid>
                <Grid item xs={1.5}>Total</Grid>
              </Grid>
              <hr/>
              {item?.row.line_items.map(item=>{
                return <div>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={3}>
                      <img src={item.imageUrl} style={{ width: '100%', display: 'block' }} />
                    </Grid>
                    <Grid item xs={2.5}>
                      {item.productName}
                    </Grid>
                    <Grid item xs={1.5}>
                      {item.productColor}
                    </Grid>
                    <Grid item xs={1.5}>
                      ${item.productPrice}
                    </Grid>
                    <Grid item xs={2}>
                      {item.quantity}
                    </Grid>
                    <Grid item xs={1.5}>
                      ${item.total}
                    </Grid>
                  </Grid>
                  <hr/>
                </div>
              })}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

const mapState = (state) => {
  return {
    auth: state.auth,
    orders: state.auth.orders
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default connect(mapState, mapDispatch)(OrderHistory);
