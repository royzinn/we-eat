import {
  REQUEST_CUISINES,
  RECEIVE_CUISINES,
} from '../actions/cuisines';

export function cuisines(
  state = {
    isFetching: false,
    items: [],
  },
  action
) {
  switch (action.type) {
  case REQUEST_CUISINES:
    return { ...state, isFetching: true };
  case RECEIVE_CUISINES:
    return { ...state, isFetching: false, items: action.cuisines };
  default:
    return state;
  }
}
