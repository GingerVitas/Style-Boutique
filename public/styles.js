import { createTheme } from '@mui/material/styles';
import {blue, red} from '@mui/material/colors'

export const theme = createTheme({
    palette: {
        primary: blue,
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
                    borderRadius: 0
                }
            }
        }
    }, 
    root: {
        display: "flex",
    },
    typography: {
        fontFamily: "Lato, Arial",
        fontSize: 12,
        h1: {
            fontFamily: "Lato, Arial",
            fontSize: 30,
            fontWeight: 700,
        },
        h2: {
            fontFamily: "Lato, Arial",
            fontSize: 20,
            fontWeight: 700,
            paddingBottom: 20,
        },
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#662E9B",
            },
        },
    },
})

