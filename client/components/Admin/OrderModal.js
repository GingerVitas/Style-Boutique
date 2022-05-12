import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  Box,
  Button,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { updateAdminOrder, deleteLineItem } from "../../store/admin";
import LineItemTableRow from "./LineItemTableRow";

const OrderModal = (props) => {
  const { order } = props;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.adminUsers);
  const [state, setState] = useState(order ? order : {});
  const [editState, setEditState] = useState(false);
  const [finalState, setFinalState] = useState(order.final);
  const { createdAt, line_items, user } = state;
  const [lineItemState, setLineItemState] = useState(line_items);
  const [subTotal, setSubTotal] = useState(order.total);

  useEffect(() => {
    setState(order);
    setSubTotal(
      lineItemState.reduce((acc, item) => {
        return acc + item.productPrice * item.quantity;
      }, 0)
    );
  }, [lineItemState]);

  const handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { user, ...updatedOrder } = state;
    dispatch(
      updateAdminOrder({ ...updatedOrder, final: finalState, total: subTotal })
    );
    setEditState(false);
  };

  const handleUserChange = (evt) => {
    evt.preventDefault();
    setState({
      ...state,
      userId: evt.target.value.id,
      user: evt.target.value,
    });
  };

  const handleFinalChange = (evt) => {
    setFinalState(evt.target.checked);
  };

  const handleDelete = (lineItem, _order) => {
    dispatch(deleteLineItem(lineItem, _order));
    setLineItemState(line_items.filter((item) => item.id !== lineItem.id));
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    height: "auto",
    maxHeight: "80vh",
    width: "auto",
    overflow: "scroll",
  };

  return (
    <Box sx={style}>
      <Card>
        <CardHeader
          title={`Order number ${order.id}`}
          subheader={`Created at ${createdAt}`}
        />
        <CardContent>
          <FormControl style={{ display: "flex", flexDirection: "column" }}>
            <InputLabel id="assigned-User-Label">Assigned User</InputLabel>
            <Select
              labelId="assigned-User-Label"
              id="assigned-User"
              name="user"
              value={user}
              label="User"
              onChange={handleUserChange}
              disabled={editState ? false : true}
            >
              <MenuItem name="user" value={user}>
                {user.fullName}
              </MenuItem>
              {users.map((_user) =>
                _user.id !== user.id ? (
                  <MenuItem key={_user.id} name="user" value={_user}>
                    {_user.fullName}
                  </MenuItem>
                ) : (
                  ""
                )
              )}
            </Select>
            {/* <TextField disabled={editState ? false : true} id='outlined-total' name='orderTotal' label='Total Cost' value={orderTotal} onChange={handleTotalChange} /> */}
            <Accordion
              sx={{ maxHeight: "50vh", width: "100%", overflow: "scroll" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-1"
                id="panel-1-header"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography sx={{ flexBasis: "80%", textAlign: "left" }}>
                  Line Items
                </Typography>
                <Button sx={{ flexBasis: "20%" }}>Add Item to Order</Button>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Size</TableCell>
                        <TableCell align="right">Color</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {lineItemState.map((item) => {
                        return (
                          <LineItemTableRow
                            key={item.id}
                            item={item}
                            order={order}
                            lineItemState={lineItemState}
                            setLineItemState={setLineItemState}
                          />
                        );
                      })}
                      <TableRow>
                        <TableCell rowSpan={1} />
                        <TableCell colSpan={3}>Subtotal</TableCell>
                        <TableCell align="right">
                          {formatter.format(subTotal)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <FormControlLabel
              control={
                <Switch
                  checked={finalState}
                  onChange={handleFinalChange}
                  disabled={editState ? false : true}
                />
              }
              label="Order Finalized"
            />
            <div>
              <Button
                onClick={
                  editState
                    ? (ev) => {
                        handleSubmit(ev);
                      }
                    : () => setEditState(true)
                }
              >
                {editState ? "Save All Changes" : "Edit All"}
              </Button>
            </div>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrderModal;
