import {ADD_EVENT, SHOW_EVENT_DETAIL, SHOW_HOME} from "../constants/action-types";

export const addEvent = (event) => ({type: ADD_EVENT, event: event});

export const showEventDetail = (event) => ({type: SHOW_EVENT_DETAIL, event: event});
export const showHome = () => ({type: SHOW_HOME});