// constants
import { baseUrl } from "./baseUrl";

const handleSuccess = (response) => response.json();

export const getRestaurantDetails = (id) => {
  return fetch(`${baseUrl}/restaurants/${id}`).then(handleSuccess);
};
