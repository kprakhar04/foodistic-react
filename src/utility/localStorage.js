export const saveItem = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};
