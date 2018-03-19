import React from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from './RestaurantCard';

export default function RestaurantsList({ restaurants, onRestaurantClick, selectedRestaurant }) {
  return (
    <div className="restaurants-list">
      {restaurants.map(restaurant => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onRestaurantClick={onRestaurantClick}
          selectedRestaurant={selectedRestaurant}
        />
      ))}
    </div>
  );
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object),
  onRestaurantClick: PropTypes.func.isRequired,
  selectedRestaurant: PropTypes.object,
};
