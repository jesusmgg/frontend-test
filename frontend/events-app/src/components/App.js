import React from "react";

import {Container, Row, Col, Button} from 'reactstrap';

import {Icon} from 'react-icons-kit'
import {arrowCircleLeft} from 'react-icons-kit/fa/arrowCircleLeft'

import EventList from "./EventList";
import EventDetail from "./EventDetail";

const App = () => (
    <Container>
        <Row>
            <Col>
                <h1>
                    <Button color="link"> <Icon size={48} icon={arrowCircleLeft}/> </Button>
                    Events
                </h1>
                <hr className="mt-0"/>
                <EventList/>
                <EventDetail/>
            </Col>
        </Row>
    </Container>
);

export default App;