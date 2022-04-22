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
    }
})

