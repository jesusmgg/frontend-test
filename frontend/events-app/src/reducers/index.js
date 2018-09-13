import {combineReducers} from "redux";

import eventReducer from "./eventReducer";
import uiReducer from "./uiReducer";
import featuredEventReducer from "./featuredEventReducer";

export default combineReducers({
    ui: uiReducer,
    events: eventReducer,
    featuredEvents: featuredEventReducer,
});