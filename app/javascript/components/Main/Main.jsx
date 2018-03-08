import React, { Component } from 'react';
import Header from '../Header/Header';
import FiltersBar from '../FiltersBar/FiltersBar';
import RestaurantsMain from '../Restaurants/RestaurantsMain/RestaurantsMain';

export default class Main extends Component {
  state = {
    restaurants: [],
    cuisines: [],
    cuisineFilter: 'SHOW_ALL',
    rateFilter: 'SHOW_ALL',
    deliveryTimeFilter: 'SHOW_ALL',
  };

  componentDidMount() {
    this.fetchRestaurants();
    this.fetchCuisines();
  }

  async fetchRestaurants() {
    const response = await fetch('/restaurants');
    const restaurants = await response.json();

    this.setState(() => ({ restaurants }));
  }

  async fetchCuisines() {
    const response = await fetch('/genres');
    const cuisines = await response.json();

    this.setState(() => ({ cuisines }));
  }

  filterCuisines = (e) => {
    const cuisineFilter = e.target.value || 'SHOW_ALL';

    this.setState(() => ({ cuisineFilter }));
  }

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

  filteredRestaurants() {
    const { cuisineFilter, rateFilter, deliveryTimeFilter } = this.state;
    const showAll = 'SHOW_ALL';

    return this.state.restaurants.filter(restaurant =>
      ((rateFilter === showAll) || (restaurant.rating === rateFilter)) &&
      ((cuisineFilter === showAll) || (restaurant.genres.map(genre => genre.name).includes(cuisineFilter))) &&
      ((deliveryTimeFilter === showAll) || (restaurant.max_delivery_time <= deliveryTimeFilter))
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <FiltersBar
          cuisines={this.state.cuisines.map(cuisine => cuisine.name)}
          filterCuisines={this.filterCuisines}
          filterRating={this.filterRating}
          filterDeliveryTime={this.filterDeliveryTime}
        />
        <RestaurantsMain restaurants={this.filteredRestaurants()} />
      </div>
    );
  }
}
