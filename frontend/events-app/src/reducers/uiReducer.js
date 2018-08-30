import {SHOW_EVENT_DETAIL, SHOW_HOME} from "../constants/action-types";

const uiReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOW_EVENT_DETAIL:
            return {
                showHome: false,
                showEventDetail: true,
                showBackButton: true,

                selectedEvent: action.event
            };

        case SHOW_HOME:
            return {
                showHome: true,
                showEventDetail: false,
                showBackButton: false,

                selectedEvent: null
            };

        default:
            return state;
    }
};

export default uiReducer;