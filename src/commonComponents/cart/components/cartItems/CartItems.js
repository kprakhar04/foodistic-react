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
  const { items, onCartChange } = props;

  const renderCartItem = (item) => {
    return (
      <CartItem key={item.productId} item={item} onCartChange={onCartChange} />
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
  onCartChange: _noop,
};

CartItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      quantity: PropTypes.number,
    })
  ),
  onCartChange: PropTypes.func,
};

export default CartItems;
