export const REQUEST_CUISINES = 'REQUEST_CUISINES';
export const RECEIVE_CUISINES = 'RECEIVE_CUISINES';

function requestCuisines() {
  return {
    type: REQUEST_CUISINES,
  };
}

function receiveCuisines(cuisines) {
  return {
    type: RECEIVE_CUISINES,
    cuisines: cuisines,
  };
}

async function asyncFetch(dispatch) {
  const response = await fetch('/genres');
  const cuisines = await response.json();

  dispatch(receiveCuisines(cuisines));

  return cuisines;
}

export function fetchCuisines() {
  return dispatch => {
    dispatch(requestCuisines());
    return asyncFetch(dispatch);
  };
}


