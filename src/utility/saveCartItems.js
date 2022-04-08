export const saveCartItems = (itemsKey, items) => {
  localStorage.setItem(itemsKey, JSON.stringify(items));
};
