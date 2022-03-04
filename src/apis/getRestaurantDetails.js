import { baseUrl } from "./baseUrl";

const handleSuccess = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

export const getRestaurantDetails = (id) => {
  return fetch(`${baseUrl}/restaurants/${id}`).then(handleSuccess);
};
