import { Box } from '@mui/system'
import React from 'react'
import SelectComp from '../components/inputs/SelectComp'
import { useNavigate } from 'react-router-dom'
import TextFieldComp from '../components/inputs/TextFieldComp'
import style from './Inicio.module.css';
import Typography from '@mui/material/Typography'
import Dificultad from '../resources/Dificultad.json'
import Sexo from '../resources/Categoria.json'
import Categoria from '../resources/Categoria.json'
import ValidarDatosInicio from '../validations/ValidarDatosInicio'
import { Button } from '@mui/material'

const Inicio = () => {
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('pregunta')          
    }        

    const opcionesDificultad = Dificultad
    const opcionesSexo = Sexo
    const opcionesCategoria = Categoria
    const readyToGo = ValidarDatosInicio()

  return (
    <form onSubmit={handleSubmit}>
        <div className={style.text}>
          <Typography variant="h2" fontWeight={"bold"} color={'gray'}>ART Trivia</Typography>
          <Typography variant="h6" fontWeight={"bold"} color={'gray'}>¿Qué sabemos del Riesgos del Trabajo?</Typography>
        </div>
        <TextFieldComp label="DNI" />
        <TextFieldComp label="Nombre" />
        <SelectComp options={opcionesSexo} label="Sexo" />
        <TextFieldComp label="Email" />
        <SelectComp options={opcionesCategoria} label="Categoria" />
        <SelectComp options={opcionesDificultad} label="Dificultad" />
        <Box mt={3} width={"100%"}>
            <Button fullWidth variant="contained" type="submit" disabled={readyToGo}>
                Comenzar
            </Button>
        </Box>
    </form>
  )
}

export default Inicio