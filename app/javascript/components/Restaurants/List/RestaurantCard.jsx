import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ratingToStars = (rating) => Array(rating).fill('⭐');

export default class RestaurantCard extends Component {
  state = { restaurant: this.props.restaurant };

  onRestaurantClick = () => {
    this.props.onRestaurantClick(this.state.restaurant);
  }

  render() {
    const restaurant = this.state.restaurant;

    return (
      <div className="card mb-2" onClick={this.onRestaurantClick}>
        <div className="card-body">
          <h5 className="card-title text-capitalize">
            {restaurant.name}
            { restaurant.accepts_10bis && <span className="ml-1 tenbis-wrap"><img src="/images/10bis.png" /></span> }
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {`Cuisines: ${restaurant.genres.map(genre => genre.name).join(', ')}`}
          </h6>
          <p className="card-subtitle mb-2 text-muted">Rating: {ratingToStars(restaurant.rating)}</p>
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

RestaurantCard.propTypes = {
  restaurant: PropTypes.object,
  onRestaurantClick: PropTypes.func.isRequired,
};