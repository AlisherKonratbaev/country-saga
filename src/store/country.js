import {CHANGE_COUNTRIES, SET_COUNTRY, SET_LOADING_DATA, SET_COUNTRY_DETAILS, SET_LOADING_DETAILS} from "./actions";

const initialState = {
    list: [],
    countryDetails: {},
    isLoading:false,
    isLoadingDetails:false,
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRY: {
            return { ... state, list:[...action.payload]}
        }
        case CHANGE_COUNTRIES: {
            return { ... state, list:[...action.payload]}
        }
        case SET_LOADING_DATA: {
            return {...state, isLoading: action.payload}
        }
        case SET_COUNTRY_DETAILS: {
            return {...state, countryDetails: action.payload}
        }
        case SET_LOADING_DETAILS: {
            return {...state, isLoadingDetails: action.payload}
        }
        default: {
            return state
        }
    }
}

export default countryReducer;