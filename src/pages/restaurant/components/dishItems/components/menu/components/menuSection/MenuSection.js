// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// components
import MenuItemList from "../menuItemList";

// helpers
import { sanitizeText } from "../../../../../../../../utility/sanitizeText";
import { getSubHeading } from "./menuSection.helpers";

// css
import "./menuSection.css";

const MenuSection = (props) => {
  const { heading, itemList, cart, onCartChange } = props;

  const subHeading = getSubHeading(itemList.length);

  return (
    <div className="menu-section" id={sanitizeText(heading)}>
      <h2>{heading}</h2>
      <p className="sub-title">{subHeading}</p>
      <MenuItemList
        itemList={itemList}
        cart={cart}
        onCartChange={onCartChange}
      />
    </div>
  );
};

MenuSection.defaultProps = {
  heading: "Heading",
  itemList: {},
  cart: [],
  onCartChange: _noop,
};

MenuSection.propTypes = {
  heading: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
  onCartChange: PropTypes.func,
  cart: PropTypes.array,
};

export default MenuSection;
