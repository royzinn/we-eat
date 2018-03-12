import React, { Component } from 'react';
import Header from '../Header/Header'
import FiltersBar from '../FiltersBar/FiltersBar'
import RestaurantsMain from '../Restaurants/RestaurantsMain/RestaurantsMain'

export default class Main extends Component {
  state = {
    restaurants: [],
    cuisins: [],
    filters: {
      rating: null,
      cuisine: null,
      speed: null
    }
  };

  componentDidMount() {
    this.fetchRestaurants();
    this.fetchCuisins();
  }

  async fetchRestaurants() {
    const response = await fetch('/restaurants');
    const restaurants = await response.json();

    this.setState(state => ({ restaurants }));
  }

  async fetchCuisins() {
    const response = await fetch('/genres');
    const cuisins = await response.json();

    this.setState(state => ({ cuisins }));
  }

  filterCuisins = (e) => {
    const cuisine = e.target.value

    this.setState(state => ({ filters: { ...state.filters, cuisine } }));
  }

  filterRating = (e) => {
    const rating = e.target.value.match(/\d+/) && Number(e.target.value.match(/\d+/)[0]);

    this.setState(state => ({ filters: { ...state.filters, rating } }));
  }

  filterSpeed = (e) => {
    const speed = e.target.value.match(/\d+/) && Number(e.target.value.match(/\d+/)[0])

    this.setState(state => ({ filters: { ...state.filters, speed } }));
  }

  filteredRestaurants(){
    const { rating, cuisine, speed } = this.state.filters

    return this.state.restaurants.filter(restaurant =>
      (!rating || restaurant.rating === rating) &&
      (!cuisine || restaurant.genres.map(genre => genre.name).includes(cuisine)) &&
      (!speed || restaurant.max_delivery_time <= speed)
    )
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <FiltersBar
          cuisins={this.state.cuisins.map(cuisine => cuisine.name)}
          filterCuisins={this.filterCuisins}
          filterRating={this.filterRating}
          filterSpeed={this.filterSpeed}
        />
        <RestaurantsMain restaurants={this.filteredRestaurants()} />
      </div>
    );
  }
}
