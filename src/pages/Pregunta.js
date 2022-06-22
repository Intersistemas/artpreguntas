import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleCambioPuntuacion } from '../redux/actions'

const Pregunta = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    dificultad,
    puntuacion
  } = useSelector(state => state)
  // console.log('puntuacion', puntuacion)
  // console.log('dificultad', dificultad)

  const [indexPregunta, setIndexPregunta] = useState(0);

  //#region Preguntas
  const preguntas = [
    { 
      id: 1, 
      pregunta: "¿Cuántos años hace que está el actual sistema de riesgos de trabajo en Argentina?", 
      opciones: ["50 años","25 años","15 años"], 
      respuesta: "50 años" 
    },
    { 
      id: 2, 
      pregunta: "El sistema de riesgos de trabajo cubre los siniestros que sufren:", 
      opciones: ["Los trabajadores titulares solamente en relación de dependencia","Los trabajadores y también a su grupo familiar","Los empleadores y los trabajadores"], 
      respuesta: "Los trabajadores titulares solamente en relación de dependencia" 
    },
    { 
      id: 3, 
      pregunta: "¿Cuál es la actividad que registra los mayores riesgos laborales?", 
      opciones: ["Actividad rural","Actividad construcción","Actividad turismo"], 
      respuesta: "Actividad rural" 
    },
    { 
      id: 4, 
      pregunta: "¿Cuál es la correcta definición de A.R.T.?", 
      opciones: ["Asociación de riesgos del trabajo","Aseguradora de riesgos del trabajo","Administradora de riesgos del trabajo"], 
      respuesta: "Aseguradora de riesgos del trabajo" 
    },
    { 
      id: 5, 
      pregunta: "¿Qué entidades pueden ser A.R.T.?", 
      opciones: ["Solo empresas comerciales (SA, SRL, etc)","Solo entidades mutuales (sin fines de lucro)","Empresas comerciales y entidades mutuales"], 
      respuesta: "Solo empresas comerciales (SA, SRL, etc)" 
    },
    { 
      id: 6, 
      pregunta: "¿Quién paga el costo del seguro de riesgo laboral a la A.R.T.?", 
      opciones: ["El empleador","El trabajador","El empleador y el trabajador juntos"], 
      respuesta: "El empleador" 
    },
    { 
      id: 7, 
      pregunta: "¿Todas las empresas pagan lo mismo?", 
      opciones: ["Sí, pagan lo mismo por una alícuota fija que marca la ley","No, pagan conforme sus años en la misma actividad","No, pagan conforme su real riesgo y antecedentes"], 
      respuesta: "No, pagan conforme su real riesgo y antecedentes" 
    },
    // { id: 8, pregunta: "", respuesta: "" },
    // { id: 9, pregunta: "", respuesta: "" },
    // { id: 10, pregunta: "", respuesta: "" },
  ]
  //#endregion

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