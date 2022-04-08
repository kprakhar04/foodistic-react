// react
import { useMemo } from "react";

// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";
import _isEmpty from "lodash/isEmpty";

// constants
import { EMPTY_CART_DESCRIPTION } from "./constants/cart.general";

//helpers
import {
  getCartWithProducts,
  getTotalAmountOfCart,
  renderSubHeading,
} from "./cart.helpers";

// components
import Button, { TYPES } from "../button";
import CartItems from "./components/cartItems";
import IconWithLabel from "../iconWithLabel";

// images
import cartEmpty from "../../assets/images/cart_empty.png";

// css
import "./cart.css";

const Cart = (props) => {
  const {
    cart: cartItems,
    products,
    onAddToCart,
    onQuantityIncrement,
    onQuantityDecrement,
    onCheckout,
  } = props;

  const cartWithProducts = useMemo(() => {
    return getCartWithProducts(products, cartItems);
  }, [products, cartItems]);

  const totalAmount = getTotalAmountOfCart(cartWithProducts);

  const isCartEmpty = _isEmpty(cartItems);

  const subHeading = renderSubHeading(cartItems);

  if (isCartEmpty) {
    return (
      <div className="cart-empty">
        <h3>Cart Empty</h3>
        <IconWithLabel
          className="cart-empty-icon-label"
          icon={cartEmpty}
          label={EMPTY_CART_DESCRIPTION}
        />
      </div>
    );
  }

  return (
    <div className="flex-column justify-content-space-between">
      <div className="cart-header">
        <h3>Cart</h3>
        <p className="sub-title">{subHeading}</p>
      </div>
      <CartItems
        items={cartWithProducts}
        onAddToCart={onAddToCart}
        onQuantityIncrement={onQuantityIncrement}
        onQuantityDecrement={onQuantityDecrement}
      />
      <div className="cart-checkout flex-column">
        <div className="cart-subtotal flex justify-content-space-between">
          <h4>Subtotal</h4>
          <span>&#8377; {totalAmount}</span>
        </div>
        <Button
          type={TYPES.PRIMARY}
          label="Checkout →"
          onClick={onCheckout}
          className="cart-btn"
        />
      </div>
    </div>
  );
};

Cart.defaultProps = {
  products: {},
  cart: [],
  onAddToCart: _noop,
  onQuantityIncrement: _noop,
  onQuantityDecrement: _noop,
  onCheckout: _noop,
};

Cart.propTypes = {
  products: PropTypes.object,
  cart: PropTypes.array,
  onAddToCart: PropTypes.func,
  onQuantityIncrement: PropTypes.func,
  onQuantityDecrement: PropTypes.func,
  onCheckout: PropTypes.func,
};

export default Cart;
