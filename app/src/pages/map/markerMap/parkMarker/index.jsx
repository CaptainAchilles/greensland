import React from "react";
import { Marker } from "react-google-maps";

// NOTE: The noRedraw param actually refers to a paint optimisation detailed in the #addMarkers method in https://github.com/mikesaidani/marker-clusterer-plus/blob/master/src/markerclusterer.js#1190
export default props => <Marker noRedraw={true} key={props.id} position={{ lat: props.lat, lng: props.lng }} onClick={() => props.onClick(props)} />;
