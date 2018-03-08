import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

const defaultCenter = { lat: 32.075363, lng: 34.782712 }; // WeWork HQ

function formattedAddress(addressObj) {
  return `${addressObj.street}, ${addressObj.city}`;
}

const Map = withScriptjs(withGoogleMap(({ selectedRestaurant }) => (
  <GoogleMap
    defaultZoom={16}
    center={selectedRestaurant ?
      {
        lat: selectedRestaurant.addresses[0].latitude,
        lng: selectedRestaurant.addresses[0].longitude,
      } : defaultCenter
    }
  >
    {selectedRestaurant &&
      <Marker
        position={{
          lat: selectedRestaurant.addresses[0].latitude,
          lng: selectedRestaurant.addresses[0].longitude,
        }}
      >
        <InfoWindow>
          <div>
            <p>{selectedRestaurant.name}</p>
            <p>{formattedAddress(selectedRestaurant.addresses[0])}</p>
          </div>
        </InfoWindow>
      </Marker>
    }
  </GoogleMap>
)));

export default Map;


