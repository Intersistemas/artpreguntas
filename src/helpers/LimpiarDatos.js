import { handleCambioPuntuacion, handleCambioDNI, handleCambioDificultad, handleCambioEmail, handleCambioSexo, handleCambioCategoria } from '../redux/actions'
import { useDispatch } from 'react-redux'

const LimpiarDatos = () => {
    const dispatch = useDispatch();

    dispatch(handleCambioDNI(0))
    dispatch(handleCambioDificultad(''))
    dispatch(handleCambioEmail(''))
    dispatch(handleCambioSexo(''))
    dispatch(handleCambioCategoria(''))
    dispatch(handleCambioPuntuacion(0))
}

export default LimpiarDatos;

