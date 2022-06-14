export const SET_COUNTRY = "SET_COUNTRY";
export const GET_COUNTRY = "GET_COUNTRY";
export const CHANGE_COUNTRIES = "CHANGE_COUNTRIES";
export const SET_COUNTRY_DETAILS = "SET_COUNTRY_DETAILS";
export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const SET_LOADING_DATA = "SET_LOADING_DATA";
export const SET_LOADING_DETAILS = "SET_LOADING_DETAILS";
export const SET_MODE = "SET_MODE"

export const setCountryAction = (payload) => ({type: SET_COUNTRY, payload})
export const getCountryAction = () => ({type: GET_COUNTRY})
export const setLoadingDataAction = (payload) => ({type: SET_LOADING_DATA, payload})
export const changeCountriesAction = (payload) => ({type:CHANGE_COUNTRIES, payload})
export const setModeAction = (payload) => ({type: SET_MODE, payload});
export const setCountryDetailsAction = (payload) => ({type:SET_COUNTRY_DETAILS, payload});
export const getCountryDetailsAction = (payload) => ({type:GET_COUNTRY_DETAILS, payload});
export const setLoadingDetailsAction = (payload) => ({type:SET_LOADING_DETAILS, payload});