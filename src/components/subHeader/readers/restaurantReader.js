import _property from "lodash/property";

const thumbnail = _property("thumbnail");
const name = _property("name");
const category = _property("category");
const street = _property("address.street");
const locality = _property("address.locality");
const city = _property("address.city");
const ratingValue = _property("aggregateRating.ratingValue");
const ratingCount = _property("aggregateRating.ratingCount");
const offers = _property("offers");
const deliveryTime = _property("deliveryTime");
const cost = _property("priceRange.cost");
const count = _property("priceRange.count");

const READER = {
  name,
  thumbnail,
  category,
  street,
  locality,
  city,
  ratingValue,
  ratingCount,
  offers,
  deliveryTime,
  cost,
  count,
};

export default READER;
