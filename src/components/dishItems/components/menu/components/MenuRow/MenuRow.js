// prop-types
import PropTypes from "prop-types";

// reader
import menuItemReader from "../../readers/MenuItemReader";

// components
import PrimaryButton from "../../../../../../commonComponents/primaryButton";

// helpers
import { getCurrencySymbol } from "../../../../../../utility/getCurrencySymbol";
import { getDishIcon } from "../../../../../../utility/getDishIcon";

// css
import "./menuRow.css";

const MenuRow = function ({ item }) {
  const name = menuItemReader.name(item);
  const type = menuItemReader.type(item);
  const currency = menuItemReader.currency(item);
  const price = menuItemReader.price(item);
  const description = menuItemReader.description(item);

  return (
    <div className="item-row">
      <div>
        <img src={getDishIcon(type)} alt={type} className="icon" />
        <h3>{name}</h3>
        <p>
          {getCurrencySymbol(currency)} {price}
        </p>
        <div>{description}</div>
      </div>
      <PrimaryButton btnText="Add" />
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
};

MenuRow.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    currency: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    description: PropTypes.string,
  }),
};

export default MenuRow;
