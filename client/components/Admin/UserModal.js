import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Card, CardHeader, Box, Button, Modal, CardContent, Typography, TextField, Accordion, AccordionSummary, AccordionDetails, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { adminUpdateUser } from '../../store/admin';

const UserModal = props => {
  const {user} = props;
  const dispatch = useDispatch();
  const [state, setState] = useState(user ? user : {})
  const [editState, setEditState] = useState(false)
  const {firstName, lastName, email} = state

  const handleChange = (evt) => {
    setState({
      ...state, [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = (evt)  => {
    evt.preventDefault();
    const {orders, addresses, ...updatedUser} = state;
    console.log('********HANDLE SUBMIT********', updatedUser)
    dispatch(adminUpdateUser(updatedUser));
    setEditState(false)
  }

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
        <CardHeader title={user.fullName} subheader={`Last Updated at ${user.updatedAt}`}/>
        <CardContent >
          <form style={{display: 'flex', flexDirection: 'column' }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <TextField disabled={editState ? false : true} id='outlined-firstName' name='firstName' value={firstName} onChange={handleChange} sx={{flexBasis:'90%'}}/>
              {/* <Button>{editState ? 'Save Changes' : 'Edit'}</Button> */}
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <TextField disabled={editState ? false : true} id='outlined-lastName' name='lastName' value={lastName} onChange={handleChange} sx={{flexBasis:'90%'}}/>
              {/* <Button>{editState ? 'Save Changes' : 'Edit'}</Button> */}
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <TextField disabled={editState ? false : true} id='outlined-email' name='email' value={email} onChange={handleChange} sx={{flexBasis:'90%'}}/>
              {/* <Button>{editState ? 'Save Changes' : 'Edit'}</Button> */}
            </div>
            <div>
              <Button onClick={editState ? (ev)=>{handleSubmit(ev)} : () => setEditState(true)}>{editState ? 'Save All Changes' : 'Edit All'}</Button>
            </div>
          </form>

          <Accordion>
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
          </Accordion>
        </CardContent> 
      </Card>
    </Box>

  )
}

export default UserModal