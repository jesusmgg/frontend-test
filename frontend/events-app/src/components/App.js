import React, {Component} from "react";

import {Container, Row, Col, Button} from 'reactstrap';

import {Icon} from 'react-icons-kit'
import {arrowCircleLeft} from 'react-icons-kit/fa/arrowCircleLeft'

import EventList from "./EventList";
import connect from "react-redux/es/connect/connect";
import {showEventDetail, showEventForm, showHome} from "../actions/ui";
import {fetchAllEvents, fetchFeaturedEvents} from "../actions/event";

const mapStateToProps = state => {
    return {
        showBackButton: state.ui.showBackButton
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchAllEvents: () => dispatch(fetchAllEvents()),
        fetchFeaturedEvents: () => dispatch(fetchAllEvents()),
        showHome: () => dispatch(showHome())
    }
}

class ConnectedApp extends Component {
    constructor() {
        super();
        this.state = {};

        this.onBackClicked = this.onBackClicked.bind(this);
    }

    onBackClicked() {
        this.props.fetchAllEvents();
        this.props.fetchFeaturedEvents();
        this.props.showHome();
    }

    componentDidMount() {
        document.title = "Events"
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>
                            {this.props.showBackButton &&
                                <Button onClick={this.onBackClicked} color="link">
                                    <Icon size={48} icon={arrowCircleLeft}/>
                                </Button>
                            }
                            Events
                        </h1>
                        <hr className="mt-0"/>
                        <EventList/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
export default App;