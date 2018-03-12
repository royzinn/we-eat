import {
  SET_CUISINE_FILTER,
  SET_RATINGS_FILTER,
  SET_DELIVERY_TIME_FILTER,
} from '../actions/filters';

export function cuisineFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
  case SET_CUISINE_FILTER:
    return action.filter;
  default:
    return state;
  }
}

export function rateFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
  case SET_RATINGS_FILTER:
    return action.filter;
  default:
    return state;
  }
}

export function deliveryTimeFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
  case SET_DELIVERY_TIME_FILTER:
    return action.filter;
  default:
    return state;
  }
}
