// prop-types
import PropTypes from "prop-types";

// reader
import menuItemReader from "./readers/MenuItemReader";

// components
import Button, { TYPES } from "../../../../../../../../commonComponents/button";

// helpers
import { getDishIcon } from "../../../../../../../../utility/getDishIcon";
import { getFormattedCurrency } from "../../../../../../../../utility/moneyUtil";

// css
import "./menuItem.css";

const MenuItem = function (props) {
  const { item } = props;

  const name = menuItemReader.name(item);
  const type = menuItemReader.type(item);
  const currency = menuItemReader.currency(item);
  const price = menuItemReader.price(item);
  const description = menuItemReader.description(item);

  const icon = getDishIcon(type);
  const formmatedCurrency = getFormattedCurrency(price, currency);

  return (
    <div className="menu-item">
      <div>
        <img src={icon} alt={type} className="icon" />
        <h3>{name}</h3>
        <p>{formmatedCurrency}</p>
        <div>{description}</div>
      </div>
      <div>
        <Button label="Add" type={TYPES.SECONDARY} />
      </div>
    </div>
  );
};

MenuItem.defaultProps = {
  item: {},
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    currency: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    description: PropTypes.string,
  }),
};

export default MenuItem;
