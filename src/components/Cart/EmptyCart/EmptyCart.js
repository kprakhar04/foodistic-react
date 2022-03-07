// prop-types
import PropTypes from "prop-types";

// constants
import { ASSET_DIR } from "../../../constants/directoryEndPoint";

// css
import "./EmptyCart.css";

const EmptyCart = function (props) {
  const { heading, cartEmpty, description, className } = props;
  return (
    <div className={`cart-empty flex-column ${className}`}>
      <h3>{heading}</h3>
      <div>
        <img src={cartEmpty} alt="No items in the cart" />
        <p>{description}</p>
      </div>
    </div>
  );
};

EmptyCart.defaultProps = {
  heading: "Cart Empty",
  description: "No items in the cart",
  className: "",
  icon: `${ASSET_DIR}/cart_empty.png`,
};
EmptyCart.propTypes = {
  heading: PropTypes.string,
  cartEmpty: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default EmptyCart;
