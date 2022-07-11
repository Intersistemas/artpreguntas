import { Box, Container } from '@mui/system';
import  {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio';
import Pregunta from '../pages/Pregunta';
import Resultado from '../pages/Resultado';
import Mapa from '../mapa/Mapa';
import MainHeader from '../layout/MainHeader'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Menu from '../home/Menu';
import TerminosCondiciones from '../pages/TerminosCondiciones';


const theme = createTheme({
  palette: {
      primary:{
        light: '#83BC00',
        main: '#83BC00',
        dark: 'green',
        contrastText: '#fff',
      },
      secondary: {
        light: '#f8a700',
        main: '#f8a700',
        dark: '#ff8c00',
        contrastText: '#fff',
      },
    },    
});

function App() {  
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <MainHeader />
      <Container maxWidth="lg">
        <Box textAlign={"center"} mt={3} width={"100%"}>        
          <Routes>
            <Route exact path="/" element={<Menu />}/>          
            <Route exact path="/inicio" element={<Inicio />}/> 
            <Route exact path="/pregunta" element={<Pregunta />}/> 
            <Route path="/resultado" element={<Resultado />} />
            <Route path="/Mapa" element={<Mapa />} />
            <Route path="/terminoscondiciones" element={<TerminosCondiciones />} />
          </Routes>
        </Box>
      </Container>   
    </Router>
    </ThemeProvider>
  );
}

export default App;
