import _property from "lodash/property";

const name = _property("name");
const type = _property("type");
const currency = _property("currency");
const price = _property("price");
const description = _property("description");

const READER = {
  name,
  type,
  currency,
  price,
  description,
};

export default READER;
