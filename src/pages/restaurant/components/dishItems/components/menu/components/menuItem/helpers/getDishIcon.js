// lodash
import _lowerCase from "lodash/lowerCase";
import _startsWith from "lodash/startsWith";

// compose
import { compose } from "../../../../../../../../../utility/compose";

// icons
import veg from "../../../../../../../../../assets/icons/veg.svg";
import nonVeg from "../../../../../../../../../assets/icons/non-veg.svg";

const isMatchWith = compose(_startsWith, _lowerCase);

export const getDishIcon = (dishType) => {
  const isVeg = isMatchWith(dishType, "veg");

  return isVeg ? veg : nonVeg;
};
