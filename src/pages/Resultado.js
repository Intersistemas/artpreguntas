import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleLimpiarDatos } from '../redux/actions'
import Imagen from '../components/Imagen'

const Resultado = () => {  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tipoJuego, puntuacion, nombre } = useSelector(state => state)

  const handleClick = () => {
    dispatch(handleLimpiarDatos())
    navigate("/")
  }

  const mensajeFinal = () => {
    // console.log('tipoJuego', tipoJuego)
    // console.log('puntuacion', puntuacion)
    if(tipoJuego === 'Trivia')
    {
      if(puntuacion === 7)
      {
        return  `Felicidades, ${nombre}! Sos un experto en ART! Reclamá tu premio!`
      } else {
        return `¡${nombre}, estuviste muy cerca! ¡Queremos premiarte e invitarte a que nos acompañes en nuestras redes sociales!`
      }
    }

    if(tipoJuego === 'TriviaKids')
    {
      if(puntuacion === 10)
      {
        return `¡Felicitaciones ${nombre}, ganaste!`
      } else {
        return `¡${nombre}, estuviste cerca! ¡Casi casi... pss tenemos un premio para vos!!!!`
      }
    }
  }

  return (
    <Box sx={{
      //display: 'flex-start',  
      //justifyContent: 'center',
      width: '100%',
      marginTop: 1
    }}>
      <Typography variant="h4" fontWeight={"bold"} color={'gray'}>{mensajeFinal()}</Typography>
      <Imagen imagen={`Resultado`} />
      <Box mt={1}>
        <Button onClick={handleClick} variant="contained" >Volver al Menu</Button>
      </Box>        
    </Box>
  )
}

export default Resultado