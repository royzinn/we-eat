import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectRestaurant } from '../../redux/actions/restaurants';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class RestaurantSearch extends Component {
  static propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.object),
    onRestaurantClick: PropTypes.func.isRequired,
  }

  onRestaurantClick = (selected) => {
    const restName = selected[0];
    const restaurant = this.props.restaurants.filter(rest => rest.name === restName)[0];

    this.props.onRestaurantClick(restaurant);
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Typeahead
          bsSize="large"
          onChange={this.onRestaurantClick.bind(this)}
          labelKey="name"
          options={this.props.restaurants.map(rest => rest.name)}
          placeholder="Search your favorite restaurant"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.items,
});

const mapDispatchToProps = dispatch => ({
  onRestaurantClick: restaurant => dispatch(selectRestaurant(restaurant)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSearch);
