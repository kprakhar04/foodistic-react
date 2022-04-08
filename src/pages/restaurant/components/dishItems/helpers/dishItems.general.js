import _transform from "lodash/transform";
import _forEach from "lodash/forEach";
import _find from "lodash/find";

// helpers
import { compose } from "../../../../../utility/compose";

export const findItemById = (items, id) => _find(items, { productId: id });

const updateItem = (item, id, changeQuantityBy) => {
  if (!item) {
    return { productId: id, quantity: changeQuantityBy };
  }

  const { quantity: oldQuantity } = item;
  return {
    ...item,
    quantity: changeQuantityBy + oldQuantity,
  };
};

const filterItem = (item) => {
  if (item?.quantity === 0) {
    return;
  }
  return item;
};

export const updateAndFilterItem = compose(filterItem, updateItem);

const storeDishItems = (res, itemsValue) => {
  _forEach(itemsValue, (item) => (res[item?.id] = item));
};

export const getTransformedDishItems = (items) => {
  return _transform(items, storeDishItems, {});
};

export const updateCartItems = (updatedItem) => (draft) => {
  const index = draft.findIndex((item) => {
    return item.productId === updatedItem.productId;
  });

  if (index === -1) {
    draft.push(updatedItem);
  } else {
    draft[index] = updatedItem;
  }
};

export const updateCartIfQuantityIsZero = (updatedItem) => (draft) => {
  const index = draft.findIndex(
    (item) => item?.productId === updatedItem?.productId
  );

  if (index !== -1) {
    draft.splice(index, 1);
  }
};
