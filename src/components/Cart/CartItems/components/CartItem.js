// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// helpers
import { getCurrencySymbol, getIcon } from "../../../../utility/helpers";

// components
import PlusMinusButton from "../../../../commonComponents/Button/PlusMinusButton";

// css
import "./CartItem.css";

const CartItem = function (props) {
  const {
    item: { id, name, type, currency, itemPrice, quantity },
    onCartChange,
  } = props;

  return (
    <div className="cart-item flex justify-content-space-between">
      <div className="flex">
        <img src={getIcon(type)} className="icon" alt={type} />
        <h6>{name}</h6>
      </div>
      <div className="flex align-items-center justify-content-space-between">
        <PlusMinusButton id={id} quantity={quantity} onChange={onCartChange} />
        <p>
          {getCurrencySymbol(currency)} {itemPrice}
        </p>
      </div>
    </div>
  );
};

CartItem.defaultProps = {
  item: {
    id: "random",
    name: "Item 1",
    itemPrice: 250,
    quantity: 1,
    currency: "INR",
    type: "veg",
  },
  onCartChange: _noop,
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    type: PropTypes.string,
    itemPrice: PropTypes.number,
    quantity: PropTypes.number,
  }),
  onCartChange: PropTypes.func,
};

export default CartItem;
