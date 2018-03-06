import React, { Component } from 'react';

class RestaurantListItem extends Component {

  starRatings = () => { return Array(this.props.restaurant.rating).fill('⭐') }

  onClick = () => {
    this.props.onRestaurantClick(this.props.restaurant);
  }

  render() {
    const { restaurant, onRestaurantClick } = this.props;

    return (
      <div className="card mb-2" onClick={this.onClick}>
        <div className="card-body">
          <h5 className="card-title text-capitalize">
            {restaurant.name}
            { restaurant.accepts_10bis && <span className="ml-1 tenbis-wrap"><img src="/images/10bis.png"></img></span> }
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {`Cuisines: ${restaurant.genres.map(genre => genre.name).join(', ')}`}
          </h6>
          <p className="card-subtitle mb-2 text-muted">Rating: {this.starRatings()}</p>
          { restaurant.reviews.length ? <a href="#" className="card-link">Reviews ({restaurant.reviews.length})</a> : <span>No reviews yet</span> }
        </div>
      </div>
    );
  }
}

export default function RestaurantsList({ restaurants, onRestaurantClick }) {
  return (
    <div className="restaurants-list">
      {restaurants && restaurants.map(restaurant => (
        <RestaurantListItem
          key={restaurant.id}
          restaurant={restaurant}
          onRestaurantClick={onRestaurantClick}
        />
      ))}
    </div>
  );
}
