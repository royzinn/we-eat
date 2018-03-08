import { RESTAURANT_SELECTED } from '../actionCreators/selectRestaurant';

export default function restaurants(state = {}, action) {
  switch (action.type) {
  case RESTAURANT_SELECTED:
    return action.restaurant;
  default:
    return state;
  }
}
