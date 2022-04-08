// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// helpers
import { getDishIcon } from "../../../../utility/getDishIcon";
import { getFormattedCurrency } from "../../../../utility/moneyUtil";
import { getItemPrice } from "./cartItem.helpers";

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
    onAddToCart,
    onQuantityIncrement,
    onQuantityDecrement,
  } = props;

  const itemPrice = getItemPrice(quantity, price);
  const icon = getDishIcon(type);
  const formattedCurrency = getFormattedCurrency(itemPrice, currency);

  return (
    <div className="cart-item flex justify-content-space-between">
      <div className="flex">
        <img src={icon} className="icon" alt={type} />
        <h6>{name}</h6>
      </div>
      <div className="flex align-items-center justify-content-space-between cart-item-btn">
        <CartButton
          onAddToCart={onAddToCart}
          onQuantityIncrement={onQuantityIncrement}
          onQuantityDecrement={onQuantityDecrement}
          quantity={quantity}
          id={productId}
        />
        <p>{formattedCurrency}</p>
      </div>
    </div>
  );
};

CartItem.defaultProps = {
  item: {},
  onAddToCart: _noop,
  onQuantityIncrement: _noop,
  onQuantityDecrement: _noop,
};

CartItem.propTypes = {
  item: PropTypes.object,
  onAddToCart: PropTypes.func,
  onQuantityIncrement: PropTypes.func,
  onQuantityDecrement: PropTypes.func,
};

export default CartItem;
