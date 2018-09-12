import {SHOW_EVENT_DETAIL, SHOW_EVENT_FORM, SHOW_HOME} from "../constants/action-types";

const uiReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOW_EVENT_DETAIL:
            return {
                showHome: false,
                showEventDetail: true,
                showEventForm: false,
                showBackButton: true,

                selectedEvent: action.event
            };

        case SHOW_EVENT_FORM:
            return {
                showHome: false,
                showEventDetail: false,
                showEventForm: true,
                showBackButton: true,

                selectedEvent: null
            };

        case SHOW_HOME:
            return {
                showHome: true,
                showEventDetail: false,
                showEventForm: false,
                showBackButton: false,

                selectedEvent: null
            };

        default:
            return state;
    }
};

export default uiReducer;