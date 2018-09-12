import React, {Component} from "react";

import {Container, Row, Col, Button} from 'reactstrap';

import {Icon} from 'react-icons-kit'
import {arrowCircleLeft} from 'react-icons-kit/fa/arrowCircleLeft'

import EventList from "./EventList";
import connect from "react-redux/es/connect/connect";
import {showEventDetail, showHome} from "../actions";

const mapStateToProps = state => {
    return {
        showBackButton: state.ui.showBackButton
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onBackClicked: () => dispatch(showHome()),
    }
}

class ConnectedApp extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>
                            {this.props.showBackButton &&
                                <Button onClick={this.props.onBackClicked} color="link">
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