export const SET_CUISINE_FILTER = 'SET_CUISINE_FILTER';
export const SET_RATINGS_FILTER = 'SET_RATINGS_FILTER';
export const SET_DELIVERY_TIME_FILTER = 'SET_DELIVERY_TIME_FILTER';

export function setCuisineFilter(filter) {
  return { type: SET_CUISINE_FILTER, filter };
}

export function setRatingsFilter(filter) {
  return { type: SET_RATINGS_FILTER, filter };
}

export function setDeliveryTimeFilter(filter) {
  return { type: SET_DELIVERY_TIME_FILTER, filter };
}

