// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// reader
import menuItemReader from "../readers/MenuItemReader";

// helpers
import { getCurrencySymbol, getIcon } from "../../../../../utility/helpers";

// components
import PlusMinusButton from "../../../../../commonComponents/Button/PlusMinusButton";
import PrimaryButton from "../../../../../commonComponents/Button/PrimaryButton";

// css
import "./MenuRow.css";

const renderButton = function ({ id, category, quantity }, callback) {
  if (!quantity) {
    return (
      <PrimaryButton
        handleClick={() => callback(id, 1, category)}
        btnText="Add"
      />
    );
  }
  return <PlusMinusButton id={id} quantity={quantity} onChange={callback} />;
};

const MenuRow = function ({ item, quantity, addToCart }) {
  const id = menuItemReader.id(item);
  const name = menuItemReader.name(item);
  const type = menuItemReader.type(item);
  const currency = menuItemReader.currency(item);
  const price = menuItemReader.price(item);
  const description = menuItemReader.description(item);
  const { category } = item;

  return (
    <div className="item-row">
      <div>
        <img src={getIcon(type)} alt={type} className="icon" />
        <h3>{name}</h3>
        <p>
          {getCurrencySymbol(currency)} {price}
        </p>
        <div>{description}</div>
      </div>

      {renderButton(
        {
          quantity,
          id,
          category,
        },
        addToCart
      )}
    </div>
  );
};

MenuRow.defaultProps = {
  item: {
    type: "veg",
    name: "Item Name",
    currency: "&#8377;",
    price: 250,
    description: "",
  },
  quantity: 0,
  addToCart: _noop,
};

MenuRow.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    currency: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    description: PropTypes.string,
  }),
  quantity: PropTypes.number,
  addToCart: PropTypes.func,
};

export default MenuRow;
