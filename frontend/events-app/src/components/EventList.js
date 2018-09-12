import React, {Component} from "react";
import {connect} from "react-redux";

import {Container, Row, Col, Button, CardDeck} from 'reactstrap';

import {Icon} from 'react-icons-kit'
import {plusCircle} from 'react-icons-kit/fa/plusCircle'

import EventCard from "./EventCard";
import EventFeatured from "./EventFeatured";
import EventDetail from "./EventDetail";
import {showEventDetail, showEventForm, showHome} from "../actions";
import EventForm from "./EventForm";

const mapStateToProps = state => {
    return {
        events: state.events,
        eventsFeatured: state.eventsFeatured,

        showHome: state.ui.showHome,
        showEventDetail: state.ui.showEventDetail,
        showEventForm: state.ui.showEventForm
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onAddEventClicked: () => dispatch(showEventForm()),
    }
}

class ConnectedEventList extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Container>
                {this.props.showHome &&
                <Row>
                    <Col sm="8">
                        <Row>
                            {this.props.events.map(event =>
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
                                {this.props.events.filter(event => (event.featured)).map(event =>
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