// prop-types
import PropTypes from "prop-types";

//lodash
import _map from "lodash/map";

// components
import MenuItem from "../menuItem";

// css
import "./menuItemList.css";

const renderMenuItem = (item) => {
  const { id } = item;
  return <MenuItem key={id} item={item} />;
};

const MenuItemList = function (props) {
  const { itemList } = props;

  return _map(itemList, renderMenuItem);
};

MenuItemList.defaultProps = {
  itemList: [
    {
      name: "Item",
      currency: "INR",
      price: 250,
      description: "",
      type: "veg",
    },
  ],
};

MenuItemList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object),
};

export default MenuItemList;
