export const getItemQuantityInCart = (items, id) => {
  const itemFound = items.find((item) => item.productId === id);

  if (itemFound) {
    return itemFound?.quantity;
  }
};
