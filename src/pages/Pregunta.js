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

  //#region Preguntas
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
  //#endregion

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

  //#region contenido
  let content = null
  if(tipoJuego === 'Trivia')
  {
    content = <Box sx={{
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {preguntas[indexPregunta].opciones.map((opcion, index) => (
        //console.log('index', index)
        <Box mt={2} key={index}>
          <Button id={index+1} key={index} variant="contained" onClick={handleClick}>{opcion}</Button>
        </Box>
      ))}
    </Box> 
  }

  if(tipoJuego === 'TriviaKids')
  {
    content = <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 2
    }}>
      <div>
        <Imagen imagen={`Kids${indexPregunta + 1}`} />
      </div>
      <Box sx={{
        display: 'inline-grid',
        marginLeft: 3
      }}>
        <Box sx={{
          marginBottom: 2,
          height: 100,
          width: 200
        }}>
          <Button sx={{height: "100%"}}
            id={1} 
            size="large" 
            variant="contained" 
            fullWidth 
            onClick={handleClick}>Verdadero
          </Button>
        </Box>
        <Box sx={{
          marginTop: 2,
          height: 100,
          width: 200
        }}>
          <Button sx={{height: "100%"}}
            id={2} size="large" 
            variant="contained" 
            fullWidth 
            color={"secondary"}
            onClick={handleClick}>Falso
          </Button>
        </Box>
        
      </Box>
    </Box>
  }

  return (
    <Box sx={{
      width: '100%',
    }}>
      <Typography variant="h3">Pregunta {indexPregunta + 1}</Typography>
      <Typography variant="h5" mt={2}>{preguntas[indexPregunta].pregunta}</Typography>  
      {content}
      <Box mt={1}>
        <Button>Puntuación: {puntuacion}/{preguntas.length}</Button>
      </Box>      
    </Box>
  )
}

export default Pregunta