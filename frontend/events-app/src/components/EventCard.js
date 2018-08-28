import React, {Component} from "react";
import {connect} from "react-redux";

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImgOverlay,
    Button,
    CardFooter,
    CardHeader
} from 'reactstrap';
import Octicon from "react-octicon";

const mapStateToProps = state => {
    return {articles: state.articles};
};

class ConnectedEventCard extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="mb-4">
                <Card inverse>
                    <CardImg width="100%"
                             src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                             alt="Card image cap"/>

                    <CardImgOverlay className="">
                        <CardText>
                            <small>Jul 20 @ 19:30</small>
                            <Button color="link" className="float-right">
                                <Octicon mega name="repo-forked"/>
                            </Button>
                        </CardText>
                        <CardTitle className="">
                            Card Title
                        </CardTitle>
                    </CardImgOverlay>

                    <CardFooter>
                        <Button>View</Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

const EventCard = connect(mapStateToProps)(ConnectedEventCard);

export default EventCard;