import {
  SELECT_RESTAURANT,
  REQUEST_RESTAURANTS,
  RECEIVE_RESTAURANTS,
} from '../actions/restaurants';

export function selectedRestaurant(state = {}, action) {
  switch (action.type) {
  case SELECT_RESTAURANT:
    return action.restaurant || {};
  default:
    return state;
  }
}

export function restaurants(
  state = {
    isFetching: false,
    items: [],
  },
  action
) {
  switch (action.type) {
  case REQUEST_RESTAURANTS:
    return { ...state, isFetching: true };
  case RECEIVE_RESTAURANTS:
    return { ...state, isFetching: false, items: action.restaurants };
  default:
    return state;
  }
}
