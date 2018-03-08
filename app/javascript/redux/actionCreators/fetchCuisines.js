export const FETCH_CUISINES = 'FETCH_CUISINES';

export default function fetchCuisines(cuisines) {
  return { type: FETCH_CUISINES, cuisines };
}
