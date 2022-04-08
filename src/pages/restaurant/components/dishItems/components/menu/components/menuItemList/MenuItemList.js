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
  const { itemList, cart: cartItems, onCartChange } = props;

  const renderMenuItem = (item) => {
    const { id = _uniqueId() } = item;
    const quantity = getItemQuantityInCart(cartItems, id);
    return (
      <MenuItem
        key={id}
        item={item}
        onCartChange={onCartChange}
        quantity={quantity}
      />
    );
  };

  return _map(itemList, renderMenuItem);
};

MenuItemList.defaultProps = {
  itemList: [],
  cart: [],
  onCartChange: _noop,
};

MenuItemList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object),
  cart: PropTypes.array,
  onCartChange: PropTypes.func,
};

export default MenuItemList;
