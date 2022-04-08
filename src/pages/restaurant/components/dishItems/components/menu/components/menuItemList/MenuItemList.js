// prop-types
import PropTypes from "prop-types";

//lodash
import _map from "lodash/map";
import _uniqueId from "lodash/uniqueId";
import _noop from "lodash/noop";

// helpers
import { getItemQuantityInCart } from "./menuItemList.helpers";

// components
import MenuItem from "../menuItem";

// css
import "./menuItemList.css";

const MenuItemList = function (props) {
  const {
    itemList,
    cart: cartItems,
    onAddToCart,
    onQuantityIncrement,
    onQuantityDecrement,
  } = props;

  const renderMenuItem = (item) => {
    const { id = _uniqueId() } = item;
    const quantity = getItemQuantityInCart(cartItems, id);
    return (
      <MenuItem
        key={id}
        item={item}
        onAddToCart={onAddToCart}
        onQuantityIncrement={onQuantityIncrement}
        onQuantityDecrement={onQuantityDecrement}
        quantity={quantity}
      />
    );
  };

  return _map(itemList, renderMenuItem);
};

MenuItemList.defaultProps = {
  itemList: [],
  cart: [],
  onAddToCart: _noop,
  onQuantityIncrement: _noop,
  onQuantityDecrement: _noop,
};

MenuItemList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object),
  cart: PropTypes.array,
  onAddToCart: PropTypes.func,
  onQuantityIncrement: PropTypes.func,
  onQuantityDecrement: PropTypes.func,
};

export default MenuItemList;
