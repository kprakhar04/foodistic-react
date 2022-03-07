// lodash
import _map from "lodash/map";
import _filter from "lodash/filter";
import _find from "lodash/find";

// constants
import { ITEM_PRICE, QUANTITY } from "../constants/properties";

export const findAItemInItemsList = (items, itemId) => {
  return _find(items, function findItemById(item) {
    return item.id === itemId;
  });
};

export const filterItemsOnQuantity = (items) => {
  return _filter(items, function isQuantityZero(item) {
    return item[QUANTITY] !== 0;
  });
};

export const updateItemQuantity = (item, quantity) => {
  const updatedItem = { ...item };
  if (!updatedItem[QUANTITY]) {
    updatedItem[QUANTITY] = 0;
  }
  updatedItem[QUANTITY] += quantity;
  updatedItem[ITEM_PRICE] = updatedItem[QUANTITY] * updatedItem.price;
  return updatedItem;
};

export const updateItemsList = (items, newItem, isNewItem) => {
  if (isNewItem) {
    return [...items, newItem];
  }

  return _map(items, function findByIdAndUpdate(item) {
    return item.id === newItem.id ? newItem : item;
  });
};
