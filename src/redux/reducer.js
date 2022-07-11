import { CAMBIAR_CATEGORIA, CAMBIAR_DIFICULTAD, CAMBIAR_EMAIL, CAMBIAR_KEYBOARD, CAMBIAR_NOMBRE, CAMBIAR_PUNTUACION, CAMBIAR_SEXO, CAMBIAR_TERMINOSCONDICIONES, CAMBIAR_TIPOJUEGO, LIMPIAR_DATOS } from "./actionTypes";

const initialState = {
    nombre: "",
    dificultad: "",
    sexo: "",
    email: "",
    categoria: "",
    puntuacion: 0,
    tipoJuego: "",
    keyboardSelected: "",
    terminosCondiciones: false
}
const reducer = (state = initialState, action) => {
    switch(action.type) {               
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

        case CAMBIAR_KEYBOARD:
            return {
                ...state,
                keyboard: action.payload
            }

        case CAMBIAR_TERMINOSCONDICIONES:
            return {
                ...state,
                terminosCondiciones: action.payload
            }

        default:
            return state;
    }            
};

export default reducer;