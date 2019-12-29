import {applyMiddleware, combineReducers, createStore} from "redux";
import hotelsReducer from "../reducers/hotelsReducer";
import userReducer from "../reducers/userReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    user: userReducer,
    hotels: hotelsReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;