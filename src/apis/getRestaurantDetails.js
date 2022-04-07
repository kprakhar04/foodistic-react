// constants
import { BASE_URL } from "./baseURL";

const handleRestaurantDetailsSuccess = (response) => response.json();

export const getRestaurantDetails = (id) => {
  return fetch(`${BASE_URL}/restaurants/${id}`).then(
    handleRestaurantDetailsSuccess
  );
};
