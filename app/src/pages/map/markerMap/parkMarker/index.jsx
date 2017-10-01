import React from "react";
import { Marker } from "react-google-maps";
// import ParkVR from "../../vr/parkVR";

export default props => <Marker key={props.id} position={{ lat: props.lat, lng: props.lng }} onClick={props.onClick} />;
