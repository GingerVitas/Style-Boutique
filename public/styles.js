import { createTheme } from '@mui/material/styles';
import {blue, red} from '@mui/material/colors'

import { Badge } from "@mui/material";
import { styled} from "@mui/material/styles";

const font = "'Lato', Arial"

export const theme = createTheme({
    palette: {
        black: {
            light:'#484848',
            main: '#000000',
            dark: '#212121',
            contrastText:'#ffffff'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    height: '40px'
                }
            }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    width:200,
                    fontSize: '1rem',
                    color: '#444444',
                    fontWeight: '500',
                    textTransform: 'capitalize'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    margin: '10px 0px'
                }
            }
        }
    }, 
    root: {
        display: "flex",
    },
    typography: {
        fontFamily: font,
        fontSize: 12,
        h1: {
            fontFamily: font,
            fontSize: 30,
            fontWeight: 700,
        },
        h2: {
            fontFamily: font,
            fontSize: 20,
            fontWeight: 500,
            paddingBottom: 20,
        }
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#662E9B",
            },
        },
    },
});


export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

