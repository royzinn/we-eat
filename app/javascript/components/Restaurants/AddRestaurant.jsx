import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRestaurants, selectRestaurant } from '../../../redux/actions/restaurants';

class AddRestaurant extends Component {
  static propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.object),
    onRestaurantSelect: PropTypes.func.isRequired,
    fetchRestaurants: PropTypes.func.isRequired,
    selectedRestaurant: PropTypes.object,
  };

  componentWillMount() {
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
              selectedRestaurant={selectedRestaurant}
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

const mapDispatchToProps = dispatch => ({
  onRestaurantSelect: restaurant => state.restaurants,
  fetchRestaurants: () => dispatch(fetchRestaurants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRestaurant);
