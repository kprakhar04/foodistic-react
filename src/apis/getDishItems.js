// constants
import { baseUrl } from "./baseUrl";

const handleDishItemsSuccess = (response) => response.json();

export const getDishItems = (id) => {
  return fetch(`${baseUrl}/dishes/${id}`).then(handleDishItemsSuccess);
};
