import React, {Component} from "react";
import {connect} from "react-redux";

import {Container, Row, Col, Button, CardDeck} from 'reactstrap';

import {Icon} from 'react-icons-kit'
import {plusCircle} from 'react-icons-kit/fa/plusCircle'

import EventCard from "./EventCard";
import EventFeatured from "./EventFeatured";
import EventDetail from "./EventDetail";
import {showEventDetail, showEventForm, showHome} from "../actions/ui";
import EventForm from "./EventForm";
import {fetchAllEvents, fetchFeaturedEvents} from "../actions/event";

const mapStateToProps = state => {
    return {
        events: state.events,
        featuredEvents: state.featuredEvents,

        showHome: state.ui.showHome,
        showEventDetail: state.ui.showEventDetail,
        showEventForm: state.ui.showEventForm
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onAddEventClicked: () => dispatch(showEventForm()),
        fetchAllEvents: () => dispatch(fetchAllEvents()),
        fetchFeaturedEvents: () => dispatch(fetchFeaturedEvents())
    }
}

class ConnectedEventList extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchAllEvents();
        this.props.fetchFeaturedEvents();
    }

    render() {
        return (
            <Container>
                {this.props.showHome &&
                <Row>
                    <Col sm="8">
                        <Row>
                            {this.props.events.items.map(event =>
                                <Col sm="6">
                                    <EventCard
                                        key={event.id}
                                        event={event}
                                    />
                                </Col>
                            )}
                        </Row>
                    </Col>

                    <Col sm="4">
                        <h3>Today's Highlight</h3>
                        <hr/>
                        <Row>
                            <Col sm="12">
                                {this.props.featuredEvents.items.map(event =>
                                    <EventFeatured
                                        key={event.id}
                                        event={event}
                                    />
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                }

                {this.props.showHome &&
                <Button onClick={this.props.onAddEventClicked} color="link" className="float-right">
                    <Icon size={64} icon={plusCircle}/>
                </Button>
                }

                {this.props.showEventDetail &&
                <EventDetail/>
                }

                {this.props.showEventForm &&
                <EventForm/>
                }
            </Container>
        );
    }
}

const EventList = connect(mapStateToProps, mapDispatchToProps)(ConnectedEventList);

export default EventList;