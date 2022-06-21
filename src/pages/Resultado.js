import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { handleCambioPuntuacion, handleCambioDNI, handleCambioDificultad, handleCambioEmail, handleCambioSexo } from '../redux/actions'
import { useNavigate } from 'react-router-dom'

const Resultado = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(handleCambioDNI(''))
    dispatch(handleCambioDificultad(''))
    dispatch(handleCambioEmail(''))
    dispatch(handleCambioSexo(''))
    dispatch(handleCambioPuntuacion(0))

    navigate("/")
  }

  const { puntuacion } = useSelector(state => state)
  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight={"bold"} >Respuestas correctas: {puntuacion}</Typography>
      <Button onClick={handleClick} variant="outlined">Volver al inicio</Button>
    </Box>
  )
}

export default Resultado