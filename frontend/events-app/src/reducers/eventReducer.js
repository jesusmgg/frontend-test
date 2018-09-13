import {
    ADD_EVENT_SUCCESS,
    FETCH_ALL_EVENTS_FAILURE,
    FETCH_ALL_EVENTS_REQUEST,
    FETCH_ALL_EVENTS_SUCCESS
} from "../constants/action-types";
import {fetchAllEvents, fetchFeaturedEvents} from "../actions/event";

const eventReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_EVENTS_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case FETCH_ALL_EVENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.response.events
            };

        case FETCH_ALL_EVENTS_FAILURE:
            return {
                ...state,
                isFetching: false
            };

        case ADD_EVENT_SUCCESS:
            return state;

        default:
            return state;
    }
};

export default eventReducer;