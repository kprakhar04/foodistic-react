import { FETCH_RESTAURANT } from "../actions/types";

const INITIAL_STATE = {};

export const restaurantReducer = (state = INITIAL_STATE, action) => {
  let restaurantDetails, dishItems;
  if (action?.payload) {
    [restaurantDetails, dishItems] = action.payload;
  }

  switch (action.type) {
    case FETCH_RESTAURANT:
      return { ...state, restaurantDetails, dishItems };
    default:
      return state;
  }
};
