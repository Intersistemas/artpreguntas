import { Alert, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import SelectComp from '../components/inputs/SelectComp'
import { useNavigate } from 'react-router-dom'
import TextFieldComp from '../components/inputs/TextFieldComp'
import style from './Inicio.module.css';
import Typography from '@mui/material/Typography'
import Dificultad from '../resource/Dificultad.json'
import Sexo from '../resource/Sexo.json'
import Categoria from '../resource/Categoria.json'
import ValidarDatosInicio from '../validations/ValidarDatosInicio'

const Inicio = () => {
    let navigate = useNavigate();

    //manejo estados
    const [error, setError] = useState(null)    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(ValidarDatosInicio() === false)
        {
            setError(true)
        } else
        {
            navigate('pregunta')
        }            
    }        

    const opcionesDificultad = Dificultad
    const opcionesSexo = Sexo
    const opcionesCategoria = Categoria
    
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
            <Button fullWidth variant="contained" type="submit">
                Comenzar
            </Button>
        </Box>
        {error && <Alert severity="error">Debe completar todos los campos</Alert>}
    </form>
  )
}

export default Inicio