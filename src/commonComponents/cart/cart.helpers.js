// lodash
import _keys from "lodash/keys";

// compose
import { compose } from "../../utility/compose";

const findProductById = (products, item, productCategory) => {
  const productFound = products[productCategory].find((product) => {
    return item.productId === product.id;
  });

  if (productFound) {
    return { ...item, product: productFound };
  }
};

const findProductForItem = (products) => (item) => {
  const productCategories = _keys(products);
  for (const category of productCategories) {
    const product = findProductById(products, item, category);
    if (product) {
      return product;
    }
  }
};

export const getCartWithProducts = (products, items) => {
  return items.map(findProductForItem(products));
};

const calculateTotalAmount = (amount, currItem) => {
  const {
    product: { price },
    quantity,
  } = currItem;
  return amount + +price * quantity;
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
