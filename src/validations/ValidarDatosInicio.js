import { useSelector } from "react-redux"
import ValidarEmail from "./ValidarEmail"

const ValidarDatosInicio = (props) => {
    const { categoria, email, nombre } = useSelector(state => state)

    if(props === 'Trivia')
    {
        if(categoria !== "" && ValidarEmail(email) && nombre !== "")
        {
            return false
        } else
        {
            return true
        }    
    } 
    if(props === 'TriviaKids') 
    {
        if(nombre !== "")
        {
            return false
        } else
        {
            return true
        }  
    }
    
}

export default ValidarDatosInicio;