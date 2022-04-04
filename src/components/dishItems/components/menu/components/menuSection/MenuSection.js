// prop-types
import PropTypes from "prop-types";

// components
import MenuItemList from "../menuItemList";

// helpers
import { sanitizeText } from "../../../../../../utility/sanitizeText";
import _startCase from "lodash/startCase";

// css
import "./menuSection.css";

const getSubTitle = (length) => {
  return length <= 1 ? `${length} item` : `${length} items`;
};

const MenuSection = (props) => {
  const { heading, itemList } = props;

  return (
    <div className="menu-section" id={sanitizeText(heading)}>
      <h2>{_startCase(heading)}</h2>
      <p className="sub-title">{getSubTitle(itemList.length)}</p>
      <MenuItemList itemList={itemList} />
    </div>
  );
};

MenuSection.defaultProps = {
  heading: "Heading",
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
};

MenuSection.propTypes = {
  heading: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
};

export default MenuSection;
