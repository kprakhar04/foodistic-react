// compose
import { compose } from "../../utility/compose";

const findProductForItem = (products) => (item) => {
  const { productId } = item;
  return { ...item, product: products[productId] };
};

export const getCartWithProducts = (products, cartItems) => {
  return cartItems.map(findProductForItem(products));
};

const calculateTotalAmount = (amount, currItem) => {
  const {
    product: { price },
    quantity,
  } = currItem;
  return amount + price * quantity;
};

export const getTotalAmountOfCart = (items) => {
  return items.reduce(calculateTotalAmount, 0);
};

const calculateTotalItems = (totalItems, currItem) => {
  const { quantity } = currItem;
  return totalItems + quantity;
};

const getTotalItemsInCart = (items) => {
  return items.reduce(calculateTotalItems, 0);
};

export const getSubHeading = (count) =>
  count === 1 ? `${count} item` : `${count} items`;

export const renderSubHeading = compose(getSubHeading, getTotalItemsInCart);
