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
  const {
    heading,
    itemList,
    cart,
    onAddToCart,
    onQuantityIncrement,
    onQuantityDecrement,
  } = props;

  const subHeading = getSubHeading(itemList.length);

  return (
    <div className="menu-section" id={sanitizeText(heading)}>
      <h2>{heading}</h2>
      <p className="sub-title">{subHeading}</p>
      <MenuItemList
        itemList={itemList}
        cart={cart}
        onAddToCart={onAddToCart}
        onQuantityIncrement={onQuantityIncrement}
        onQuantityDecrement={onQuantityDecrement}
      />
    </div>
  );
};

MenuSection.defaultProps = {
  heading: "Heading",
  itemList: {},
  cart: [],
  onAddToCart: _noop,
  onQuantityIncrement: _noop,
  onQuantityDecrement: _noop,
};

MenuSection.propTypes = {
  heading: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
  cart: PropTypes.array,
  onAddToCart: PropTypes.func,
  onQuantityIncrement: PropTypes.func,
  onQuantityDecrement: PropTypes.func,
};

export default MenuSection;
