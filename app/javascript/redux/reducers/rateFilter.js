import { SET_RATINGS_FILTER } from '../actionCreators/setRatingsFilter';

export default function rateFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
  case SET_RATINGS_FILTER:
    return action.filter;
  default:
    return state;
  }
}
