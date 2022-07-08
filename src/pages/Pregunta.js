import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleCambioPuntuacion } from '../redux/actions'
import Preguntas from '../resources/Preguntas.json'
import PreguntasKids from '../resources/PreguntasKids.json'
import Imagen from '../components/Imagen'


const Pregunta = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { puntuacion, tipoJuego } = useSelector(state => state)
  const [indexPregunta, setIndexPregunta] = useState(0);

  let preguntas = [];
  if (tipoJuego === 'Trivia') {
    preguntas = Preguntas.map((pregunta) => {
      return pregunta;
    })
  }
  
  if (tipoJuego === 'TriviaKids') {
    preguntas = PreguntasKids.map((pregunta) => {
      return pregunta;
    })
  }

  const handleClick = (e) => {
    console.log('Button resp', e.target.id)
    const pregunta = preguntas[indexPregunta];
    console.log('pregunta', pregunta)
    if(+e.target.id === pregunta.respuestaCorrecta) {
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
      <Imagen 
        imagen={`Kids${indexPregunta + 1}`}         
      />
      {preguntas[indexPregunta].opciones.map((opcion, index) => (
        //console.log('index', index)
        <Box mt={2} key={index}>
          <Button id={index+1} key={index} variant="contained" onClick={handleClick}>{opcion}</Button>
        </Box>
      ))}      
      <Box mt={5}>
        <Button>Puntuación: {puntuacion}/{preguntas.length}</Button>
      </Box>      
    </Box>
  )
}

export default Pregunta