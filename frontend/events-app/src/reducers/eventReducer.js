import {ADD_EVENT} from "../constants/action-types";

const eventReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_EVENT:
            return [
                ...state,
                {
                    id: action.event.id,
                    title: action.event.title,
                    eventImage: action.event.eventImage,
                    description: action.event.description,
                    dates: action.event.dates,
                    location: action.event.location,
                    featured: false
                }
            ];

        default:
            return state;
    }
};

export default eventReducer;