// prop-types
import PropTypes from "prop-types";

//lodash
import _noop from "lodash/noop";
import _startCase from "lodash/startCase";

// helpers
import { sanitizeText } from "../../../../../../utility/sanitizeText";

// css
import "./menuCategoryRow.css";

const MenuCategoryRow = function (props) {
  const { heading, subtitle, renderRowItems, items } = props;
  return (
    <div className="item-group" id={sanitizeText(heading)}>
      <h2>{_startCase(heading)}</h2>
      <p className="sub-title">{subtitle} items</p>
      {renderRowItems(items)}
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
  renderRowItems: _noop,
};

MenuCategoryRow.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  items: PropTypes.array,
  renderRowItems: PropTypes.func,
};

export default MenuCategoryRow;
