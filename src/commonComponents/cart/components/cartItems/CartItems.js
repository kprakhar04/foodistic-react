// prop-types
import PropTypes from "prop-types";

//lodash
import _map from "lodash/map";
import _noop from "lodash/noop";

// component
import CartItem from "../cartItem";

// css
import "./cartItems.css";

const CartItems = function (props) {
  const { items, onAddToCart, onQuantityIncrement, onQuantityDecrement } =
    props;

  const renderCartItem = (item) => {
    return (
      <CartItem
        key={item.productId}
        item={item}
        onAddToCart={onAddToCart}
        onQuantityIncrement={onQuantityIncrement}
        onQuantityDecrement={onQuantityDecrement}
      />
    );
  };

  return (
    <div className="cart-items flex-column justify-content-space-between">
      {_map(items, renderCartItem)}
    </div>
  );
};

CartItems.defaultProps = {
  items: [],
  onAddToCart: _noop,
  onQuantityIncrement: _noop,
  onQuantityDecrement: _noop,
};

CartItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      quantity: PropTypes.number,
    })
  ),
  onAddToCart: PropTypes.func,
  onQuantityIncrement: PropTypes.func,
  onQuantityDecrement: PropTypes.func,
};

export default CartItems;
