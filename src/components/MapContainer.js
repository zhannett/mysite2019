import React, { Component } from "react";
import styled from "styled-components";

import MapWithAMarker from "./MapWithAMarker";
import keys from "./config/keys";
import media from "../mediaTemplate";

const Map = styled.div`
  width: 44%;
  border: 2px solid #999;
  border-radius: 4px;
  vertical-align: top;
  ${media.desktop`
    width: 100%;
    height: 260px;
  `};
  ${media.tablet`
    height: 260px;
  `};
`;

class MapContainer extends Component {
  render() {
    const google_maps_api_key;
    if (env === "development") {
      google_maps_api_key = keys.google_maps_api_key;
    }
    if (env === "production") {
      google_maps_api_key = process.env.GOOGLE_MAPS_API_KEY;
    }
    return (
      <Map>
        <h1> {process.env.NODE_ENV}</h1>
        
        <MapWithAMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            google_maps_api_key
          }&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `255px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        
      </Map>
    );
  }
}

export default MapContainer;
