import React, { Component } from 'react';

class RestaurantListItem extends Component {

  starRatings = (stars) => { return Array(stars).fill('⭐') }

  render() {
    const { restaurant } = this.props;

    return (
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title text-capitalize">{restaurant.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {`cuisines: ${restaurant.genres.map(genre => genre.name).join(', ')}`}
          </h6>
          <p className="card-subtitle mb-2 text-muted">Rating: {this.starRatings(restaurant.rating)}</p>
          { restaurant.reviews.length ? <a href="#" className="card-link">Reviews ({restaurant.reviews.length})</a> : <span>No reviews yet</span> }
        </div>
      </div>
    );
  }
}

export default function List({ restaurants }) {
  return (
    <div className="restaurants-list">
      {restaurants && restaurants.map(restaurant => (
        <RestaurantListItem
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
}
