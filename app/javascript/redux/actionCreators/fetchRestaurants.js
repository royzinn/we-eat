export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';

export default function fetchRestaurants(restaurants) {
  return { type: FETCH_RESTAURANTS, restaurants };
}
