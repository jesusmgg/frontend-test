import React, {Component} from "react";
import {connect} from "react-redux";

import { Container, Row, Col, Button } from 'reactstrap';

import { Icon } from 'react-icons-kit'
import {plusCircle} from 'react-icons-kit/fa/plusCircle'

import EventCard from "./EventCard";
import EventFeatured from "./EventFeatured";

const mapStateToProps = state => {
    return {articles: state.articles};
};

class ConnectedEventCard extends Component {
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
                            <Col sm="6">
                                <EventCard/>
                            </Col>
                            <Col sm="6">
                                <EventCard/>
                            </Col>
                            <Col sm="6">
                                <EventCard/>
                            </Col>
                            <Col sm="6">
                                <EventCard/>
                            </Col>
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

const EventCart = connect(mapStateToProps)(ConnectedEventCard);

export default EventCart;