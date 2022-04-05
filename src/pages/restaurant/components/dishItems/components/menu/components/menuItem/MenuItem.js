// prop-types
import PropTypes from "prop-types";

// reader
import menuItemReader from "./readers/MenuItemReader";

// components
import Button, { TYPES } from "../../../../../../../../commonComponents/button";

// helpers
import { getFormattedCurrency } from "./helpers/getFormmatedCurrency";
import { getDishIcon } from "./helpers/getDishIcon";

// css
import "./menuItem.css";

const MenuItem = function (props) {
  const { item } = props;

  const name = menuItemReader.name(item);
  const type = menuItemReader.type(item);
  const currency = menuItemReader.currency(item);
  const price = menuItemReader.price(item);
  const description = menuItemReader.description(item);

  return (
    <div className="menu-item">
      <div>
        <img src={getDishIcon(type)} alt={type} className="icon" />
        <h3>{name}</h3>
        <p>{getFormattedCurrency(price, currency)}</p>
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
