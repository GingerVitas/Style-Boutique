import React from 'react';
import {Box, TableHead, TableRow, Checkbox, TableCell, TableSortLabel} from '@mui/material';
import {visuallyHidden} from '@mui/utils'

const headCells = [
  {
    id: 'fullName',
    disablePadding: true,
    label: `User's Full Name`,
  },
  {
    id: 'email',
    disablePadding: false,
    label: `User's email address`,
  },
  {
    id: 'orders',
    disablePadding: false,
    label: 'Number of Orders',
  },
  {
    id: 'createdAt',
    disablePadding: false,
    label: 'Date Account Created',
  },
  {
    id: 'updatedAt',
    disablePadding: false,
    label: 'Date Account Updated',
  },
];

const AdminUserTableHeader = (props) => {
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
              'aria-label': 'select all users',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id === 'fullName' ? 'left' : 'right'}
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

export default AdminUserTableHeader