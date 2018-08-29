import React, {Component} from "react";
import {connect} from "react-redux";

import {Container, Row, Col, Button, Table} from 'reactstrap';

import {Icon} from 'react-icons-kit'
import {save} from 'react-icons-kit/fa/save'

const mapStateToProps = state => {
    return {articles: state.articles};
};

class ConnectedEventDetail extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={8}>
                        <h1>
                            <span style={{fontSize: "150%"}}>Event Name</span>
                            <span className="pl-2" style={{fontSize: "50%"}}>Location</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis tempus tellus, nec porta ex dictum mollis. Proin pulvinar tempus odio. Suspendisse nibh augue, tempor sollicitudin nibh a, ullamcorper venenatis ipsum. Suspendisse tempus semper ipsum, id finibus leo maximus eget. Morbi sit amet arcu nec eros maximus imperdiet vel quis ex. Quisque ac viverra leo. Integer feugiat rhoncus ligula, ac ultrices felis fermentum sed. Cras iaculis ut nibh sit amet mattis. Curabitur purus urna, mattis eget scelerisque at, malesuada ut ex. Donec imperdiet consectetur urna eu accumsan.

                            Aliquam lacinia enim dolor, vitae tincidunt est commodo ut. In hac habitasse platea dictumst. Donec elementum, leo nec porta tempor, lectus massa congue tortor, in scelerisque odio nisi non lorem. Maecenas laoreet sapien a nulla rhoncus, vulputate lacinia massa suscipit. Cras ac erat malesuada felis facilisis blandit. Duis ut mollis risus. Nunc tristique tortor at nisl venenatis rutrum sit amet nec quam. Integer facilisis ullamcorper lectus, et finibus ligula vulputate ut. Integer convallis tincidunt magna ut euismod. Nam commodo tempor elit, et euismod est tincidunt at. Nulla sagittis ligula id ex tempor, sit amet varius nibh ornare.

                            Aliquam sollicitudin nisi ipsum, sed ultricies metus fermentum sit amet. Proin euismod, libero sed viverra gravida, ex massa porta nisi, et rhoncus nulla tortor a turpis. Nam volutpat laoreet orci a posuere. Nulla facilisi. Proin hendrerit dui massa. Ut metus magna, tincidunt ut elementum elementum, suscipit eget ipsum. Aliquam sit amet sem vel tortor scelerisque ullamcorper ac ut elit. Aenean vulputate vestibulum mi ac dignissim. Vivamus condimentum, risus sit amet accumsan hendrerit, augue eros commodo ex, ut lacinia nisl nibh in erat. Pellentesque at rhoncus ipsum, in sollicitudin dolor. Vestibulum mauris tellus, tincidunt nec scelerisque sed, elementum a ex. In dignissim finibus lacinia.

                            Nunc ex dolor, volutpat in tellus a, semper sagittis magna. Mauris vulputate nunc est, at imperdiet sapien tempus et. Donec ut neque non tortor consequat dapibus ac eget diam. Donec imperdiet tristique pharetra. Nullam sit amet tristique diam. Nulla gravida sodales orci eu semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam scelerisque ligula in tempus placerat.
                        </p>
                    </Col>
                    <Col sm={4}>
                        <Row>
                            <Col>
                                <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                                     alt="Card image cap"
                                />
                            </Col>
                        </Row>
                        <Row className="pt-3">
                            <Col>
                                <Table bordered striped size="sm">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>20 Jul</td>
                                        <td>19:30</td>
                                        <td>$200</td>
                                    </tr>
                                    <tr>
                                        <td>20 Jul</td>
                                        <td>19:30</td>
                                        <td>$200</td>
                                    </tr>
                                    <tr>
                                        <td>20 Jul</td>
                                        <td>19:30</td>
                                        <td>$200</td>
                                    </tr>
                                    <tr>
                                        <td>20 Jul</td>
                                        <td>19:30</td>
                                        <td>$200</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        );
    }
}

const EventDetail = connect(mapStateToProps)(ConnectedEventDetail);

export default EventDetail;