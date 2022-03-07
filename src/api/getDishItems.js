import { baseUrl } from "./baseUrl";

const handleSuccess = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

export const getDishItems = (id) => {
  return fetch(`${baseUrl}/dishes/${id}`).then(handleSuccess);
};
