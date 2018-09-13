import {
    ADD_EVENT_FAILURE,
    ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS,
    FETCH_ALL_EVENTS_FAILURE,
    FETCH_ALL_EVENTS_REQUEST,
    FETCH_ALL_EVENTS_SUCCESS, FETCH_FEATURED_EVENTS_FAILURE,
    FETCH_FEATURED_EVENTS_REQUEST, FETCH_FEATURED_EVENTS_SUCCESS
} from "../constants/action-types";
import {EVENT_ENDPOINT} from "../constants/api-endpoints";
import {showHome} from "./ui";

export const fetchAllEventsRequest = () => ({type: FETCH_ALL_EVENTS_REQUEST});
export const fetchAllEventsSuccess = (response) => ({type: FETCH_ALL_EVENTS_SUCCESS, response: response});
export const fetchAllEventsFailure = (error) => ({type: FETCH_ALL_EVENTS_FAILURE, error: error});

export function fetchAllEvents() {
    return function (dispatch) {
        dispatch(fetchAllEventsRequest());

        return fetch(EVENT_ENDPOINT + "events", {
            method: "get"
        })
            .then(response => response.json())
            .then(json => dispatch(fetchAllEventsSuccess(json)))
            .catch(error => dispatch(fetchAllEventsFailure(error)))
    }
}

export const fetchFeaturedEventsRequest = () => ({type: FETCH_FEATURED_EVENTS_REQUEST});
export const fetchFeaturedEventsSuccess = (response) => ({type: FETCH_FEATURED_EVENTS_SUCCESS, response: response});
export const fetchFeaturedEventsFailure = (error) => ({type: FETCH_FEATURED_EVENTS_FAILURE, error: error});

export function fetchFeaturedEvents() {
    return function (dispatch) {
        dispatch(fetchFeaturedEventsRequest());

        return fetch(EVENT_ENDPOINT + "events/featured", {
            method: "get"
        })
            .then(response => response.json())
            .then(json => dispatch(fetchFeaturedEventsSuccess(json)))
            .catch(error => dispatch(fetchFeaturedEventsFailure(error)))
    }
}

export const addEventRequest = () => ({type: ADD_EVENT_REQUEST});
export const addEventSuccess = (response) => ({type: ADD_EVENT_SUCCESS, response: response});
export const addEventFailure = (error) => ({type: ADD_EVENT_FAILURE, error: error});

export function addEvent(request) {
    return function (dispatch) {
        dispatch(addEventRequest());

        console.log(...request);

        return fetch(EVENT_ENDPOINT + "events", {
            method: "post",
            body: JSON.stringify({...request}),
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(response => response.json())
            .then(json => dispatch(addEventSuccess(json)))
            .catch(error => dispatch(addEventFailure(error)))
    }
}