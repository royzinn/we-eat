import { combineReducers } from 'redux';
import { selectedRestaurant, restaurants } from './reducers/restaurants';
import { cuisines } from './reducers/cuisines';
import {
  cuisineFilter,
  rateFilter,
  deliveryTimeFilter,
} from './reducers/filters';

export const rootReducer = combineReducers({
  cuisines,
  restaurants,
  selectedRestaurant,
  cuisineFilter,
  rateFilter,
  deliveryTimeFilter,
});

