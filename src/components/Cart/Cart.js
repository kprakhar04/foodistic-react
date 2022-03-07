// reselect
import { defaultMemoize } from "reselect";

// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// constants
import {
  EMPTY_CART_DESCRIPTION,
  EMPTY_CART_ICON,
} from "./constants/cart.properties";
import { ASSET_DIR } from "../../constants/directoryEndPoint";

// helpers
import {
  calcItemsCount,
  calcTotalAmount,
  computeCartValues,
  handleCheckout,
} from "./helpers/cart.helpers";

// components
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
import SecondaryButton from "../../commonComponents/Button/SecondaryButton";

// css
import "./Cart.css";

const memoizedComputeCartValues = defaultMemoize(computeCartValues);

const Cart = function (props) {
  const {
    cart: { items },
    onCartChange,
    onCheckout,
  } = props;

  if (items.length === 0) {
    return (
      <EmptyCart
        cartEmpty={`${ASSET_DIR}/${EMPTY_CART_ICON}`}
        description={EMPTY_CART_DESCRIPTION}
      />
    );
  }

  const totalAmount = memoizedComputeCartValues(items, calcTotalAmount);
  const itemsCount = memoizedComputeCartValues(items, calcItemsCount);

  return (
    <div className="flex-column justify-content-space-between">
      <div className="cart-header">
        <h3>Cart</h3>
        <p className="sub-title">{itemsCount} items</p>
      </div>
      <CartItems items={items} onCartChange={onCartChange} />
      <div className="cart-checkout flex-column">
        <div className="cart-subtotal flex justify-content-space-between">
          <h4>Subtotal</h4>
          <span>&#8377; {totalAmount}</span>
        </div>
        <SecondaryButton
          btnText="Checkout →"
          handleClick={() => handleCheckout(items, onCheckout)}
        />
      </div>
    </div>
  );
};

Cart.defaultProps = {
  cart: {
    items: [
      {
        id: "random",
        name: "Item 1",
        itemPrice: 250,
        quantity: 1,
        currency: "INR",
        type: "veg",
      },
    ],
  },
  onCartChange: _noop,
  onCheckout: _noop,
};

Cart.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.array,
  }),
  onCartChange: PropTypes.func,
  onCheckout: PropTypes.func,
};

export default Cart;
