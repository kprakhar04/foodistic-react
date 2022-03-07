// prop-types
import PropTypes from "prop-types";

//lodash
import _noop from "lodash/noop";
import _startCase from "lodash/startCase";

// css
import "./MenuCategoryRow.css";

const MenuCategoryRow = function (props) {
  const {
    heading,
    subtitle,
    renderChild,
    items,
    itemQuantityPerItemId,
    onCartChange,
  } = props;

  return (
    <div className="item-group" id={heading}>
      <h2>{_startCase(heading)}</h2>
      <p className="sub-title">{subtitle} items</p>
      {renderChild(items, heading, itemQuantityPerItemId, onCartChange)}
    </div>
  );
};

MenuCategoryRow.defaultProps = {
  heading: "Heading",
  subtitle: "Sub-title",
  items: [
    {
      name: "Item",
      currency: "INR",
      price: 250,
      description: "",
      type: "veg",
    },
  ],
  renderChild: _noop,
  itemQuantityPerItemId: {
    1: 10,
  },
  onCartChange: _noop,
};

MenuCategoryRow.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  items: PropTypes.array,
  renderChild: PropTypes.func,
  itemQuantityPerItemId: PropTypes.object,
  onCartChange: PropTypes.func,
};

export default MenuCategoryRow;
