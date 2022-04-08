// helpers
import { compose } from "../../../../../utility/compose";

export const findItemById = (items, id) =>
  items.find((item) => item.productId === id);

const updateQuantity = (id, changeQuantityBy) => (item) => {
  if (item.productId === id) {
    const { quantity: oldQuantity } = item;
    return { ...item, quantity: changeQuantityBy + oldQuantity };
  }
  return item;
};

export const updateItemQuantity = (isOldItem, items, id, changeQuantityBy) => {
  if (isOldItem) {
    return items.map(updateQuantity(id, changeQuantityBy));
  }
  return [
    ...items,
    {
      productId: id,
      quantity: changeQuantityBy,
    },
  ];
};

const filterItem = (item) => item.quantity !== 0;

export const filterItemIfQuantityIsZero = (items) => {
  return items.filter(filterItem);
};

export const updateAndFilterCart = compose(
  filterItemIfQuantityIsZero,
  updateItemQuantity
);
