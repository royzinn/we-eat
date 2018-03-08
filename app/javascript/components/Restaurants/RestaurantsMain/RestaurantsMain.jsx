import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RestaurantsList from '../List/RestaurantsList';
import Map from '../Map/Map';

export default class RestaurantsMain extends Component {
  static propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.object),
  }

  state = { selectedRestaurant: null }

  onRestaurantClick = (selectedRestaurant) => {
    this.setState(() => ({ selectedRestaurant }));
  }

  render() {
    const { restaurants } = this.props;

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-sm-4">
            <RestaurantsList
              restaurants={restaurants}
              onRestaurantClick={this.onRestaurantClick}
            />
          </div>
          <div className="col-12 col-sm-8">
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '600px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
              selectedRestaurant={this.state.selectedRestaurant}
            />
          </div>
        </div>
      </div>
    );
  }
}
