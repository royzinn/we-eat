import React from 'react';
import Header from '../Header/Header';
import FiltersBar from '../FiltersBar/FiltersBar';
import RestaurantsMain from '../Restaurants/RestaurantsMain';

export default function Main() {
  return (
    <div className="container-fluid">
      <Header />
      <FiltersBar />
      <RestaurantsMain />
    </div>
  );
}
