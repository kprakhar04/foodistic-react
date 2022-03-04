// lodash
import _lowerCase from "lodash/lowerCase";
import _replace from "lodash/replace";

// compose
import { compose } from "./compose";

const removeWhiteSpaces = (text) => _replace(text, /\s+/g, "");

export const sanitizeText = compose(removeWhiteSpaces, _lowerCase);
