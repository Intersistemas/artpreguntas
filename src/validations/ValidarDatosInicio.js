import { useSelector } from "react-redux"
import ValidarEmail from "./ValidarEmail"

const ValidarDatosInicio = (props) => {
    const { dificultad, categoria, email, dni, nombre } = useSelector(state => state)

    if(dificultad !== "" && categoria !== "" && ValidarEmail(email) && dni !== 0 && nombre !== "")
    {
        return false
    } else
    {
        return true
    }    
}

export default ValidarDatosInicio;