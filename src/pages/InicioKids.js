import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import TextFieldComp from '../components/inputs/TextFieldComp'
import ValidarDatosInicio from '../validations/ValidarDatosInicio'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { handleLimpiarDatos, handleCambioTipoJuego } from '../redux/actions'

const InicioKids = () => {
    
    const dispatch = useDispatch();
    let navigate = useNavigate();      
    
    const handleSubmit = (e) => {        
        //console.log('toSend', toSend)
        e.preventDefault();
        //EnviarCorreo(toSend)
        
        navigate('/pregunta')          
    }        

    const handleVolverMenu = () => {
      dispatch(handleLimpiarDatos('TriviaKids'))
      navigate('/') 
    }

    const readyToGo = ValidarDatosInicio('TriviaKids')
    
  return (
    <Box sx={{
      //display: 'flex',  
      justifyContent: 'center',
      width: '50%',
      //marginTop: '2%'
      marginLeft: 30
    }}>
    <form onSubmit={handleSubmit}>
        <TextFieldComp label="Nombre" />                
        <Box mt={3} width={"100%"}>
            <Button fullWidth variant="contained" type="submit" disabled={readyToGo}>
                Comenzar
            </Button>            
        </Box>
        <Box mt={1.5} width={"100%"}>            
            <Button fullWidth variant="contained" onClick={handleVolverMenu}>
                Volver al Menú
            </Button>
        </Box>
    </form>
    </Box>
  )
}

export default InicioKids