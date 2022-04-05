//prop-types
import PropTypes from "prop-types";

// lodash
import _map from "lodash/map";

// components
import OfferItem from "../offerItem";

const renderOffer = (offer) => {
  const { coupon } = offer;
  return <OfferItem key={coupon} item={offer} />;
};

const OfferItemList = (props) => {
  const { offers } = props;

  return _map(offers, renderOffer);
};

OfferItemList.defaultProps = {
  offers: [
    {
      discount: "Upto 20% on XYZ credits cards",
      coupon: "XYZ20",
    },
  ],
};

OfferItemList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      discount: PropTypes.string,
      coupon: PropTypes.string,
    })
  ),
};

export default OfferItemList;
