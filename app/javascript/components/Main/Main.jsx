import React, { Component } from 'react';
import Header from '../Header/Header'
import FiltersBar from '../FiltersBar/FiltersBar'
import RestaurantsMain from '../Restaurants/RestaurantsMain/RestaurantsMain'

export default class Main extends Component {
  state = { restaurants: [], cuisins: [], filters: { rating: null, cuisine: null, speed: null } };

  componentDidMount() {
    this.fetchRestaurants();
    this.fetchCuisins();
  }

  fetchRestaurants() {
    fetch('/restaurants')
      .then(
        response => response.json(),
        error => console.log('An error occurred fetching restaurants.', error)
      )
      .then(restaurants => this.setState({ restaurants }))
  }

  fetchCuisins() {
    fetch('/genres')
      .then(
        response => response.json(),
        error => console.log('An error occurred fetching genres.', error)
      )
      .then(cuisins => this.setState({ cuisins }))
  }

  filterCuisins(e){
    const cuisine = e.target.value

    this.setState({filters: {...this.state.filters, cuisine}});
  }

  filterRating(e){
    const rating = parseInt(e.target.value.match(/\d+/)[0])

    this.setState({filters: {...this.state.filters, rating}});
  }

  filterSpeed(e){
    const speed = parseInt(e.target.value.match(/\d+/)[0])

    this.setState({ filters: {...this.state.filters, speed}});
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
          cuisins={this.state.cuisins}
          filterCuisins={this.filterCuisins.bind(this)}
          filterRating={this.filterRating.bind(this)}
          filterSpeed={this.filterSpeed.bind(this)}
        />
        <RestaurantsMain restaurants={this.filteredRestaurants()} />
      </div>
    );
  }
}
