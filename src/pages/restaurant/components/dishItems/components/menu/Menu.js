// prop-types
import PropTypes from "prop-types";

// lodash
import _map from "lodash/map";
import _startCase from "lodash/startCase";
import _noop from "lodash/noop";

// components
import MenuSection from "./components/menuSection";

// css
import "./menu.css";

const Menu = function (props) {
  const { items, className, cart, onCartChange } = props;

  const renderMenuSection = (itemValuesList, itemKey) => {
    return (
      <MenuSection
        key={itemKey}
        itemList={itemValuesList}
        heading={_startCase(itemKey)}
        cart={cart}
        onCartChange={onCartChange}
      />
    );
  };

  return (
    <div className={`menu-items ${className}`}>
      {_map(items, renderMenuSection)}
    </div>
  );
};

Menu.defaultProps = {
  items: {},
  className: "",
  cart: [],
  onCartChange: _noop,
};

Menu.propTypes = {
  items: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  className: PropTypes.string,
  cart: PropTypes.array,
  onCartChange: PropTypes.func,
};

export default Menu;
