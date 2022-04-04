// lodash
import _lowerCase from "lodash/lowerCase";
import _startsWith from "lodash/startsWith";

// compose
import { compose } from "./compose";

// icons
import veg from "../assets/icons/veg.svg";
import nonVeg from "../assets/icons/non-veg.svg";

const checkForVeg = compose(_startsWith, _lowerCase);

export const getDishIcon = (dishType) => {
  const isVeg = checkForVeg(dishType, "veg");

  return isVeg ? veg : nonVeg;
};
