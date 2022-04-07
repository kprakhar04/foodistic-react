const CURRENCY_NAME_TO_SYMBOL = {
  INR: "\u20B9",
  USD: "\u0024",
};
Object.freeze(CURRENCY_NAME_TO_SYMBOL);

export const getFormattedCurrency = (price, currency) => {
  return `${CURRENCY_NAME_TO_SYMBOL[currency]}${price}`;
};
