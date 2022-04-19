// action-types
import { FETCH_RESTAURANT } from "./types";

// apis
import { getRestaurantDetails } from "../../../apis/getRestaurantDetails";
import { getDishItems } from "../../../apis/getDishItems";

export const fetchRestaurant = (restaurantID) => async (dispatch) => {
  const response = await Promise.all([
    getRestaurantDetails(restaurantID),
    getDishItems(restaurantID),
  ]);

  dispatch({
    type: FETCH_RESTAURANT,
    payload: response,
  });
};
