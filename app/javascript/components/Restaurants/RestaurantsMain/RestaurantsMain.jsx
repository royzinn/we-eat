import React, { Component } from 'react';
import List from '../List/List';
import Map from '../Map/Map';

export default class RestaurantsMain extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-4">
            <List restaurants={this.props.restaurants} />
          </div>
          <div className="col-8">
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    );
  }
}
