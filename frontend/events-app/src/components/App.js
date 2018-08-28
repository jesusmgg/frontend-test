import React from "react";

import { Container, Row, Col, Button } from 'reactstrap';
import Octicon from 'react-octicon'

import EventList from "./EventList";

const App = () => (
    <Container>
        <Row>
            <Col>
                <h1>
                    <Button color="link"> <Octicon mega name="arrow-left"/> </Button>
                    Events
                </h1>
                <hr/>
                <EventList/>
            </Col>
        </Row>
    </Container>
);

export default App;