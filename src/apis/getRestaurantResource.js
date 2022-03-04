// constants
import { baseUrl } from "./baseUrl";
import { DISHES, RESTAURANTS } from "./properties";

const throwError = (text) => {
  throw new Error(text);
};

const handleSuccess = (response) => {
  if (!response.ok) {
    return response.text().then(throwError);
  }
  return response.json();
};

const getResource = (path, id) => {
  return fetch(`${baseUrl}/${path}/${id}`).then(handleSuccess);
};

export const getRestaurantDetails = (id) => {
  return getResource(RESTAURANTS, id);
};

export const getDishItems = (id) => {
  return getResource(DISHES, id);
};
