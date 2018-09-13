import {FETCH_ALL_EVENTS_SUCCESS, FETCH_FEATURED_EVENTS_SUCCESS} from "../constants/action-types";

const featuredEventReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_FEATURED_EVENTS_SUCCESS:
            return {
                ...state,
                items: action.response.events
            };

        default:
            return state;
    }
};

export default featuredEventReducer;