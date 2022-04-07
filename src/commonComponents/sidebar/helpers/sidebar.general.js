//lodash
import _lowerCase from "lodash/lowerCase";

// helpers
import { sanitizeText } from "../../../utility/sanitizeText";

const SCROLL_FACTOR = 2.1875;

export const getMatchedIndexWithUrlHash = (links) => {
  const {
    location: { hash },
  } = window;

  for (const [idx, link] of links.entries()) {
    const sanitizedLink = sanitizeText(link);

    if (hash === `#${sanitizedLink}`) {
      return idx;
    }
  }

  return 0;
};

export const isEqualWith = (value) => (other) =>
  _lowerCase(value) === _lowerCase(other);

export const scrollStyle = (idx) => {
  return {
    transform: `translateY(${idx * SCROLL_FACTOR}rem)`,
  };
};
