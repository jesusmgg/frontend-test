import React, {Component} from "react";

import {
    Card,
    CardImg,
    CardText,
    CardTitle,
    CardImgOverlay,
    Button,
    CardLink,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import {Icon} from 'react-icons-kit'
import {twitter} from 'react-icons-kit/fa/twitter'
import {shareAlt} from 'react-icons-kit/fa/shareAlt'
import {showEventDetail} from "../actions";
import connect from "react-redux/es/connect/connect";

function mapDispatchToProps(dispatch) {
    return {
        onViewClicked: (event) => dispatch(showEventDetail(event)),
    }
}

class ConnectedEventCard extends Component {
    constructor() {
        super();
        this.state = {
            shareDropdownOpen: false
        };

        this.toggleShareDropdown = this.toggleShareDropdown.bind(this);
        this.handleOnViewClicked = this.handleOnViewClicked.bind(this);
    }

    toggleShareDropdown() {
        this.setState({
            shareDropdownOpen: !this.state.shareDropdownOpen
        });
    }

    handleOnViewClicked() {
        this.props.onViewClicked(this.props.event);
    }

    render() {
        return (
            <div className="mb-4">
                <Card inverse>
                    <CardImg width="100%"
                             src={this.props.event.eventImage}
                             alt={this.props.event.title}/>

                    <CardImgOverlay className="p-2 pl-3 d-flex flex-column justify-content-between">
                        <div className="m-0 p-0">
                            <CardText>
                                <small>{this.props.event.dates[0]}</small>
                                <ButtonDropdown className="float-right" isOpen={this.state.shareDropdownOpen}
                                                toggle={this.toggleShareDropdown}>
                                    <DropdownToggle className="m-0 p-0" color="link">
                                        <Icon size={24} icon={shareAlt}/>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem className="pl-2 pr-2 pt-1 pb-1 text-primary">
                                            <Icon className="align-middle pr-2" size={24} icon={twitter}/> Tweet this
                                            event
                                        </DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </CardText>
                        </div>

                        <div className="justify-content-end">
                            <CardTitle className="p-0">
                                <h3> {this.props.event.title} </h3>
                                <hr className="mt-2 mb-0"/>
                            </CardTitle>

                            <CardLink className="p-0">
                                <Button onClick={this.handleOnViewClicked} size="sm">View</Button>
                            </CardLink>
                        </div>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    }
}

const EventCard = connect(null, mapDispatchToProps)(ConnectedEventCard);

export default EventCard;