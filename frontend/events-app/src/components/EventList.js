import React, {Component} from "react";
import {connect} from "react-redux";

import {Container, Row, Col, Button, CardDeck} from 'reactstrap';

import { Icon } from 'react-icons-kit'
import {plusCircle} from 'react-icons-kit/fa/plusCircle'

import EventCard from "./EventCard";
import EventFeatured from "./EventFeatured";

const mapStateToProps = state => {
    return {
        events: state.events
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
                <Row>
                    <Col sm="8">
                        <Row>
                            {this.props.events.map(event =>
                                <Col sm="6">
                                    <EventCard
                                        key={event.id}
                                        {...event}
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
                                <EventFeatured/>
                                <EventFeatured/>
                                <EventFeatured/>
                                <EventFeatured/>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Button color="link" className="float-right"><Icon size={64} icon={plusCircle}/></Button>
            </Container>
        );
    }
}

const EventList = connect(mapStateToProps)(ConnectedEventList);

export default EventList;