import React, { Component } from 'react';
import Header from '../Header/Header';
import FiltersBar from '../FiltersBar/FiltersBar';
import RestaurantsMain from '../Restaurants/RestaurantsMain/RestaurantsMain';

export default class Main extends Component {
  filterRating = (e) => {
    const value = e.target.value.match(/\d+/);
    const rateFilter = (value && Number(value[0])) || 'SHOW_ALL';

    this.setState(() => ({ rateFilter }));
  }

  filterDeliveryTime = (e) => {
    const value = e.target.value.match(/\d+/);
    const deliveryTimeFilter = (value && Number(value[0])) || 'SHOW_ALL';

    this.setState(() => ({ deliveryTimeFilter }));
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <FiltersBar />
        <RestaurantsMain />
      </div>
    );
  }
}
