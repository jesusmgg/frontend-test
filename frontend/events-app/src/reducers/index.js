import {combineReducers} from "redux";

import eventReducer from "./eventReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
    ui: uiReducer,
    events: eventReducer,
});