import React from "react";
import { Marker } from "react-google-maps";

export default props => <Marker key={props.id} position={{ lat: props.lat, lng: props.lng }} onClick={() => props.onClick(props)} />;
