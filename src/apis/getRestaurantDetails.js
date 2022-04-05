// constants
import { baseUrl } from "./baseUrl";

const handleRestaurantDetailsSuccess = (response) => response.json();

export const getRestaurantDetails = (id) => {
  return fetch(`${baseUrl}/restaurants/${id}`).then(
    handleRestaurantDetailsSuccess
  );
};
