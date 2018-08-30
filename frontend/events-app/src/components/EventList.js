import React, {Component} from "react";
import {connect} from "react-redux";

import {Container, Row, Col, Button, CardDeck} from 'reactstrap';

import { Icon } from 'react-icons-kit'
import {plusCircle} from 'react-icons-kit/fa/plusCircle'

import EventCard from "./EventCard";
import EventFeatured from "./EventFeatured";
import EventDetail from "./EventDetail";
import {showEventDetail} from "../actions";

const mapStateToProps = state => {
    return {
        events: state.events,
        eventsFeatured: state.eventsFeatured,

        showHome: state.ui.showHome,
        showEventDetail: state.ui.showEventDetail
    };
};

class ConnectedEventList extends Component {
    constructor() {
        super();
        this.state = {
        };
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
                    <Button color="link" className="float-right"><Icon size={64} icon={plusCircle}/></Button>
                }

                {this.props.showEventDetail &&
                    <EventDetail/>
                }
            </Container>
        );
    }
}

const EventList = connect(mapStateToProps)(ConnectedEventList);

export default EventList;