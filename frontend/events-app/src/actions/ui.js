import {SHOW_EVENT_DETAIL, SHOW_EVENT_FORM, SHOW_HOME} from "../constants/action-types";


export const showEventDetail = (event) => ({type: SHOW_EVENT_DETAIL, event: event});
export const showEventForm = () => ({type: SHOW_EVENT_FORM});
export const showHome = () => ({type: SHOW_HOME});