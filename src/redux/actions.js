import { 
    CAMBIAR_DIFICULTAD, 
    CAMBIAR_PUNTUACION,
    CAMBIAR_DNI,
    CAMBIAR_EMAIL,
    CAMBIAR_SEXO,
    CAMBIAR_CATEGORIA,
    CAMBIAR_NOMBRE
} from './actionTypes'

export const handleCambioDificultad = (payload) => ({
    type: CAMBIAR_DIFICULTAD,
    payload
});

export const handleCambioPuntuacion = (payload) => ({
    type: CAMBIAR_PUNTUACION,
    payload
});

export const handleCambioDNI = (payload) => ({
    type: CAMBIAR_DNI,
    payload
});

export const handleCambioEmail = (payload) => ({
    type: CAMBIAR_EMAIL,
    payload
});

export const handleCambioSexo = (payload) => ({
    type: CAMBIAR_SEXO,
    payload
});

export const handleCambioCategoria = (payload) => ({
    type: CAMBIAR_CATEGORIA,
    payload
});

export const handleCambioNombre = (payload) => ({
    type: CAMBIAR_NOMBRE,
    payload
});