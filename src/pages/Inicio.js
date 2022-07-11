import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import SelectComp from '../components/inputs/SelectComp'
import { useNavigate } from 'react-router-dom'
//import TextFieldComp from '../components/inputs/TextFieldComp'
//import Dificultad from '../resources/Dificultad.json'
//import Sexo from '../resources/Sexo.json'
import Categoria from '../resources/Categoria.json'
import ValidarDatosInicio from '../validations/ValidarDatosInicio'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import EnviarCorreo from '../email/EnviarCorreo'
import { handleLimpiarDatos } from '../redux/actions'
import KeyboardComp from '../components/inputs/KeyboardComp'
import CheckBoxComp from '../components/inputs/CheckBoxComp'

const Inicio = () => {
    const { nombre, categoria, email, tipoJuego, terminosCondiciones } = useSelector(state => state)
    const dispatch = useDispatch();
    const keyboardRef = useRef(null);
        
    const [toSend, setToSend] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {   
        setToSend({
            from_name: 'ART Mutual Rural Trivia',
            to_name: 'Comercial',
            message: 'Se registró un nuevo jugador',
            reply_to: '',
            nombre: nombre,
            actividad: categoria,
            email: email
         })
    }, [nombre, categoria, email])    
    
    const handleSubmit = (e) => {        
        console.log('toSend', toSend)
        e.preventDefault();

        if(email !== "")
        {
            EnviarCorreo(toSend)
        }        

        navigate('/pregunta')          
    }       
    
    const handleVolverMenu = () => {
      dispatch(handleLimpiarDatos())
      navigate('/') 
    }

    //const opcionesDificultad = Dificultad
    //const opcionesSexo = Sexo
    const opcionesCategoria = Categoria
    const readyToGo = ValidarDatosInicio(tipoJuego)

    //Campos
    //console.log('tipoJuego', tipoJuego)
    let content = null
    if(tipoJuego === 'Trivia')
    {
        content = <>
            <KeyboardComp
                keyboardRef={keyboardRef}
                inputNames={["Nombre", "Email"]}
            />
            <SelectComp options={opcionesCategoria} label="Actividad" />            
        </>        
    }

    if(tipoJuego === 'TriviaKids')
    {
        content = <>
            <KeyboardComp
                keyboardRef={keyboardRef}
                inputNames={["Nombre"]}
            />
        </>        
    }
    
  return (
    <Box sx={{
        //display: 'flex',  
        justifyContent: 'center',
        width: '50%',
        //marginTop: '2%'
        marginLeft: 30
      }}>
        <form onSubmit={handleSubmit}>     
            {content}
            <CheckBoxComp />            
            <Box mt={3} width={"100%"}>
                <Button fullWidth variant="contained" type="submit" disabled={!readyToGo}>
                    Comenzar
                </Button>            
            </Box>        
            <Box mt={1.5} width={"100%"}>            
                <Button fullWidth variant="contained" onClick={handleVolverMenu}>
                    Volver al Menu
                </Button>
            </Box>
        </form>
    </Box>
  )
}

export default Inicio