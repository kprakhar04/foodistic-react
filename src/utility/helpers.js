//constants
import { CURRENCYNAMETOSYMBOL } from "../constants/currency";
import { ICON_ROOT_DIR } from "../constants/directoryEndPoint";

export const getIcon = (key) => {
  return `${ICON_ROOT_DIR}/${key}.svg`;
};

export const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

export const getCurrencySymbol = (currencyName) => {
  return CURRENCYNAMETOSYMBOL[currencyName];
};
