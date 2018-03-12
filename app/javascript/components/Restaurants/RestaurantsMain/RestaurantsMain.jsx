import React, { Component } from 'react';
import RestaurantsList from '../List/RestaurantsList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRestaurants, selectRestaurant } from '../../../redux/actions/restaurants';
import Map from '../Map/Map';

class RestaurantsMain extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    const { restaurants, onRestaurantSelect, selectedRestaurant } = this.props;

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-sm-4">
            <RestaurantsList
              restaurants={restaurants}
              onRestaurantClick={onRestaurantSelect}
            />
          </div>
          <div className="col-12 col-sm-8">
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '600px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
              selectedRestaurant={selectedRestaurant}
            />
          </div>
        </div>
      </div>
    );
  }
}

RestaurantsMain.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object),
  onRestaurantSelect: PropTypes.func.isRequired,
  fetchRestaurants: PropTypes.func.isRequired,
  selectedRestaurant: PropTypes.object,
};

const getVisibleRestaurants = (restaurants, cuisineFilter, rateFilter, deliveryTimeFilter) => {
  return restaurants.filter(restaurant =>
    ((rateFilter === 'SHOW_ALL') || (restaurant.rating === rateFilter)) &&
    ((cuisineFilter === 'SHOW_ALL') || (restaurant.genres.map(genre => genre.name).includes(cuisineFilter))) &&
    ((deliveryTimeFilter === 'SHOW_ALL') || (restaurant.max_delivery_time <= deliveryTimeFilter))
  );
};

const mapStateToProps = state => ({
  restaurants: getVisibleRestaurants(
    state.restaurants.items,
    state.cuisineFilter,
    state.rateFilter,
    state.deliveryTimeFilter,
  ),
  selectedRestaurant: state.selectedRestaurant,
});

const mapDispatchToProps = dispatch => ({
  onRestaurantSelect: restaurant => dispatch(selectRestaurant(restaurant)),
  fetchRestaurants: () => dispatch(fetchRestaurants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsMain);
