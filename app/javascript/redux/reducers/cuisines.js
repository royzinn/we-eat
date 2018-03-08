import { FETCH_CUISINES } from '../actionCreators/fetchCuisines';

export default function fetchCuisines(state = [], action) {
  switch (action.type) {
  case FETCH_CUISINES:
    return {
      ...state,
      cuisines: action.cuisines,
    };
  default:
    return state;
  }
}
