import React from 'react';
import {useDispatch} from 'react-redux';
import { alpha } from '@mui/material/styles';
import {Toolbar, Typography, IconButton, Tooltip} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import {deleteUser, deleteProduct, deleteOrder} from '../../store/admin';

const AdminTableToolbar = (props) => {
  const { selected, display } = props;
  const dispatch = useDispatch();
  
  const handleDelete = (selectedArray) => {
    if (display === 'users') {selectedArray.forEach((user) => dispatch(deleteUser(user)))}
    else if (display === 'inventory') {selectedArray.forEach((product) => dispatch(deleteProduct(product)))}
    else selectedArray.forEach((order) => dispatch(deleteOrder(order)));
  }

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(selected.length > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {selected.length > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {selected.length} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {display === 'users' ? 'Users' : display === 'inventory' ? 'Products' : 'Orders'}
        </Typography>
      )}

      {selected.length > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={()=>handleDelete(selected)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default AdminTableToolbar