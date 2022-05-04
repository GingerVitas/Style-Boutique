import React from 'react';
import {Box, TableHead, TableRow, Checkbox, TableCell, TableSortLabel} from '@mui/material';
import {visuallyHidden} from '@mui/utils'

const headCells = [
  {
    id: 'name',
    disablePadding: true,
    label: `Product Name`,
  },
  {
    id: 'brand',
    disablePadding: false,
    label: `Brand`,
  },
  {
    id: 'productColors',
    disablePadding: false,
    label: 'Number of Color Variants',
  },
  {
    id: 'createdAt',
    disablePadding: false,
    label: 'Added to Inventory',
  },
  {
    id: 'updatedAt',
    disablePadding: false,
    label: 'Last Updated',
  },
];

const AdminInventoryTableHeader = (props) => {
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
            align={headCell.id === 'name' ? 'left' : 'right'}
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

export default AdminInventoryTableHeader