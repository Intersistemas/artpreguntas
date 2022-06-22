import { green } from "@mui/material/colors";
import { createTheme } from '@mui/material/styles';

function themeART () {
  const theme = createTheme({
      palette: {
          primary:{
            light: '#83BC00',
            main: '#83BC00',
            dark: 'green',
            contrastText: '#fff',
        },
          secondary: green,
        },
    });

  return theme;
}



export default themeART;