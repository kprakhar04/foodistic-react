// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// helpers
import { getDishIcon } from "../../../../utility/getDishIcon";
import { getFormattedCurrency } from "../../../../utility/moneyUtil";

// components
import CartButton from "../cartButton";

// css
import "./cartItem.css";

const CartItem = function (props) {
  const {
    item: {
      productId,
      quantity,
      product: { name, type, currency, price },
    },
    onCartChange,
  } = props;

  const itemPrice = quantity * price;

  return (
    <div className="cart-item flex justify-content-space-between">
      <div className="flex">
        <img src={getDishIcon(type)} className="icon" alt={type} />
        <h6>{name}</h6>
      </div>
      <div className="flex align-items-center justify-content-space-between cart-item-btn">
        <CartButton
          onCartChange={onCartChange}
          quantity={quantity}
          id={productId}
        />
        <p>{getFormattedCurrency(itemPrice, currency)}</p>
      </div>
    </div>
  );
};

CartItem.defaultProps = {
  item: {},
  onCartChange: _noop,
};

CartItem.propTypes = {
  item: PropTypes.object,
  onCartChange: PropTypes.func,
};

export default CartItem;
