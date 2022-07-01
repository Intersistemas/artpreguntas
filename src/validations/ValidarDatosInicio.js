import { useSelector } from "react-redux"

export default function ValidarDatosInicio(props) {
    const { dificultad, categoria } = useSelector(state => state)

    if(dificultad === "" || categoria === "")
    return false
}
