import React, {Component} from "react";
import {connect} from "react-redux";

import {Container, Row, Col, Button, Table} from 'reactstrap';

import {Icon} from 'react-icons-kit'
import {save} from 'react-icons-kit/fa/save'
import EventFeatured from "./EventFeatured";

const mapStateToProps = state => {
    return {
        event: state.ui.selectedEvent
    };
};

class ConnectedEventDetail extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <Row>
                <Col sm={8}>
                    <h1>
                        <span style={{fontSize: "150%"}}>{this.props.event.title}</span>
                        <span className="pl-2" style={{fontSize: "50%"}}>{this.props.event.location}</span>
                    </h1>
                    <p>
                        {this.props.event.description}
                    </p>
                </Col>
                <Col sm={4}>
                    <Row>
                        <Col>
                            <img className="img-fluid"
                                 src={this.props.event.eventImage}
                                 alt={this.props.event.title}
                            />
                        </Col>
                    </Row>
                    <Row className="pt-3">
                        <Col>
                            <Table bordered striped size="sm">
                                <thead className="thead-dark">
                                <tr>
                                    <th>Date</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.event.dates.map(date =>
                                    <tr>
                                        <td>{date}</td>
                                        <td>No info</td>
                                    </tr>
                                )}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

const EventDetail = connect(mapStateToProps)(ConnectedEventDetail);

export default EventDetail;