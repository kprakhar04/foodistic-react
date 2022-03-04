import _property from "lodash/property";

const discount = _property("discount");
const coupon = _property("coupon");

const READER = {
  discount,
  coupon,
};

export default READER;
