import React from "react";
import Async from "react-promise";

import ParkVR from "../vr/parkVr";
import MarkerMap from "./markerMap"

import { ParkService } from "../../services";

export default props =>
    <Async promise={ParkService.getParks()} then={parks => {
        let vrProps = undefined;
        const showOverlay = props => {
            vrProps = props;
        };
        const hideOverlay = () => {
            vrProps = undefined;
        };
        const getProps = () => {
            return vrProps;
        };

        return <div>
            <MarkerMap markerClick={showOverlay} parks={parks}></MarkerMap>
            {vrProps && <ParkVR
                waitForUpdate={getProps}
            ></ParkVR>}
        </div>
    }
    } />

