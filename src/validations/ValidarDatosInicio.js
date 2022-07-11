import { useSelector } from "react-redux"
import ValidarEmail from "./ValidarEmail"

const ValidarDatosInicio = () => {
    const { categoria, email, nombre, tipoJuego, terminosCondiciones } = useSelector(state => state)
    //console.log('terminosCondiciones', terminosCondiciones)
    if(terminosCondiciones === false)
    {
        return false
    } 

    if(tipoJuego === 'Trivia')
    {
        if(categoria !== "" && ValidarEmail(email) && nombre !== "")
        {
            return true
        }  
    } 

    if(tipoJuego === 'TriviaKids') 
    {
        if(nombre !== "")
        {
            return true
        }
    }
    
    return false
}

export default ValidarDatosInicio;