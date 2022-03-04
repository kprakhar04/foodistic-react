// lodash
import _isEmpty from "lodash/isEmpty";

export const checkEqualityWithHash = (text) => {
  const {
    location: { hash },
  } = window;
  return `#${text}` === hash;
};

export const isHashEmpty = () => {
  const {
    location: { hash },
  } = window;

  return _isEmpty(hash);
};
