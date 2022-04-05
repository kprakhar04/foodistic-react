// constants
import { CURRENCY_NAME_TO_SYMBOL } from "../../../../../../../../../constants/currency";

export const getFormattedCurrency = (price, currency) => {
  return `${CURRENCY_NAME_TO_SYMBOL[currency]} ${price}`;
};
