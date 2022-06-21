import { CAMBIAR_DIFICULTAD, CAMBIAR_PUNTUACION } from "./actionTypes";

const initialState = {
    dificultad: "",
    puntuacion: 0
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAMBIAR_DIFICULTAD:
            return {
                ...state,
                dificultad: action.payload
            };

            case CAMBIAR_PUNTUACION:
            return {
                ...state,
                puntuacion: action.payload
            };

            default:
                return state;
    }            
};

export default reducer;