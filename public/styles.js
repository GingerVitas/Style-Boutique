import { createTheme } from '@mui/material/styles';

import { Badge } from "@mui/material";
import { styled} from "@mui/material/styles";

export const theme = createTheme({
    typography: {
        logo: {
            fontSize: '30px',
            fontFamily: 'Radio Canada, sans- serif',
            color: 'black'
        },
        menuitem: {
            fontSize: '15px',
            color: 'black',
            fontWeight: '500'
        }
    },
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
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    " .MuiAlert-message": {
                        padding: "18px 0"
                    }
                }
            }
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

