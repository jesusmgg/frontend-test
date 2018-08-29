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
    CardHeader, CardLink, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import {Icon} from 'react-icons-kit'
import {twitter} from 'react-icons-kit/fa/twitter'
import {shareAlt} from 'react-icons-kit/fa/shareAlt'

const mapStateToProps = state => {
    return {articles: state.articles};
};

class ConnectedEventCard extends Component {
    constructor() {
        super();
        this.state = {
            shareDropdownOpen: false
        };

        this.toggleShareDropdown = this.toggleShareDropdown.bind(this);
    }

    toggleShareDropdown() {
        this.setState({
            shareDropdownOpen: !this.state.shareDropdownOpen
        });
    }

    render() {
        return (
            <div className="mb-4">
                <Card inverse>
                    <CardImg width="100%"
                             src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                             alt="Card image cap"/>

                    <CardImgOverlay className="p-2 pl-3 d-flex flex-column justify-content-between">
                        <div className="m-0 p-0">
                            <CardText>
                                <small>Jul 20 @ 19:30</small>
                                <ButtonDropdown className="float-right" isOpen={this.state.shareDropdownOpen}
                                                toggle={this.toggleShareDropdown}>
                                    <DropdownToggle className="m-0 p-0" color="link">
                                        <Icon size={24} icon={shareAlt}/>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem className="pl-2 pr-2 pt-1 pb-1 text-primary">
                                            <Icon className="align-middle pr-2" size={24} icon={twitter}/> Tweet this event
                                        </DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </CardText>
                        </div>

                        <div className="justify-content-end">
                            <CardTitle className="p-0">
                                <h3> Card Title </h3>
                                <hr className="mt-2 mb-0"/>
                            </CardTitle>

                            <CardLink className="p-0">
                                <Button size="sm">View</Button>
                            </CardLink>
                        </div>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    }
}

const EventCard = connect(mapStateToProps)(ConnectedEventCard);

export default EventCard;