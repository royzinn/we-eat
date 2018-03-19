import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RestaurantCard extends Component {
  static propTypes = {
    restaurant: PropTypes.object,
    selectedRestaurant: PropTypes.object,
    onRestaurantClick: PropTypes.func.isRequired,
  };


  state = { restaurant: this.props.restaurant };

  onRestaurantClick = () => {
    this.props.onRestaurantClick(this.state.restaurant);
  }

  ratingToStars(rating) {
    return Array(rating).fill('⭐');
  }

  render() {
    const restaurant = this.state.restaurant;

    return (
      <div className="card mb-2" onClick={this.onRestaurantClick}>
        <div className={`card-body ${this.props.selectedRestaurant === restaurant ? 'active' : ''}`}>
          <h5 className="card-title text-capitalize">
            {restaurant.name}
            { restaurant.accepts_10bis && <span className="ml-1 tenbis-wrap"><img src="/images/10bis.png" /></span> }
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {`Cuisines: ${restaurant.genres.map(genre => genre.name).join(', ')}`}
          </h6>
          <p className="card-subtitle mb-2 text-muted">Rating: {this.ratingToStars(restaurant.rating)}</p>
          {
            restaurant.reviews.length ?
              <a href="#" className="card-link">Reviews ({restaurant.reviews.length})</a> :
              <span>No reviews yet</span>
          }
        </div>
      </div>
    );
  }
}
