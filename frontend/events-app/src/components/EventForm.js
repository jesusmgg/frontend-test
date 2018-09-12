import React, {Component} from "react";
import {connect} from "react-redux";

import {Container, Row, Col, Button, Table, Form, FormGroup, Label, Input} from 'reactstrap';

import {Icon} from 'react-icons-kit'
import {save} from 'react-icons-kit/fa/save'


class ConnectedEventForm extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Form>
                <Row>
                    <Col sm={8}>
                        <FormGroup>
                            <Input type="text" size="lg" name="title" id="title" placeholder="Event Title"/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" rows="20" name="description" id="description"
                                   placeholder="Event Description"/>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="image">Image URL</Label>
                                    <Input type="url" name="image" id="image"
                                           placeholder="http://www.example.com/image.jpg"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="location">Location</Label>
                                    <Input type="text" name="location" id="location" placeholder=""/>
                                </FormGroup>
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
                                    {[...Array(6)].map((x, i) =>
                                        <tr>
                                            <td><FormGroup>
                                                <Input type="datetime-local" name="date" id="date" placeholder=""/>
                                            </FormGroup></td>
                                            <td><FormGroup>
                                                <Input type="text" name={"price-" + i} id="price" placeholder=""/>
                                            </FormGroup></td>
                                        </tr>
                                    )}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Button type="submit" color="btn-primary" className="float-right">
                            <Icon size={64} icon={save}/>
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const EventForm = connect()(ConnectedEventForm);

export default EventForm;