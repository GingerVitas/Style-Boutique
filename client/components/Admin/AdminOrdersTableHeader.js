import React from 'react';
import {Box, TableHead, TableRow, Checkbox, TableCell, TableSortLabel} from '@mui/material';
import {visuallyHidden} from '@mui/utils'

const headCells = [
  {
    id: 'id',
    disablePadding: true,
    label: `Order ID`,
  },
  {
    id: 'name',
    disablePadding: false,
    label: `Customer Name`,
  },
  {
    id: 'lineItems',
    disablePadding: false,
    label: 'Number of items in order',
  },
  {
    id: 'created',
    disablePadding: false,
    label: 'Date Order Created',
  },
  {
    id: 'total',
    disablePadding: false,
    label: 'Order Total',
  },
  {
    id: 'final',
    disablePadding: false,
    label: 'Order Completed',
  },
];

const AdminOrdersTableHeader = (props) => {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all products',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id === 'id' ? 'left' : 'right'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default AdminOrdersTableHeader