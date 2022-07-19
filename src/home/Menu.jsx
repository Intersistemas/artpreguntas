import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CheckBoxComp from '../components/inputs/CheckBoxComp'
import { handleCambioTipoJuego, handleLimpiarDatos } from '../redux/actions'
import styles from './Menu.module.css'
//import { useSelector, useDispatch } from 'react-redux'

const Menu = () => {  
  // const { nombre, dni, sexo, categoria, email } = useSelector(state => state)
  // console.log("categoria", categoria)
  // console.log("nombre", nombre)
  const dispatch = useDispatch();
  let activeStyle = {
    textDecoration: "underline",
  };

  const handleSeleccion = (e) => {
    //console.log('e.target.id', e.target.id)
    dispatch(handleCambioTipoJuego(e.target.id))
  }

  //siempre al renderizar limpio el store
  useEffect(() => {   
    dispatch(handleLimpiarDatos())
  }, [dispatch]) 

  return (
    <Box sx={{
      textAlign: "center",
    }}>
      <Typography variant="h3" gutterBottom component="div">¡Bienvenido a los juegos de la ART Mutual Rural!</Typography>
      <Typography variant="h5" gutterBottom component="div">¿Estás listo? Comencemos... Seleccioná una opción</Typography>                    
      <>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink 
                to="Inicio"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                <button id={'Trivia'} className={styles.button} onClick={handleSeleccion}>ART Trivia</button>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="Inicio"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                <button id={'TriviaKids'} className={styles.button} onClick={handleSeleccion}>ART Trivia Kids</button>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="Mapa"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                <button className={styles.button} >ART Mapa</button>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="MapaKids"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                <button className={styles.button} >ART Mapa Kids</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
      <CheckBoxComp />
    </Box>
    
  )
}

export default Menu