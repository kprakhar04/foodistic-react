export const saveItemsToLocalStorage = (itemsKey, items) => {
  localStorage.setItem(itemsKey, JSON.stringify(items));
};
