import React from "react";

import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import ParkMarker from "./parkMarker";

const Map = withScriptjs(withGoogleMap(props => <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -27.43639897, lng: 153.0298649 }}>
    <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={30}>
        {props.parks.map(x => ParkMarker({ ...x, onClick: props.markerClick }))}
    </MarkerClusterer>
</GoogleMap>
));

export default props => <Map
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `900px` }} />}
    containerElement={<div style={{ height: `900px` }} />}
    mapElement={<div style={{ height: `800px` }} />}
    parks={props.parks}
    markerClick={props.markerClick} />;
