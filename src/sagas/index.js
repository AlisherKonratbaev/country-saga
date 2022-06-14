import {fetchCountries, fetchCountryDetails} from "../api";
import {call, takeEvery, put} from 'redux-saga/effects'
import {GET_COUNTRY,setCountryDetailsAction, setLoadingDataAction, setLoadingDetailsAction, setCountryAction, GET_COUNTRY_DETAILS} from "../store/actions";

function* getCountry() {
    yield put(setLoadingDataAction(true))
    try {
        const data = yield call(fetchCountries)
        data.forEach(country => {
            country.isHideSearch = false;
            country.isHideContinent = false;
        })
        yield put(setCountryAction(data));
    } catch {
        console.log("error");
    }
    yield put(setLoadingDataAction(false))
}

function* getCountryDetails(action) {
    yield put(setLoadingDetailsAction(true))
    try {
        const data = yield call(fetchCountryDetails, action.payload)
        yield put(setCountryDetailsAction(data));
    } catch {
        console.log("error");
    }
    yield put(setLoadingDetailsAction(false))
}

function* watcherGetCountry() {
    yield takeEvery(GET_COUNTRY, getCountry)
    yield takeEvery(GET_COUNTRY_DETAILS, getCountryDetails)
}

export default function* rootSaga() {
    yield watcherGetCountry();
}