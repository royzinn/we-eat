export const RESTAURANT_SELECTED = 'RESTAURANT_SELECTED';

export default function setRatingseFilter(restaurnt) {
  return { type: RESTAURANT_SELECTED, restaurnt };
}
