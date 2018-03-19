export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';
export const REQUEST_RESTAURANTS = 'REQUEST_RESTAURANTS';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const REQUEST_ADD_RESTAURANT = 'REQUEST_ADD_RESTAURANT';
export const RECEIVE_ADD_RESTAURANTS = 'RECEIVE_ADD_RESTAURANTS';

export function selectRestaurant(restaurant) {
  return {
    type: SELECT_RESTAURANT,
    restaurant,
  };
}

function requestRestaurants() {
  return {
    type: REQUEST_RESTAURANTS,
  };
}

function receiveRestaurants(restaurants) {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants: restaurants,
  };
}

async function asyncFetchRestaurants(dispatch) {
  const response = await fetch('/restaurants');
  const restaurants = await response.json();

  dispatch(receiveRestaurants(restaurants));

  return restaurants;
}

export function fetchRestaurants() {
  return dispatch => {
    dispatch(requestRestaurants());
    return asyncFetchRestaurants(dispatch);
  };
}

function requestAddRestaurant() {
  return {
    type: REQUEST_ADD_RESTAURANT,
  };
}

function receiveAddRestaurant(restaurant) {
  return {
    type: RECEIVE_ADD_RESTAURANTS,
    restaurant: restaurant,
  };
}

async function asyncAddRestaurant(dispatch, restaurant) {
  const response = await fetch('/restaurants');

  dispatch(receiveAddRestaurant(restaurant));

  return restaurant;
}

export function addRestaurant(restaurant) {
  return dispatch => {
    dispatch(requestAddRestaurant());
    return asyncAddRestaurant(dispatch, restaurant);
  };
}

