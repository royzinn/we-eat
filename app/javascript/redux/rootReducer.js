import { combineReducers } from 'redux';
import cuisines from './reducers/cuisines';
import restaurants from './reducers/restaurants';
import cuisineFilter from './reducers/cuisineFilter';
import rateFilter from './reducers/rateFilter';
import deliveryTimeFilter from './reducers/deliveryTimeFilter';
import selectedRestaurant from './reducers/selectedRestaurant';

export const rootReducer = combineReducers({
  cuisines,
  restaurants,
  cuisineFilter,
  rateFilter,
  deliveryTimeFilter,
  selectedRestaurant,
});

