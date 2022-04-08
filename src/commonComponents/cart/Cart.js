// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

//helpers
import {
  getCartWithProducts,
  getTotalAmountOfCart,
  renderSubHeading,
} from "./cart.helpers";

// components
import Button, { TYPES } from "../button";
import CartItems from "./components/cartItems";

// css
import "./cart.css";

const Cart = (props) => {
  const { cart: cartItems, products, onCartChange, onCheckout } = props;

  const subHeading = renderSubHeading(cartItems);

  const cartWithProducts = getCartWithProducts(products, cartItems);

  const totalAmount = getTotalAmountOfCart(cartWithProducts);

  return (
    <div className="flex-column justify-content-space-between">
      <div className="cart-header">
        <h3>Cart</h3>
        <p className="sub-title">{subHeading}</p>
      </div>
      <CartItems items={cartWithProducts} onCartChange={onCartChange} />
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
  onCartChange: _noop,
  onCheckout: _noop,
};

Cart.propTypes = {
  products: PropTypes.object,
  cart: PropTypes.array,
  onCartChange: PropTypes.func,
  onCheckout: PropTypes.func,
};

export default Cart;
