import * as React from 'react';
import {Box, Button, Modal, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, Paper, Checkbox, FormControlLabel, Switch} from '@mui/material';
import AdminTableToolbar from './AdminTableToolbar';
import AdminOrdersTableHeader from './AdminOrdersTableHeader';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function AdminOrdersTable(props) {
  const {orders, display} = props
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState({});
  const handleClose = () => setOpen(false);
  const handleModal = (_order) => {
    setSelectedOrder(_order)  
    setOpen(true);
  };
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

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = orders.map((n) => n);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  


  const handleClick = (event, orderObj) => {
    const selectedIndex = selected.indexOf(orderObj);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, orderObj);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (orderObj) => selected.indexOf(orderObj) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <AdminTableToolbar selected={selected} display={display} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <AdminOrdersTableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={orders.length}
            />
            <TableBody>
              {orders.slice().sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((_order, index) => {
                  const isItemSelected = isSelected(_order);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  _order.total = _order.line_items.reduce((acc,lineItem) => {
                    acc += lineItem.total
                    return acc
                  }, 0)

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={_order.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          onClick={(event) => handleClick(event, _order)}
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <Button onClick={()=>handleModal(_order)} >{_order.id}</Button>
                      </TableCell>
                      <TableCell align="right">{_order.user.fullName}</TableCell>
                      <TableCell align="right">{_order.line_items.reduce((acc, lineItem)=> {
                        acc += lineItem.quantity
                        return acc
                      }, 0)}</TableCell>
                      <TableCell align="right">{_order.createdAt}</TableCell>
                      <TableCell align="right">{formatter.format(_order.total)}</TableCell>
                      <TableCell align="right">{_order.final ? 'Yes' : 'No'}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
            <Modal
              open={open}
              onClose={handleClose}
              >
              <Card sx={style}>
              <Typography variant="h6" component="h2">
                {selectedOrder.id}
              </Typography>
              <Box sx={{display:'flex', flexDirection:'column', margin:'1rem'}}>
                <Typography variant='h6' component='h3'>
                  {`Order ID: ${selectedOrder.id}
                  Line Items:${selectedOrder.line_items ? selectedOrder.line_items.map(item => item.productName) : ''}
                  Created At: ${selectedOrder.createdAt}
                  Order Total: ${selectedOrder.total}
                  Order Finalized: ${selectedOrder.final ? 'Yes' : 'No'}`}
                  {console.log(selectedOrder.line_items)}
                </Typography>
              </Box>
            </Card>
          </Modal>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Condensed View"
      />
    </Box>
  );
}
