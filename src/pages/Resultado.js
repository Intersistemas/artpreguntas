import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LimpiarDatos from '../helpers/LimpiarDatos'

const Resultado = () => {  
  const navigate = useNavigate();

  const handleClick = () => {
    LimpiarDatos()
    navigate("/")
  }

  const { puntuacion } = useSelector(state => state)
  return (
    <Box sx={{
      display: 'flex-start',  
      justifyContent: 'center',
      width: '100%',
      marginTop: '2%'
    }}>
      <Typography variant="h5" fontWeight={"bold"} color={'gray'}>Felicidades! Has finalizado la trivia con {puntuacion} respuestas correctas!</Typography>
      <Button onClick={handleClick} variant="outlined">Volver al inicio</Button>
    </Box>
  )
}

export default Resultado