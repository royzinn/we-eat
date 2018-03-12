export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';
export const REQUEST_RESTAURANTS = 'REQUEST_RESTAURANTS';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';

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

async function asyncFetch(dispatch) {
  const response = await fetch('/restaurants');
  const restaurants = await response.json();

  dispatch(receiveRestaurants(restaurants));

  return restaurants;
}

export function fetchRestaurants() {
  return dispatch => {
    dispatch(requestRestaurants());
    return asyncFetch(dispatch);
  };
}

