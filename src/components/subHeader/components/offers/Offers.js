//prop-types
import PropTypes from "prop-types";
import OfferItemList from "./components/offerItemList";

// css
import "./offers.css";

const Offers = function (props) {
  const { offers } = props;
  return (
    <div className="offers">
      <div>offers</div>
      <OfferItemList offers={offers} />
    </div>
  );
};

Offers.defaultProps = {
  offers: [
    {
      discount: "Upto 20% on XYZ credits cards",
      coupon: "XYZ20",
    },
  ],
};

Offers.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      discount: PropTypes.string,
      coupon: PropTypes.string,
    })
  ),
};

export default Offers;
