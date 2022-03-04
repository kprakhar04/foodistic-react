//constants
import { CURRENCY_NAME_TO_SYMBOL } from "../constants/currency";

export const getCurrencySymbol = (currencyName) => {
  return CURRENCY_NAME_TO_SYMBOL[currencyName];
};
