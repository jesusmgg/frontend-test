import React, {Component} from "react";
import {connect} from "react-redux";

import { Media } from 'reactstrap';

const mapStateToProps = state => {
    return {articles: state.articles};
};

class ConnectedEventFeatured extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <Media className="mb-4">
                <Media left href="#" className="pr-2">
                    <Media object src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                        <h5>Event Name <small>Jul 20 @ 19:30</small></h5>
                    </Media>
                    This is the event description.
                    <Media bottom>
                        <small className="float-right">Theatre X</small>
                    </Media>
                </Media>
            </Media>
        );
    }
}

const EventFeatured = connect(mapStateToProps)(ConnectedEventFeatured);

export default EventFeatured;