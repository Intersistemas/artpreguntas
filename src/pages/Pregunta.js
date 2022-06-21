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

  const preguntas = [
    { 
      id: 1, 
      pregunta: "CUANTOS AÑOS HACE QUE ESTA EL ACTUAL SISTEMA DE RIESGOS DE TRABAJO EN ARGENTINA?", 
      opciones: ["50 años","25 años","15 años"], 
      respuesta: "50 años" 
    },
    { 
      id: 2, 
      pregunta: "EL SISTEMA DE RIESGOS DE TRABAJO CUBRE LOS SINIESTROS QUE SUFREN:", 
      opciones: ["Los trabajadores titulares solamente en relación de dependencia","Los trabajadores y también a su grupo familiar","Los empleadores y los trabajadores"], 
      respuesta: "Los trabajadores titulares solamente en relación de dependencia" 
    },
    { 
      id: 3, pregunta: "CUAL ES LA ACTIVIDAD QUE REGISTRA LOS MAYORES RIESGOS LABORALES?", 
      opciones: ["Actividad Rural","Actividad Construcción","Actividad Turismo"], 
      respuesta: "Actividad Rural" 
    },
    { 
      id: 4, 
      pregunta: "CUAL ES LA CORRECTA DEFINICION DE A.R.T.?", 
      opciones: ["Asociacion de Riesgos del Trabajo","Aseguradora de Riesgos del Trabajo","Administradora de Riesgos del Trabajo"], 
      respuesta: "Aseguradora de Riesgos del Trabajo" 
    },
    { 
      id: 5, 
      pregunta: "QUE ENTIDADES PUEDEN SER A.R.T.?", 
      opciones: ["Solo empresas Comerciales (SA, SRL, ETC)","Solo entidades Mutuales (Sin fines de lucro)","Empresas Comerciales y Entidades Mutuales"], 
      respuesta: "Solo empresas Comerciales (SA, SRL, ETC)" 
    },
    { 
      id: 6, 
      pregunta: "QUIEN PAGA EL COSTO DEL SEGURO DE RIESGO LABORAL A LA ART?", 
      opciones: ["El empleador","El trabajador","El empleador y el trabajador juntos"], 
      respuesta: "El empleador" 
    },
    { 
      id: 7, 
      pregunta: "TODAS LAS EMPRESAS PAGAN LO MISMO?", 
      opciones: ["SI pagan lo mismo por una Alicuota Fija que marca la Ley","NO Pagan conforme sus años en la misma actividad","NO pagan conforme su real riesgo y antecedentes"], 
      respuesta: "NO pagan conforme su real riesgo y antecedentes" 
    },
    // { id: 8, pregunta: "", respuesta: "" },
    // { id: 9, pregunta: "", respuesta: "" },
    // { id: 10, pregunta: "", respuesta: "" },
  ]

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
    <Box>
      <Typography variant="h4">Pregunta {indexPregunta + 1}</Typography>
      <Typography mt={5}>{preguntas[indexPregunta].pregunta}</Typography>
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