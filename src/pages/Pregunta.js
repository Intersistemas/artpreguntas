import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleCambioPuntuacion } from '../redux/actions'
import Preguntas from '../resource/Preguntas.json'

const Pregunta = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { dificultad, puntuacion, categoria } = useSelector(state => state)
  // console.log('puntuacion', puntuacion)
  console.log('dificultad', dificultad)
  console.log('categoria', categoria)

  const [indexPregunta, setIndexPregunta] = useState(0);

  //Filtro preguntas x dificultad
  const preguntas = Preguntas.filter(pregunta => pregunta.dificultad === dificultad).map((pregunta) => {
    return pregunta;
  })

  const handleClick = (e) => {
    const pregunta = preguntas[indexPregunta];
    if(e.target.textContent === pregunta.respuesta) {
      dispatch(handleCambioPuntuacion(puntuacion + 1));
    }

    if(indexPregunta + 1 < preguntas.length) {
      setIndexPregunta(indexPregunta + 1)
    } else {
      navigate('/resultado')
    }
      
  }

  return (
    <Box sx={{
      //display: 'flex',  
      //justifyContent: 'center',
      width: '100%',
      //marginTop: '2%'
    }}>
      <Typography variant="h3">Pregunta {indexPregunta + 1}</Typography>
      <Typography variant="h5" mt={5}>{preguntas[indexPregunta].pregunta}</Typography>
      {preguntas[indexPregunta].opciones.map((opcion) => (
        <Box mt={2} key={opcion}>
          <Button key={opcion} variant="contained" onClick={handleClick}>{opcion}</Button>
        </Box>
      ))}      
      <Box mt={5}>
        <Button>Puntuación: {puntuacion}/{preguntas.length}</Button>
      </Box>
    </Box>
  )
}

export default Pregunta