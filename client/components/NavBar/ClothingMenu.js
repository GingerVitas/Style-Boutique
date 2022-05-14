import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, MenuItem, Typography } from "@mui/material";


const ClothingMenu = (props) => {
    const {closeClothingMenu} = props;

    return (
        <Toolbar sx={{ ["@media(min-width: 600px)"]: { minHeight: 10 } }}>
            <MenuItem onClick={closeClothingMenu} component={Link} to={'/shop/dress'} >
                <Typography variant="menuitem">Dresses</Typography>
            </MenuItem>
            <MenuItem onClick={closeClothingMenu} component={Link} to={'/shop/top'}  >
                <Typography variant="menuitem">Tops</Typography>
            </MenuItem>
            <MenuItem onClick={closeClothingMenu} component={Link} to={'/shop/sweater'} >
                <Typography variant="menuitem">Sweaters</Typography>
            </MenuItem>
            <MenuItem onClick={closeClothingMenu} component={Link} to={'/shop/skirt'} >
                <Typography variant="menuitem">Skirts</Typography>
            </MenuItem>
            <MenuItem onClick={closeClothingMenu} component={Link} to={'/shop/jeans'} >
                <Typography variant="menuitem">Jeans</Typography>
            </MenuItem>
            <MenuItem onClick={closeClothingMenu} component={Link} to={'/shop/leggings'} >
                <Typography variant="menuitem">Leggings</Typography>
            </MenuItem>
            <MenuItem onClick={closeClothingMenu} component={Link} to={'/shop/pants'} >
                <Typography variant="menuitem">Trousers</Typography>
            </MenuItem>
        </Toolbar>
    );
};

export default ClothingMenu;
