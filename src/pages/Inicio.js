import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SelectComp from '../components/inputs/SelectComp'
import { useNavigate } from 'react-router-dom'
import TextFieldComp from '../components/inputs/TextFieldComp'
import style from './Inicio.module.css';
import Typography from '@mui/material/Typography'

const Inicio = () => {
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('pregunta')
    }

    const opcionesDificultad = [
        { id: "basico", name: "Básico" },
        { id: "intermedio", name: "Intermedio" },
        { id: "calificado", name: "Calificado" }
    ]

    const opcionesSexo = [
        { id: "masculino", name: "Masculino" },
        { id: "femenino", name: "Femenino" },
        { id: "nobinario", name: "No Binario" },
    ]

  return (
    <form onSubmit={handleSubmit}>
        <div className={style.text}>
          <Typography variant="h2" fontWeight={"bold"}>ART Trivia</Typography>
          <Typography variant="h6" fontWeight={"bold"}>VEAMOS QUE SABE DE RIESGOS DEL TRABAJO</Typography>
        </div>
        <TextFieldComp label="DNI" />
        <SelectComp options={opcionesSexo} label="Sexo" />
        <TextFieldComp label="Email" />
        <SelectComp options={opcionesDificultad} label="Dificultad" />
        <Box mt={3} width={"100%"}>
            <Button fullWidth variant="contained" type="submit">
                Comenzar
            </Button>
        </Box>
    </form>
  )
}

export default Inicio