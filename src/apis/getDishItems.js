// constants
import { BASE_URL } from "./baseURL";

const handleDishItemsSuccess = (response) => response.json();

export const getDishItems = (id) => {
  return fetch(`${BASE_URL}/dishes/${id}`).then(handleDishItemsSuccess);
};
