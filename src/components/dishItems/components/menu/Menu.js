// prop-types
import PropTypes from "prop-types";

// lodash
import _keys from "lodash/keys";
import _map from "lodash/map";

// components
import MenuCategoryRow from "./components/MenuCategoryRow";
import MenuRow from "./components/MenuRow";

// css
import "./menu.css";

const renderMenuRow = (item) => {
  const { id } = item;
  return <MenuRow key={id} item={item} />;
};

const getMenuRowRenderProps = (items) => {
  return _map(items, renderMenuRow);
};

const renderMenuCatgeoryRow = (category, items) => {
  const currItem = items[category];
  return (
    <MenuCategoryRow
      key={category}
      heading={category}
      subtitle={currItem.length}
      items={currItem}
      renderRowItems={getMenuRowRenderProps}
    />
  );
};

const renderMenu = (items) => {
  const itemCategories = _keys(items);
  return _map(itemCategories, (itemCategory) =>
    renderMenuCatgeoryRow(itemCategory, items)
  );
};

const Menu = function (props) {
  const { items, className } = props;

  return <div className={`menu-items ${className}`}>{renderMenu(items)}</div>;
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
  className: "",
};

Menu.propTypes = {
  items: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.any)),
  className: PropTypes.string,
};

export default Menu;
