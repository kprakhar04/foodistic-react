// constants
import { BASE_URL } from "./baseURL";

const handleCartItemsSuccess = (response) => response.json();

export const postCartItems = (cartItems) => {
  return fetch(`${BASE_URL}/carts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItems),
  }).then(handleCartItemsSuccess);
};
