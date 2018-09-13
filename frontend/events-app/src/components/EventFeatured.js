import React, {Component} from "react";
import {connect} from "react-redux";

import { Media } from 'reactstrap';
import {showEventDetail} from "../actions/ui";

function mapDispatchToProps(dispatch) {
    return {
        onImageClicked: (event) => dispatch(showEventDetail(event)),
    }
}

class ConnectedEventFeatured extends Component {
    constructor() {
        super();
        this.state = {
        };

        this.handleOnImageClicked = this.handleOnImageClicked.bind(this);
    }

    handleOnImageClicked() {
        this.props.onImageClicked(this.props.event);
    }

    render() {
        return (
            <Media className="mb-4">
                <Media left href="#" onClick={this.handleOnImageClicked} className="pr-2">
                    <Media object style={{width: "64px"}} src={this.props.event.eventImage} alt={this.props.event.title} />
                </Media>
                <Media body>
                    <Media heading>
                        <h5>{this.props.event.title} <small>{this.props.event.dates[0]}</small></h5>
                    </Media>
                    {this.props.event.description.substring(0, 50)}...
                    <Media bottom>
                        <small className="float-right">{this.props.event.location}</small>
                    </Media>
                </Media>
            </Media>
        );
    }
}

const EventFeatured = connect(null, mapDispatchToProps)(ConnectedEventFeatured);

export default EventFeatured;