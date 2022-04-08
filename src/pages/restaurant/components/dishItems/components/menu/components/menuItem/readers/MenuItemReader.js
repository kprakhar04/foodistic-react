import _property from "lodash/property";

const id = _property("id");
const name = _property("name");
const type = _property("type");
const currency = _property("currency");
const price = _property("price");
const description = _property("description");

const READER = {
  id,
  name,
  type,
  currency,
  price,
  description,
};

export default READER;
