// lodash
import _find from "lodash/find";

export const getItemQuantityInCart = (cartItems, id) => {
  const foundItem = _find(cartItems, { productId: String(id) });
  return foundItem?.quantity;
};
