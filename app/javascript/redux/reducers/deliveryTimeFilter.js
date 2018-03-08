import { SET_DELIVERY_TIME_FILTER } from '../actionCreators/setDeliveryTimeFilter';

export default function deliveryTimeFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
  case SET_DELIVERY_TIME_FILTER:
    return action.filter;
  default:
    return state;
  }
}
