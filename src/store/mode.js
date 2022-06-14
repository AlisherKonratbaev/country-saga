import {SET_MODE} from "./actions";
import {themeMode} from "../themeMode";
const initialValue = {
    mode: themeMode.light
}

const modeReducer = (state = initialValue, action) => {
    switch (action.type) {
        case SET_MODE: {
            return {...state, mode: action.payload}
        }
        default: {
            return state;
        }


    }
}
export default modeReducer;