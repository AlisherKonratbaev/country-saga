
import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga"
import countryReducer from "./country";
import modeReducer from "./mode";
import rootSaga from "../sagas";


const rootReducer = combineReducers({
    country: countryReducer,
    mode: modeReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(
            sagaMiddleware,
        )
));

sagaMiddleware.run(rootSaga);
export default store;