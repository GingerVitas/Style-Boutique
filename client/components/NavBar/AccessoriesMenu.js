import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, MenuItem, Typography } from "@mui/material";

const AccessoriesMenu = () => {
    return (
        <Toolbar sx={{ ["@media(min-width: 600px)"]: { minHeight: 10 } }}>
            <MenuItem component={Link} to={'/shop/belts'} >
                <Typography variant="menuitem">Belts</Typography>
            </MenuItem>
            <MenuItem component={Link} to={'/shop/accessories'} >
                <Typography variant="menuitem">Accessories</Typography>
            </MenuItem>
        </Toolbar>
    );
};

export default AccessoriesMenu;
