// lodash
import _reduce from "lodash/reduce";

// constans
import { CART_ITEMS } from "../constants/cart.properties";
import { saveItem } from "../../../utility/localStorage";

export const calcTotalAmount = (item) => {
  const { quantity, price } = item;
  return quantity * price;
};
export const calcItemsCount = (item) => {
  const { quantity } = item;
  return quantity;
};

export const computeCartValues = function (items, getValue) {
  return _reduce(
    items,
    function computeCartValues(prev, item) {
      return prev + getValue(item);
    },
    0
  );
};

export const handleCheckout = function (items, makeCartEmpty) {
  saveItem(CART_ITEMS, items);
  makeCartEmpty();
};
