import {combineReducers} from "redux";

import generalReducer from "./general-reducer";
import timesReducer from "./times-reducer";

export default combineReducers({
    general: generalReducer,
    times: timesReducer,
});
