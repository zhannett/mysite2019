import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 43.667664, lng: -79.406441 }}
    >
      <Marker position={{ lat: 43.667664, lng: -79.406441 }} />
    </GoogleMap>
  ))
);

export default MapWithAMarker;
