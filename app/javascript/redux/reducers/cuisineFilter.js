import { SET_CUISINE_FILTER } from '../actionCreators/setCuisineFilter';

export default function cuisineFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
  case SET_CUISINE_FILTER:
    return action.filter;
  default:
    return state;
  }
}
