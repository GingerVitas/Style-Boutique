import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card, CardHeader, Box, Button, Modal, CardContent, Typography, TextField, Accordion, AccordionSummary, AccordionDetails, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { updateAdminOrder } from '../../store/admin';

const OrderModal = props => {
  const {order} = props;
  const dispatch = useDispatch();
  const users = useSelector(state=>state.adminUsers);
  const [state, setState] = useState(order ? order : {});
  const [editState, setEditState] = useState(false);
  const [finalState, setFinalState] = useState(order.final);
  const {createdAt, total, final, line_items, user} = state;

  const handleChange = (evt) => {
    setState({
      ...state, [evt.target.name]: evt.target.value
    })
  };

  const handleSubmit = (evt)  => {
    evt.preventDefault();
    const {user, ...updatedOrder} = state;
    console.log('*****IN HANDLE SUBMIT*******', finalState)
    dispatch(updateAdminOrder({...updatedOrder, final:finalState}));
    setEditState(false)
  };

  const handleUserChange = evt => {
    evt.preventDefault();
    console.log('******ORDER IN USER CHANGE*******', order, 'EVENT TARGET', evt.target, 'STATE', state)
    setState({
        ...state,
        userId: evt.target.value.id,
        user: evt.target.value
    })
    console.log('******ORDER IN USER CHANGE AFTER SETSTATE*******', order, 'EVENT TARGET', evt.target, 'STATE', state)  };

  const handleFinalChange = evt => {
    setFinalState(evt.target.checked);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    height: 'auto',
    width: 'auto'
  };

  return (
    <Box sx={style}>
      <Card>
        <CardHeader title={`Order number ${order.id}`} subheader={`Created at ${createdAt}`}/>
        <CardContent >
          <FormControl style={{display: 'flex', flexDirection: 'column' }}>
            <InputLabel id='assigned-User-Label'>Assigned User</InputLabel>
            <Select 
            labelId='assigned-User-Label' 
            id='assigned-User'
            name='user' 
            value={user} 
            label='User'
            onChange={handleUserChange}
            disabled={editState ? false : true}
            >
              <MenuItem name='user' value={user}>{user.fullName}</MenuItem>
              {users.map(_user=>( 
                _user.id !== user.id ?
                <MenuItem key={_user.id} name='user' value={_user}>{_user.fullName}</MenuItem>
                :''
              ))}
            </Select>
              {/* <TextField disabled={editState ? false : true} id='outlined-items' name='line_items' label='Items in Order' value={line_items} onChange={handleChange} /> */}
              <TextField disabled={editState ? false : true} id='outlined-total' name='total' label='Total Cost' value={total} onChange={handleChange} />
              <FormControlLabel
                control={<Switch checked={finalState} onChange={handleFinalChange} />}
                label="Order Finalized"
              />
              {/* <TextField disabled={editState ? false : true} id='outlined-final' name='final' label='Order Finalized' value={final ? 'True' : 'False'} onChange={handleChange} /> */}
            <div>
              <Button onClick={editState ? (ev)=>{handleSubmit(ev)} : () => setEditState(true)}>{editState ? 'Save All Changes' : 'Edit All'}</Button>
            </div>
          </FormControl>

          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography>User Orders</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Order ID</TableCell>
                      <TableCell align='right'>Items in Order</TableCell>
                      <TableCell align='right'>Total Cost</TableCell>
                      <TableCell align='right'>Created At</TableCell>
                      <TableCell align='right'>Order Finalized?</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.orders.length ? user.orders.map(order => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell align='right'>{order.line_items.reduce((acc,item)=>{
                          acc+=item.quantity
                          return acc
                          },0)}</TableCell>
                          <TableCell align='right'>${order.total}</TableCell>
                          <TableCell align='right'>{order.createdAt}</TableCell>
                          <TableCell align='right'>{order.final ? 'Yes' : 'No'}</TableCell>
                      </TableRow>
                    )): <TableRow>
                      <TableCell>No Orders On Account</TableCell>
                    </TableRow>}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>  
          </Accordion> */}
        </CardContent> 
      </Card>
    </Box>

  );
};

export default OrderModal