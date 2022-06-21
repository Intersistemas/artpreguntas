import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import  {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio';
import Pregunta from './pages/Pregunta';
import Resultado from './pages/Resultado';
function App() {
  return (
    <Router>   
      <Container maxWidth="sm">
        <Box textAlign={"center"} mt={5}>        
          <Routes>
            <Route exact path="/" element={<><Typography variant="h2" fontWeight={"bold"}>ART Trivia</Typography> <Inicio /></>}/>          
            <Route exact path="/pregunta" element={<Pregunta />}/> 
            <Route path="/resultado" element={<Resultado />} />
          </Routes>
        </Box>
      </Container>   
    </Router>
  );
}

export default App;
