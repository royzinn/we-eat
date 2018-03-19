import React from 'react';
import RestaurantSearch from './RestaurantSearch';
import AddRestaurantModal from '../Modals/AddRestaurantModal';

export default function Header() {
  return (
    <div className="row header">
      <div className="container">
        <h1 className="text-center">WeEat</h1>
        <RestaurantSearch />
        <AddRestaurantModal />
      </div>
    </div>
  );
}
