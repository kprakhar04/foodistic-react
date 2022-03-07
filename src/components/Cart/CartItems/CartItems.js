// prop-types
import PropTypes from "prop-types";

//lodash
import _map from "lodash/map";
import _noop from "lodash/noop";

// component
import CartItem from "./components/CartItem";

// css
import "./CartItems.css";

const renderCartItem = (item, onCartChange) => {
  const { id } = item;
  return <CartItem key={id} item={item} onCartChange={onCartChange} />;
};

const renderCartItemsList = function (items, onCartChange) {
  return _map(items, (item) => renderCartItem(item, onCartChange));
};

const CartItems = function (props) {
  const { items, onCartChange } = props;
  return (
    <div className="cart-items flex-column justify-content-space-between">
      {renderCartItemsList(items, onCartChange)}
    </div>
  );
};

CartItems.defaultProps = {
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
  onCartChange: _noop,
};

CartItems.propTypes = {
  items: PropTypes.array,
  onCartChange: PropTypes.func,
};

export default CartItems;
