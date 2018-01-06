import React from "react";
import cxs from "cxs";
import VR from "./vr";

import { ParkService } from "../../../services";

const overlay = cxs(`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: red;
`);

const overlayContentClass = cxs(`
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
`);

export default class ParkVR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parkItems: []
        };
    }

    updateParkItems() {
        ParkService.getForPark(this.props.id)
            .then(x => this.setState({ parkItems: x.parkItems }));
    }
    componentDidMount() {
        this.updateParkItems();
    }

    componentDidUpdate() {
        this.updateParkItems();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.id !== this.props.id) {
            return true;
        }
        if (nextState.parkItems.length != this.state.parkItems.length) {
            return true;
        }
        return false;
    }

    render() {
        let overlayContent;
        if (this.state.parkItems.length > 0) {
            overlayContent = <VR parkItems={this.state.parkItems} />;
        } else {
            overlayContent = "Loading...";
        }

        return <div className={overlay} /*onClick={this.props.onClick}*/>
            <div className={overlayContentClass}>
                {overlayContent}
            </div>
        </div>;
    }
};
