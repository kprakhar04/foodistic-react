// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// css
import "./PlusMinusButton.css";

const PlusMinusButton = function (props) {
  const { id, quantity, onChange, className } = props;
  return (
    <div
      className={`plus-minus-btn flex justify-content-center align-items-center ${className}`}
    >
      <span className="decrement" onClick={() => onChange(id, -1)}>
        -
      </span>
      <span className="quantity">{quantity}</span>
      <span className="increment" onClick={() => onChange(id, 1)}>
        +
      </span>
    </div>
  );
};

PlusMinusButton.defaultProps = {
  id: "random",
  quantity: 0,
  onChange: _noop,
  className: "",
};

PlusMinusButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  quantity: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default PlusMinusButton;
