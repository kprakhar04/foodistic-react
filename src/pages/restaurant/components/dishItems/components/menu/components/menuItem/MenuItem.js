// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// reader
import menuItemReader from "./readers/MenuItemReader";

// helpers
import { getDishIcon } from "../../../../../../../../utility/getDishIcon";
import { getFormattedCurrency } from "../../../../../../../../utility/moneyUtil";

// components
import CartButton from "../../../../../../../../commonComponents/cart/components/cartButton";

// css
import "./menuItem.css";

const MenuItem = function (props) {
  const {
    item,
    quantity,
    onAddToCart,
    onQuantityIncrement,
    onQuantityDecrement,
  } = props;

  const id = menuItemReader.id(item);
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
        <CartButton
          id={id}
          onAddToCart={onAddToCart}
          onQuantityIncrement={onQuantityIncrement}
          onQuantityDecrement={onQuantityDecrement}
          quantity={quantity}
        />
      </div>
    </div>
  );
};

MenuItem.defaultProps = {
  item: {},
  onAddToCart: _noop,
  onQuantityIncrement: _noop,
  onQuantityDecrement: _noop,
  quantity: undefined,
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.string,
    name: PropTypes.string,
    currency: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    description: PropTypes.string,
  }),
  onAddToCart: PropTypes.func,
  onQuantityIncrement: PropTypes.func,
  onQuantityDecrement: PropTypes.func,
  quantity: PropTypes.number,
};

export default MenuItem;
