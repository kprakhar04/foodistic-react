// prop-types
import PropTypes from "prop-types";

// lodash
import _keys from "lodash/keys";
import _map from "lodash/map";
import _noop from "lodash/noop";

// components
import MenuCategoryRow from "./components/MenuCategoryRow";
import MenuRow from "./components/MenuRow";

// css
import "./Menu.css";

const renderMenuRow = (item, category, idQuantityMapping, onCartChange) => {
  const { id } = item;
  const quantity = idQuantityMapping[id];
  return (
    <MenuRow
      key={id}
      item={{ ...item, category }}
      quantity={quantity}
      addToCart={onCartChange}
    />
  );
};

const getMenuRowRenderProps = (
  items,
  category,
  idQuantityMapping,
  onCartChange
) => {
  return _map(items, (item) =>
    renderMenuRow(item, category, idQuantityMapping, onCartChange)
  );
};

const renderMenuCatgeoryRow = (
  category,
  items,
  itemQuantityPerItemId,
  onCartChange
) => {
  const currItem = items[category];
  return (
    <MenuCategoryRow
      key={category}
      heading={category}
      subtitle={currItem.length}
      items={currItem}
      itemQuantityPerItemId={itemQuantityPerItemId}
      onCartChange={onCartChange}
      renderChild={getMenuRowRenderProps}
    />
  );
};

const renderMenu = (items, itemQuantityPerItemId, onCartChange) => {
  return _map(_keys(items), (itemCategory) =>
    renderMenuCatgeoryRow(
      itemCategory,
      items,
      itemQuantityPerItemId,
      onCartChange
    )
  );
};

const Menu = function (props) {
  const { items, itemQuantityPerItemId, onCartChange } = props;

  return (
    <div className="menu-items">
      {renderMenu(items, itemQuantityPerItemId, onCartChange)}
    </div>
  );
};

Menu.defaultProps = {
  items: {
    itemCategory: [
      {
        name: "Item",
        currency: "INR",
        price: 250,
        description: "",
        type: "veg",
      },
    ],
  },
  itemQuantityPerItemId: {
    1: 10,
  },
  onCartChange: _noop,
};

Menu.propTypes = {
  items: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.any)),
  itemQuantityPerItemId: PropTypes.object,
  onCartChange: PropTypes.func,
};

export default Menu;
