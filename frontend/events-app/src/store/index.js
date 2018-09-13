import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const initialState = {
    ui: {
        showHome: true,
        showEventDetail: false,
        showEventForm: false,
        showBackButton: false,

        isFetching: false,

        selectedEvent: null
    },

    events: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: 0,
        items: []
    },

    featuredEvents: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: 0,
        items: []
    }
};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;