import React, {Component} from "react";
import {connect} from "react-redux";

import {Container, Row, Col, Button, Table, Form, FormGroup, Label, Input} from 'reactstrap';

import {Icon} from 'react-icons-kit'
import {save} from 'react-icons-kit/fa/save'
import {addEvent, fetchAllEvents, fetchFeaturedEvents} from "../actions/event";
import {showHome} from "../actions/ui";


function mapDispatchToProps(dispatch) {
    return {
        addEvent: (event) => dispatch(addEvent(event)),
        fetchAllEvents: () => dispatch(fetchAllEvents()),
        fetchFeaturedEvents: () => dispatch(fetchFeaturedEvents()),
        showHome: () => dispatch(showHome())
    }
}

class ConnectedEventForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            imageURL: "",
            location: "",
            dates: []
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleImageURLChange = this.handleImageURLChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handleImageURLChange(event) {
        this.setState({imageURL: event.target.value});
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }

    handleDateChange(event, index) {
        let dates = this.state.dates;
        dates[index] = event.target.value;

        this.setState({dates: dates});
    }

    handleSubmit(event) {
        console.log("TEST");
        let request = {
            "event": {
                "title": this.state.title,
                "eventImage": this.state.imageURL,
                "description": this.state.description,
                "dates": this.state.dates,
                "location": this.state.location
            }
        };

        console.log(request);

        this.props.addEvent(request);

        event.preventDefault();

        setTimeout(this.props.fetchAllEvents, 500);
        setTimeout(this.props.fetchFeaturedEvents(), 500);
        this.props.showHome();
    }

    componentDidMount() {
        // Initialize dates array
        let dates = Array(6);
        for (let i = 0; i < 6; i++) {
            dates[i] = ""
        }
        this.setState({dates: dates});
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col sm={8}>
                        <FormGroup>
                            <Input type="text" bsSize="lg" name="title" id="title" value={this.state.title}
                                   onChange={this.handleTitleChange} placeholder="Event Title"/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" rows="20" name="description" id="description"
                                   value={this.state.description}
                                   onChange={this.handleDescriptionChange}
                                   placeholder="Event Description"/>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="image">Image URL</Label>
                                    <Input type="url" name="image" id="image" value={this.state.imageURL}
                                           onChange={this.handleImageURLChange}
                                           placeholder="http://www.example.com/image.jpg"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="location">Location</Label>
                                    <Input type="text" name="location" id="location" value={this.state.location}
                                           onChange={this.handleLocationChange}/>
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
                                    {this.state.dates.map((x, i) =>
                                        <tr>
                                            <td><FormGroup>
                                                <Input type="datetime-local" name={"date-" + i} id={"date-" + i}
                                                       value={this.state.dates[i]}
                                                       onChange={(event) => this.handleDateChange(event, i)}
                                                       placeholder=""/>
                                            </FormGroup></td>
                                            <td><FormGroup>

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

const EventForm = connect(null, mapDispatchToProps)(ConnectedEventForm);

export default EventForm;