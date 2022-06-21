import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Combo from '../components/Combo'
import { useNavigate } from 'react-router-dom'
import TextFieldComp from '../components/TextFieldComp'

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
        <TextFieldComp label="DNI" />
        <Combo options={opcionesSexo} label="Sexo" />
        <TextFieldComp label="Email" />
        <Combo options={opcionesDificultad} label="Dificultad" />
        <Box mt={3} width={"100%"}>
            <Button fullWidth variant="contained" type="submit">
                Comenzar
            </Button>
        </Box>
    </form>
  )
}

export default Inicio