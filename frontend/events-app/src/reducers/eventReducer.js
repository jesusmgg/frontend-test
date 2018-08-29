import {ADD_EVENT} from "../constants/action-types";

const eventReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_EVENT:
            return [
                ...state,
                action.event];

        default:
            return state;
    }
};

export default eventReducer;