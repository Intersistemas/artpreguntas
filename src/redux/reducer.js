import { CAMBIAR_CATEGORIA, CAMBIAR_DIFICULTAD, CAMBIAR_DNI, CAMBIAR_EMAIL, CAMBIAR_NOMBRE, CAMBIAR_PUNTUACION, CAMBIAR_SEXO, CAMBIAR_TIPOJUEGO, LIMPIAR_DATOS } from "./actionTypes";

const initialState = {
    dni: 0,
    nombre: "",
    dificultad: "",
    sexo: "",
    email: "",
    categoria: "",
    puntuacion: 0,
    tipoJuego: ""
}
const reducer = (state = initialState, action) => {
    switch(action.type) {       
        case CAMBIAR_DNI:
            return {
                ...state,
                dni: action.payload
            };

        case CAMBIAR_NOMBRE:
            return {
                ...state,
                nombre: action.payload
            }
        case CAMBIAR_SEXO:
            return {
                ...state,
                sexo: action.payload
            }

        case CAMBIAR_EMAIL:
            return {
                ...state,
                email: action.payload
            }

        case CAMBIAR_CATEGORIA:
            return {
                ...state,
                categoria: action.payload
            }

        case CAMBIAR_DIFICULTAD:
            //console.log('dificultad', action.payload)
            return {
                ...state,
                dificultad: action.payload
            };

        case CAMBIAR_PUNTUACION:
            return {
                ...state,
                puntuacion: action.payload
            };
          
        case LIMPIAR_DATOS:
            //console.log('reinicia')
            return initialState;

        case CAMBIAR_TIPOJUEGO:
            return {
                ...state,
                tipoJuego: action.payload
            };

        default:
            return state;
    }            
};

export default reducer;