// prop-types
import PropTypes from "prop-types";

// lodash
import _map from "lodash/map";

// components
import MenuSection from "./components/menuSection";

// css
import "./menu.css";

const renderMenuSection = (itemValuesList, itemKey) => {
  return (
    <MenuSection key={itemKey} itemList={itemValuesList} heading={itemKey} />
  );
};

const Menu = function (props) {
  const { items, className } = props;

  return (
    <div className={`menu-items ${className}`}>
      {_map(items, renderMenuSection)}
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
  className: "",
};

Menu.propTypes = {
  items: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  className: PropTypes.string,
};

export default Menu;
