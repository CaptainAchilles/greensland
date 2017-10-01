import React from "react";
import Async from "react-promise";

import ParkVR from "../vr/parkVr";
import MarkerMap from "./markerMap"

import { ParkService } from "../../services";

export default class MapManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parks: [],
            selectedMarker: undefined
        };
    }

    componentDidMount() {
        ParkService.getParks()
            .then(parks => this.setState({ parks }));
    }

    showOverlay = overlayData => {
        this.setState({
            selectedMarker: overlayData
        });
    }
    hideOverlay = () => {
        this.setState({
            selectedMarker: undefined
        });
    }

    render() {
        return <div>
            <MarkerMap markerClick={this.showOverlay} parks={this.state.parks}></MarkerMap>
            {this.state.selectedMarker && <ParkVR {...this.state.selectedMarker} onClick={this.hideOverlay}></ParkVR>}
        </div>
    }
}
