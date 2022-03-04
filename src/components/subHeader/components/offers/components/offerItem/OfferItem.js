// prop-types
import PropTypes from "prop-types";

// reader
import offerReader from "../../readers/offerReader";

// components
import IconWithLabel from "../../../../../../commonComponents/iconWithLabel";

// icons
import offerIcon from "../../../../../../assets/icons/offer.svg";

// css
import "./offerItem.css";

const OfferItem = function ({ item }) {
  const discount = offerReader.discount(item);
  const coupon = offerReader.coupon(item);
  return (
    <IconWithLabel
      label={`${discount} | Use code ${coupon}`}
      icon={offerIcon}
      className="offer"
    />
  );
};

OfferItem.defaultProps = {
  item: {
    discount: "Upto 20% on XYZ credits cards",
    coupon: "XYZ20",
  },
};

OfferItem.propTypes = {
  item: PropTypes.shape({
    discount: PropTypes.string,
    coupon: PropTypes.string,
  }),
};

export default OfferItem;
