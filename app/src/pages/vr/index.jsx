import React from "react";
import VR from "./parkVR/vr";

import { ParkService } from "../../services";

export default class VRPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            park: undefined,
            parkItems: []
        };
    }

    componentDidMount() {
        ParkService.getRandomParkInfrastructure()
            .then(x => this.setState({ park: x.park, parkItems: x.parkItems }));
    }

    render() {
        const heading = (this.state.park && this.state.park.parkName) || "Loading...";
        return <div>
            <h1>{ heading } </h1>
            <VR parkItems={this.state.parkItems} />
        </div>
    }

};
