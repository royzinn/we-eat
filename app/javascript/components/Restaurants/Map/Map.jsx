import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 32.075363, lng: 34.782712 }} // WeWork Digi HQ
  >
  </GoogleMap>)));

export default Map;


